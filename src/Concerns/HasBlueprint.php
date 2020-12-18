<?php

namespace Fusion\Concerns;

use Fusion\Models\Blueprint;

trait HasBlueprint
{
    /**
     * Boot the trait with the model.
     */
    public static function bootHasBlueprint()
    {
        static::created(function ($model) {
            $model->createBlueprint();
        });

        static::updated(function ($model) {
            $model->updateBlueprint();
        });

        static::deleting(function ($model) {
            $model->deleteBlueprint();
        });
    }

    /**
     * What the generated blueprint should be grouped by.
     *
     * @return string
     */
    public function getStructure(): string
    {
        if (!property_exists(static::class, 'structure')) {
            throw new \LogicException(static::class.' must have a "$structure" property defined.');
        }

        return $this->structure;
    }

    /**
     * Should the blueprint be hidden from the interface?
     *
     * @return bool
     */
    public function getBlueprintHidden(): bool
    {
        return $this->blueprintHidden ?? false;
    }

    /**
     * A model has one blueprint.
     */
    public function blueprint()
    {
        return $this->morphOne(Blueprint::class, 'blueprintable');
    }

    /**
     * Get all fields for blueprint.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function fields()
    {
        return $this->blueprint->fields();
    }

    /**
     * Handles creating a blueprint for the given model.
     */
    public function createBlueprint()
    {
        return $this->withoutEvents(function () {
            return $this->blueprint()->create([
                'name'      => $this->name,
                'structure' => $this->getStructure(),
                'hidden'    => $this->getBlueprintHidden(),
            ]);
        });
    }

    /**
     * Handles updating the blueprint for the given model.
     */
    public function updateBlueprint()
    {
        return $this->withoutEvents(function () {
            return $this->blueprint()->update([
                'name'      => $this->name,
                'structure' => $this->getStructure(),
                'hidden'    => $this->getBlueprintHidden(),
            ]);
        });
    }

    /**
     * Handles deleting the blueprint for the given model.
     */
    public function deleteBlueprint()
    {
        return $this->withoutEvents(function () {
            return $this->blueprint()->delete();
        });
    }
}
