<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Structure;

class SyncStructures
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        structures()->all()->each(function($structure) {
            $model = Structure::firstOrCreate(
                [ 'handle'     => $structure->getHandle() ],
                [ 'fieldtypes' => [] ]
            );

            $existing = $model->fieldtypes->all();
            $default  = $this->defaultFieldtypes($structure);

            $merged = array_merge($default, $existing);
            $merged = array_unique($merged);

            $model->update([ 'fieldtypes' => $merged ]);
        });
    }

    /**
     * Returns all registered Structures.
     *
     * @param \Fusion\Structures\Structure $structure
     * 
     * @return array
     */
    private function defaultFieldtypes($stucture)
    {
        return fieldtypes()->all()
            ->reject(function($fieldtype) use ($stucture) {
                return in_array($fieldtype->getHandle(), $stucture->excluded);
            })
            ->map(function($fieldtype) {
                return $fieldtype->getHandle();
            })
            ->values()
            ->all();
    }
}
