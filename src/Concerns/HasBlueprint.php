<?php

namespace Fusion\Concerns;

use Fusion\Models\Blueprint;
use Fusion\Database\Migration;

trait HasBlueprint
{
    /**
     * Boot the trait with the model.
     */
    public static function bootHasBlueprint()
    {
        static::created(function($model) {
            $model->createBlueprint();
        });

        static::deleting(function($model) {
            $model->deleteBlueprint();
        });
    }

    /**
     * What the generated blueprint should be grouped by.
     *
     * @return string
     */
    abstract public function getBlueprintGroup(): string;

    /**
     * A model has one blueprint.
     */
    public function blueprint()
    {
        return $this->morphOne(Blueprint::class, 'blueprintable');
    }

    /**
     * Handles creating a blueprint for the given model.
     */
    public function createBlueprint()
    {
        return $this->withoutEvents(function() {
            return $this->blueprint()->create([
                'name'  => $this->name,
                'group' => $this->getBlueprintGroup(),
            ]);
        });
    }

    /**
     * Handles updating the blueprint for the given model.
     */
    public function updateBlueprint()
    {
        return $this->withoutEvents(function() {
            return $this->blueprint()->update([
                'name'  => $this->name,
                'group' => $this->getBlueprintGroup(),
            ]);
        });
    }

    /**
     * Handles deleting the blueprint for the given model.
     */
    public function deleteBlueprint()
    {
        return $this->withoutEvents(function() {
            return $this->blueprint()->delete();
        });
    }
}