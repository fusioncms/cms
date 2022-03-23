<?php

namespace Fusion\Console\Actions;

class SyncModels
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $modelTypes = [
            \Fusion\Models\Matrix::class,
            \Fusion\Models\Taxonomy::class,
            \Fusion\Models\Form::class,
            \Fusion\Models\Setting::class,
        ];

        foreach ($modelTypes as $modelType) {
            // $this->line($modelType);
            $matrices = $modelType::get();
            foreach ($matrices as $matrix) {
                try {
                    $matrix->getBuilder();
                } catch (\Illuminate\Contracts\Container\BindingResolutionException $ex) {
                    // Need to catch class not found exception to run this command successfully
                }
            }
        }
    }
}
