<?php

namespace Fusion\Observers;

use Fusion\Models\Field;
use Illuminate\Support\Facades\Schema;

class FieldObserver
{
    /**
     * Handle the field "created" event.
     *
     * @param \Fusion\Models\Field $field
     *
     * @return void
     */
    public function created(Field $field)
    {
        $fieldtype = fieldtypes()->get($field->type);
        $fieldtype->onSaved($field);

        $tablename = $field->fieldable->getBuilderTable();
        $column    = $fieldtype->getColumn('type');
        $settings  = $fieldtype->getColumn('settings') ?? [];

        array_unshift($settings, $field->handle);

        if (!is_null($column)) {
            Schema::table($tablename, function ($table) use ($field, $column, $settings) {
                if (!Schema::hasColumn($table->getTable(), $field->handle)) {
                    call_user_func_array([$table, $column], $settings)->nullable();
                }
            });
        }
    }

    /**
     * Handle the field "updated" event.
     *
     * @param \Fusion\Models\Field $field
     *
     * @return void
     */
    public function updated(Field $field)
    {
        $fieldtype = fieldtypes()->get($field->type);
        $fieldtype->onSaved($field);

        $old = [
            'handle' => $field->getOriginal('handle'),
            'column' => fieldtypes()->get($field->getOriginal('type'))->getColumn('type'),
            'type'   => $field->getOriginal('type'),
        ];

        $new = [
            'handle' => $field->handle,
            'column' => $fieldtype->getColumn('type'),
            'type'   => $field->type,
        ];

        /**
         * Rename column..
         */
        if ($old['handle'] !== $new['handle']) {
            if (!is_null($new['column'])) {
                Schema::table(
                    $field->fieldable->getBuilderTable(),
                    function ($table) use ($old, $new) {
                        $table->renameColumn($old['handle'], $new['handle']);
                    }
                );
            }
        }

        /**
         * Change datatype..
         */
        if ($old['type'] !== $new['type']) {
            if (!is_null($new['column'])) {
                Schema::table(
                    $field->fieldable->getBuilderTable(),
                    function ($table) use ($new) {
                        call_user_func_array([$table, $new['column']], [$new['handle']])->change();
                    }
                );
            }
        }
    }

    /**
     * Handle the field "deleting" event.
     *
     * @param \Fusion\Models\Field $field
     *
     * @return void
     */
    public function deleting(Field $field)
    {
        fieldtypes()->get($field->type)->onBeforeDelete($field);
    }

    /**
     * Handle the field "deleted" event.
     *
     * @param \Fusion\Models\Field $field
     *
     * @return void
     */
    public function deleted(Field $field)
    {
        $fieldtype = fieldtypes()->get($field->type);
        $column    = $fieldtype->getColumn('type');

        $tablename = $field->fieldable->getBuilderTable();

        if (!is_null($column)) {
            if (Schema::hasColumn($tablename, $field->handle)) {
                Schema::table($tablename, function ($table) use ($field) {
                    $table->dropColumn($field->handle);
                });
            }
        }
    }
}
