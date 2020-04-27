<?php

namespace Fusion\Console\Actions;

use Illuminate\Support\Str;
use Fusion\Models\Extension;
use Fusion\Concerns\HasExtension;
use Symfony\Component\Finder\Finder;
use Caffeinated\Modules\Facades\Module;
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
        Module::all()->each(function($module) {
            if ($module['registered'] && $module['installed']) {
                $files = Finder::create()
                    ->files()
                    ->in(base_path("modules/{$module['basename']}/src/Models"))
                    ->name('*.php');

                foreach ($files as $file) {
                    $name  = Str::studly($file->getFilenameWithoutExtension());
                    $model = resolve("Modules\\{$module['basename']}\\Models\\{$name}");

                    if (in_array(HasExtension::class, class_uses($model))) {
                        $this->syncExtension($model);
                    }
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
