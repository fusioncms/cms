<?php

namespace Fusion\Concerns;

use Fusion\Database\Eloquent\Relations\HasOneExtension;
use Fusion\Models\Extension;

trait HasExtension
{
    public static function bootHasExtension()
    {
        static::saved(function ($model) {
            /**
             * Pull new instance w/ relations.
             */
            $model = static::find($model->id);

            /**
             * Persist extending field data..
             *
             * Note:
             * ----
             * - Relationships are persisted separately.
             * - Everything else is grouped and updated in mass.
             */
            if ($model->extension) {
                $attributes = $model->fields->mapWithKeys(function ($field) use ($model) {
                    $fieldtype = fieldtypes()->get($field->type);

                    if ($fieldtype->hasRelationship()) {
                        $fieldtype->persistRelationship($model->extension, $field);

                        return [];
                    }

                    return [$field->handle => request()->input($field->handle)];
                })->toArray();

                $model->extension->update($attributes);
            }
        });
    }

    /**
     * Get an attribute from the model.
     * [override].
     *
     * @param string $key
     *
     * @return mixed
     */
    public function getAttribute($key)
    {
        $attribute = parent::getAttribute($key);

        if (is_null($attribute) && @$this->extension) {
            $attribute = $this->extension->{$key};
        }

        return $attribute;
    }

    /**
     * Get extending relationship.
     *
     * @return \Fusion\Database\Eloquent\Relations\HasOneExtension
     */
    public function extension()
    {
        return new HasOneExtension($this);
    }

    /**
     * Get extending fields.
     *
     * @return Collection
     */
    public function getFieldsAttribute()
    {
        return $this->extension->fields ?? collect();
    }

    /**
     * Get extending fieldset.
     *
     * @return \Fusion\Models\Fieldset
     */
    public function getFieldsetAttribute()
    {
        return $this->extension->fieldset;
    }
}
