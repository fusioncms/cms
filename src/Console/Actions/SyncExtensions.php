<?php

namespace Fusion\Console\Actions;

use Fusion\Facades\Addon;
use Illuminate\Support\Str;
use Fusion\Models\Extension;
use Fusion\Concerns\HasExtension;
use Symfony\Component\Finder\Finder;
use Illuminate\Database\Eloquent\Model;

class SyncExtensions
{
    /**
     * Existing extension records.
     *
     * @var array
     */
    public $extensions = [];

    /**
     * Constructor.
     *
     */
    public function __construct()
    {
        $this->extensions = Extension::all()->pluck('id', 'handle');
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Addon::enabled()->each(function($addon) {
            $files = Finder::create()
                ->files()
                ->in(addon_path("{$addon['namespace']}/src/Models"))
                ->name('*.php');

            foreach ($files as $file) {
                $name  = Str::studly($file->getFilenameWithoutExtension());
                $model = resolve("Addons\\{$addon['namespace']}\\Models\\{$name}");

                if (in_array(HasExtension::class, class_uses($model))) {
                    $this->syncExtension($model);
                }
            }
        });

        $this->cleanUp();
    }

    /**
     * Generate Extension for Model using `HasExtension`.
     *
     * @param  \Illuminate\Database\Eloquent\Model $model
     * @return void
     */
    protected function syncExtension(Model $model)
    {
        $handle = $model->getTable();

        if (! isset($this->extensions[$handle])) {
            Extension::firstOrCreate([
                'name'   => Str::studly($handle),
                'handle' => $handle,
            ]);
        }

        // sync'd
        unset($this->extensions[$handle]);
    }

    /**
     * Clean up existing, unused extension records.
     *
     * @return void
     */
    protected function cleanUp()
    {
        foreach ($this->extensions as $handle => $id) {
            Extension::destroy($id);
        }
    }
}
