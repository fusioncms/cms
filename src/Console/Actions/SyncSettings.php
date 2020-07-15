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

        SettingGroup::all()->each(function($group) {
            $this->syncSettingSection($group);

            // Create first and only record..
            $group->settings()
                ->firstOrCreate([
                    'id'         => 1,
                    'setting_id' => $group->id
                ]);
        });

        /**
         * Clears cache set in:
         *  Fusion\Services\Settings::loadSettings()
         */
        SettingService::loadSettings(true);
    }

    /**
     * Sync Setting Groups.
     *
     * @return void
     */
    public function syncSettingGroups($groups = null)
    {
        $groups = $groups ?? SettingService::groups();

        // Pull existing elements..
        $existing = SettingGroup::all()->pluck('id', 'id');

        // Add/update existing elements..
        collect($groups)
            ->each(function($group) use ($existing) {

                // create/update group..
                $group = SettingGroup::updateOrCreate([
                    'handle' => $group['handle'],
                ],[
                    'name'        => $group['name'],
                    'group'       => $group['group'] ?? 'General',
                    'icon'        => $group['icon'] ?? 'cog',
                    'description' => $group['description'] ?? '',
                ]);

                // create/update fieldset..
                $fieldset = Fieldset::updateOrCreate([
                    'handle' => 'setting_' . $group['handle'],
                ],[
                    'name'   => 'Setting: ' . $group['name'],
                    'hidden' => true
                ]);

                // assign fieldset..
                $group->fieldsets()->sync($fieldset->id);

                // mark for non-removal..
                $existing->forget($group->id);
            });

        // Clean up removed elements..
        $existing->each(function($id) {
            SettingGroup::findOrFail($id)->delete();
        });
    }

    /**
     * Sync Fieldset Section for SettingGroup.
     *
     * @param  SettingGroup $group
     * @return void
     */
    public function syncSettingSection(SettingGroup $group, $fields = null)
    {
        $fields   = $fields ?? SettingService::fields($group->handle);
        $existing = $group->fieldset->sections->pluck('id', 'id');
        $order    = 0;

        collect($fields)
            ->each(function($fields, $name) use ($group, $existing, &$order) {
                $section = $group->fieldset->sections()
                    ->updateOrCreate([
                        'handle' => str_handle($name)
                    ],  [
                        'name'        => $name,
                        'description' => "Settings for {$group->name} > {$name}",
                        'order'       => ++$order
                    ]);

                // mark for non-removal..
                $existing->forget($section->id);

                // Now sync field settings...
                $this->syncSettingFields($section, $fields);
            });

        // Clean up removed elements..
        $existing->each(function($id) {
            Section::findOrFail($id)->delete();
        });
    }

    /**
     * Sync Setting Fields for Section.
     *
     * @param  Section  $section
     * @param  array    $fields
     * @return void
     */
    public function syncSettingFields(Section $section, $fields = [])
    {
        $existing = $section->fields->pluck('id', 'id');
        $order    = 0;

        collect($fields)
            ->each(function($item) use ($section, $existing, &$order) {
                $field = $section->fields()->updateOrCreate([
                    'handle' => $item['handle'],
                ],[
                    'name'       => $item['name'],
                    'type'       => $item['type'] ?? 'input',
                    'help'       => $item['description'] ?? '',
                    'order'      => ++$order,
                    'validation' => $this->determineValidation($item),
                    'settings'   => [
                        'default'   => $item['default'] ?? '',
                        'override'  => $item['override'] ?? false,
                        'options'   => $this->formatSettingOptions($item['options'] ?? []),
                        'hidden'    => $this->determineHidden($item),
                        'component' => $item['component'] ?? false,
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

    /**
     * Determine the validation attribute for the given setting.
     *
     * @param  array  $setting
     * @return string
     */
    private function determineValidation($setting): string
    {
        if (!isset($setting['required'])) {
            return '';
        }

        return $setting['required'] === true ? 'required' : '';
    }

    /**
     * Determine the hidden attribute for the given setting.
     *
     * @param  array  $setting
     * @return bool
     */
    private function determineHidden($setting): bool
    {
        if (!isset($setting['hidden'])) {
            return false;
        }

        return (bool) $setting['hidden'] === true;
    }
}
