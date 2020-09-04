<?php

namespace Fusion\Concerns;

use Fusion\Models\Blueprint;
use Fusion\Database\Migration;

trait HasBlueprint
{
    public static function bootHasBlueprint()
    {
        static::created(function($model) {
            $model->createBlueprint();
        });
    }

    /**
     * What the generated blueprint should be grouped by.
     *
     * @return string
     */
    abstract public function getBlueprintGroup(): string;

    public function blueprint()
    {
        return $this->morphOne(Blueprint::class, 'blueprintable');
    }

    public function createBlueprint()
    {
        $this->unsetEventDispatcher();

        $blueprint = $this->blueprint()->create([
            'name'  => $this->name,
            'group' => $this->getBlueprintGroup(),
        ]);

        return $blueprint;
    }
}