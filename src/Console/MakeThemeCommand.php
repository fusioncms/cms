<?php

namespace Fusion\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeThemeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:theme {namespace} {--template=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new FusionCMS theme';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $namespace = $this->argument('namespace');
        $template = $this->getTemplate();
        $manifest = $this->getManifest();

        if (!File::isDirectory($template)) {
            return $this->error("No template found at '{$template}'");
        }

        if (File::isDirectory(theme_path($namespace))) {
            return $this->error('Theme already exists!');
        }

        File::makeDirectory(theme_path($namespace, 0755, true));

        foreach (File::allFiles($template, true) as $file) {
            $content = $this->replacePlaceholders($file->getContents(), $manifest);
            $relativePath = $file->getRelativePathname();
            $filePath = theme_path("{$namespace}/{$relativePath}");
            $directory = dirname($filePath);

            if (!File::isDirectory($directory)) {
                File::makeDirectory($directory, 0755, true);
            }

            File::put($filePath, $content);
        }

        $this->info('Theme created successfully.');
    }

    protected function getTemplate()
    {
        $template = $this->option('template', null);

        if (is_null($template)) {
            return fusion_path('stubs/theme');
        }

        return base_path("templates/{$template}");
    }

    /**
     * @return array
     */
    protected function getManifest()
    {
        $name = Str::snake($this->argument('namespace'));
        $name = Str::title($name);

        return [
            'name'        => $name,
            'namespace'   => $this->argument('namespace'),
            'description' => 'This is a fresh start. Now go and build something amazing.',
            'author'      => 'Unknown',
            'version'     => '1.0.0',
        ];
    }

    /**
     * Replace placeholders with actual content.
     *
     * @param string $content
     *
     * @return mixed
     */
    protected function replacePlaceholders($content, $manifest)
    {
        $find = [
            '{{name}}',
            '{{namespace}}',
            '{{description}}',
            '{{author}}',
            '{{version}}',
        ];

        $replace = [
            $manifest['name'],
            $manifest['namespace'],
            $manifest['description'],
            $manifest['author'],
            $manifest['version'],
        ];

        return str_replace($find, $replace, $content);
    }
}
