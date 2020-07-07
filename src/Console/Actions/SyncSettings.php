<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Field;
use Fusion\Models\Fieldset;
use Fusion\Models\Setting as SettingGroup;
use Symfony\Component\Finder\Finder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Contracts\Cache\Factory as CacheFactory;

class SyncSettings
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // $this->syncSettingGroups();
        // $this->syncSettingFields();
        SettingGroup::all()->each(function($group) {
            $group->fieldset->fields
                ->reject(function($field) {
                    return is_null(fieldtypes()->get($field->type)->column);
                })
                ->each(function($field) use ($setting, $tableName) {
                    
                });
        });


        // $model     = (new \Fusion\Services\Builders\Setting)->make();
        // $tableName = $model->getTable();
        // $setting   = $model->firstOrCreate(['id' => 1]);
        
        // $setting->fields
        //     ->reject(function($field) {
        //         return is_null(fieldtypes()->get($field->type)->column);
        //     })
        //     ->each(function($field) use ($setting, $tableName) {
        //         if (! Schema::hasColumn($tableName, $field->handle)) {
        //             Schema::table($tableName, function(Blueprint $table) use ($field) {
        //                 $dataType = fieldtypes()->get($field->type)->getColumn('type');

        //                 $table->{$dataType}($field->handle)->nullable();
        //             });

        //             // Set initial value..
        //             $setting->{$field->handle} = $field->settings['default'] ?? null; 
        //         }
        //     });

        // $setting->save();
    }

    /**
     * Sync Setting Groups.
     * 
     * @return void
     */
    private function syncSettingGroups()
    {
        // Pull existing elements..
        $existing = SettingGroup::all()->pluck('id', 'id');

        // Add/update existing elements..
        \Fusion\Services\Setting::groups()
            ->each(function($group) use ($existing) {

                // create update group..
                $group = SettingGroup::updateOrCreate([
                    'handle' => $group['handle'],
                ],[
                    'name'        => $group['name'],
                    'group'       => $group['group'] ?? 'General',
                    'icon'        => $group['icon'],
                    'description' => $group['description'],
                ]);

                // create/update fieldset..
                $fieldset = Fieldset::updateOrCreate([
                    'handle' => $group['handle'],
                ],[
                    'name'   => $group['name'],
                    'hidden' => true
                ]);

                // assign fieldset
                $group->fieldsets()->sync($fieldset->id);

                $existing->forget($group->id);
            });

        // Clean up removed elements..
        $existing->each(function($id) {
            //TODO: unassign fieldset?
            
            SettingGroup::findOrFail($id)->delete();
        });
    }

    private function syncSettingFields()
    {
        SettingGroup::all()->each(function($setting) {
            $order = 0;

            \Fusion\Services\Setting::fields($setting->handle)
                ->each(function($settings, $section) use ($setting, &$order) {
                    $section = $setting->fieldset->sections()
                        ->updateOrCreate([
                            'handle' => str_handle($section)
                        ],  [
                            'name'        => $section,
                            'description' => "Settings for {$setting->name} > {$section}",
                            'order'       => ++$order
                        ]);

                    $fieldOrder = 0;
                    collect($settings)
                        ->each(function($field) use ($section, &$fieldOrder) {
                            $section->fields()->updateOrCreate([
                                'handle' => $field['handle'],
                            ],[
                                'name'       => $field['name'],
                                'type'       => $field['type'] ?? 'input',
                                'help'       => $field['description'] ?? '',
                                'order'      => ++$fieldOrder,
                                'validation' => isset($field['required']) ? 'required' : '',
                                'settings'   => [
                                    'default'   => $field['default']           ?? '',
                                    'options'   => collect($field['options']   ?? []),
                                    'gui'       => (bool) ($field['gui']       ?? true),
                                    'component' => (bool) ($field['component'] ?? false),
                                ],
                            ]);
                        });
                });
        });
    }
}
