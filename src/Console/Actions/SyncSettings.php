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
        /**
         * The following method calls will persist settings
         *  to the database.
         *  
         * Any changes you make to the setting files will
         *  reflect in the database with subsequent calls
         *  to this action.
         *
         * Groups    - Main `settings` table (1x per setting file).
         *             `setting_{filename}` table will be created per file.
         * Fieldsets - Each Group has a corresponding `fieldsets` record.
         * Sections  - Each Fieldset can have one or more `sections` records.
         * Fields    - Each Section can have one or more `fields` records.
         *
         */
        $this->syncSettingGroups();
        $this->syncSettingSections();

        /**
         * Clears cache set in:
         *  Fusion\Services\Settings::loadSettings()
         */
        SettingService::loadSettings(true);
        // cache()->forget('settings');
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

                // create/update group..
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
        $existing = $section->fields->pluck('id', 'id');
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
     * Properly format setting field options.
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
