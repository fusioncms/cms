<?php

namespace Fusion\Console;

use Fusion\Facades\Addon;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeAddonCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:addon {namespace}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new FusionCMS addon';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $namespace = $this->argument('namespace');
        $manifest  = $this->getManifest();
        $template  = fusion_path('stubs/addon');

        if (File::isDirectory(addon_path($namespace))) {
            return $this->error('Addon already exists!');
        }

        File::makeDirectory(addon_path($namespace, 0755, true));

        foreach (File::allFiles($template, true) as $file) {
            $content      = $this->replacePlaceholders($file->getContents(), $manifest);
            $relativePath = $file->getRelativePathname();
            $filePath     = addon_path("{$namespace}/{$relativePath}");
            $directory    = dirname($filePath);

            if (! File::isDirectory($directory)) {
                File::makeDirectory($directory, 0755, true);
            }

            File::put($filePath, $content);
        }

        $this->callSilent('addon:discover');

        $this->info("Addon created successfully.");
    }

    /**
     * @return array
     */
    protected function getManifest()
    {
        return [
            'name'        => $this->generateName($this->argument('namespace')),
            'namespace'   => $this->argument('namespace'),
            'description' => 'This is a fresh start. Now go and build something amazing.',
            'author'      => 'Unknown',
            'version'     => '1.0.0',
        ];
    }

    /**
     * Replace placeholders with actual content.
     *
     * @param  string  $content
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

    protected function generateName($name)
    {
        $name = preg_replace('/(?<!\ )[A-Z]/', ' $0', $name);
        $name = trim($name);

        return $name;
    }
}