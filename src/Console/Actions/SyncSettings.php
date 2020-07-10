<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Setting as SettingGroup;
use Fusion\Services\Setting as SettingService;

class SyncSettings
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // Create setting tables..
        $this->syncSettingGroups();
        $this->syncSettingSections();

        // Set initial values..
        SettingGroup::all()->each(function($group) {
            $group->getBuilder()->firstOr(function() use ($group) {
                $setting = $group->getBuilder()->firstOrCreate([ 'id' => 1, 'setting_id' => $group->id ]);
                $fields  = $group->fieldset->fields;

                $fields->reject(function($field) {
                    return is_null(fieldtypes()->get($field->type)->column);
                })
                ->each(function($field) use ($setting) {
                    $setting->{$field->handle} = $field->settings['default'] ?? null;
                });

                $setting->save();
            });
        });

        cache()->forget('settings');
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
        SettingService::groups()
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
            SettingGroup::findOrFail($id)->delete();
        });
    }

    /**
     * Sync Fieldset Sections.
     * 
     * @return void
     */
    private function syncSettingSections()
    {
        SettingGroup::all()->each(function($setting) {
            $existing = $setting->fieldset->sections->pluck('id', 'id');
            $order    = 0;

            SettingService::fields($setting->handle)
                ->each(function($settings, $section) use ($setting, $existing, &$order) {
                    $section = $setting->fieldset->sections()
                        ->updateOrCreate([
                            'handle' => str_handle($section)
                        ],  [
                            'name'        => $section,
                            'description' => "Settings for {$setting->name} > {$section}",
                            'order'       => ++$order
                        ]);

                    $existing->forget($section->id);

                    // Now sync field settings...
                    $this->syncSettingFields($section, $settings);
                });

            // Clean up removed elements..
            $existing->each(function($id) {
                Section::findOrFail($id)->delete();
            });
        });
    }

    /**
     * Sync Setting Fields.
     * 
     * @param  Section  $section
     * @param  array    $settings
     * @return void
     */
    private function syncSettingFields(Section $section, $settings)
    {
        $existing = $section->fields;
        $order    = 0;

        collect($settings)
            ->each(function($setting) use ($section, $existing, &$order) {
                $field = $section->fields()->updateOrCreate([
                    'handle' => $setting['handle'],
                ],[
                    'name'       => $setting['name'],
                    'type'       => $setting['type'] ?? 'input',
                    'help'       => $setting['description'] ?? '',
                    'order'      => ++$order,
                    'validation' => ($setting['required'] ?? true) ? 'required' : '',
                    'settings'   => [
                        'default'   => $setting['default']           ?? '',
                        'override'  => $setting['override']          ?? false,
                        'options'   => $this->formatSettingOptions($setting['options'] ?? []),
                        'gui'       => (bool) ($setting['gui']       ?? true),
                        'component' => (bool) ($setting['component'] ?? false),
                    ],
                ]);

                $existing->forget($field->id);
            });

        // Clean up removed elements..
        $existing->each(function($id) {
            Field::findOrFail($id)->delete();
        });
    }

    /**
     * Properly format setting options
     * [helper]
     * 
     * @param  array  $options
     * @return array
     */
    private function formatSettingOptions($options = [])
    {
        return collect($options)->map(function($label, $value) {
            return [
                'checked' => false,
                'label'   => $label,
                'value'   => $value
            ];
        })->values()->all();
    }
}
