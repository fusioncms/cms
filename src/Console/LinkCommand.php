<?php

namespace Fusion\Console;

use Exception;
use Illuminate\Console\Command;
use Symfony\Component\Filesystem\Filesystem as SymfonyFilesystem;

class LinkCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:link {--relative}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create the symbolic links for local development';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach ($this->links() as $link => $target) {
            if (file_exists($link)) {
                $this->error("The [$link] link already exists.");
            } else {
                if ($this->option('relative')) {
                    $target = $this->getRelativeTarget($link, $target);
                }

                $this->laravel->make('files')->link($target, $link);

                $this->info("The [$link] link has been connected to [$target].");
            }
        }

        $this->info('The links have been created.');
    }

    /**
     * Get the symbolic links that are configured for the application.
     *
     * @return array
     */
    protected function links()
    {
        return [
            public_path('vendor/fusion') => fusion_path('public'),
        ];
    }

    /**
     * Get the relative path to the target.
     *
     * @param  string  $link
     * @param  string  $target
     * @return string
     */
    protected function getRelativeTarget($link, $target)
    {
        if (! class_exists(SymfonyFilesystem::class)) {
            throw new Exception('Please install the symfony/filesystem Composer package to create relative links.');
        }

        return (new SymfonyFilesystem)->makePathRelative($target, dirname($link));
    }
}