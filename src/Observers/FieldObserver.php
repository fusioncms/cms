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

        $blueprint     = $field->section->blueprint;
        $blueprintable = $blueprint->blueprintable;
        $column        = $fieldtype->getColumn('type');
        $settings      = $fieldtype->getColumn('settings') ?? [];

        array_unshift($settings, $field->handle);

        if (!is_null($column)) {
            Schema::table($blueprintable->table, function ($table) use ($field, $column, $settings) {
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

        $blueprint     = $field->section->blueprint;
        $blueprintable = $blueprint->blueprintable;

        $old = [
            'handle' => $field->getOriginal('handle'),
            'column' => fieldtypes()->get($field->getOriginal('type'))->getColumn(),
            'type'   => $field->getOriginal('type'),
        ];

        $new = [
            'handle' => $field->handle,
            'column' => fieldtypes()->get($field->type)->getColumn(),
            'type'   => $field->type,
        ];

        $table = $blueprintable->table;

        if ($old['handle'] !== $new['handle']) {
            $fieldtype = fieldtypes()->get($new['type']);
            $column    = $fieldtype->getColumn('type');

            if (!is_null($column)) {
                Schema::table($table, function ($table) use ($old, $new) {
                    $table->renameColumn("`{$old['handle']}`", "`{$new['handle']}`");
                });
            }
        }

        if ($old['type'] !== $new['type']) {
            $fieldtype = fieldtypes()->get($new['type']);
            $column    = $fieldtype->getColumn('type');
            $settings  = $fieldtype->getColumn('settings') ?? [];

            array_unshift($settings, $new['handle']);

            if (!is_null($column)) {
                Schema::table($table, function ($table) use ($column, $settings) {
                    call_user_func_array([$table, $column], $settings)->change();
                });
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
        $blueprint     = $field->section->blueprint;
        $blueprintable = $blueprint->blueprintable;

        $fieldtype = fieldtypes()->get($field->type);
        $column    = $fieldtype->getColumn('type');
        $settings  = $fieldtype->getColumn('settings') ?? [];

        array_unshift($settings, $field->handle);

        if (!is_null($column)) {
            $table = $blueprintable->table;

            if (Schema::hasColumn($table, $field->handle)) {
                Schema::table($table, function ($table) use ($field) {
                    $table->dropColumn($field->handle);
                });
            }
        }
    }
}
