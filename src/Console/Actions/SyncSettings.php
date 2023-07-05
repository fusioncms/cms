<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Blueprint;
use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Models\Setting;
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
         * Blueprint - Each Group has a corresponding `blueprint` record.
         * Sections  - Each Blueprint can have one or more `sections` records.
         * Fields    - Each Section can have one or more `fields` records.
         */
        $this->syncSettingGroups();

        Setting::all()->each(function ($setting) {
            $this->syncSettingSection($setting);

            $setting->getBuilder()
                ->firstOrCreate(['id' => 1, 'setting_id' => $setting->id]);
        });
    }

    /**
     * Sync Setting Groups.
     *
     * @return void
     */
    public function syncSettingGroups($settings = null)
    {
        $settings = $settings ?? SettingService::groups();

        // Pull existing elements..
        $existing = Setting::all()->pluck('id', 'id');

        // Add/update existing elements..
        foreach ($settings as $setting) {
            // create/update group..
            $setting = Setting::updateOrCreate([
                'handle' => $setting['handle'],
            ], [
                'name'        => $setting['name'],
                'group'       => $setting['group'] ?? 'General',
                'icon'        => $setting['icon'] ?? 'cog',
                'description' => $setting['description'] ?? '',
            ]);

            if (!$setting->blueprint) {
                dd('setting blueprint not created?', $setting);
            }

            // mark for non-removal..
            $existing->forget($setting->id);
        }

        // Clean up removed elements..
        $existing->each(function ($id) {
            Setting::findOrFail($id)->delete();
        });
    }

    /**
     * Sync blueprint sections for SettingGroup.
     *
     * @param Setting $setting
     *
     * @return void
     */
    public function syncSettingSection(Setting $setting, $fields = null)
    {
        $fields = $fields ?? SettingService::fields($setting->handle);

        if (isset($setting->blueprint) and count($setting->blueprint->sections)) {
            $existing = $setting->blueprint->sections->pluck('id', 'id');
        } else {
            $existing = collect([]);
        }

        $order    = 0;

        collect($fields)
            ->each(function ($fields, $name) use ($setting, $existing, &$order) {
                $section = $setting->blueprint->sections()
                    ->updateOrCreate([
                        'handle' => str_handle($name),
                    ], [
                        'name'        => $name,
                        'description' => "Settings for {$setting->name} > {$name}",
                        'order'       => ++$order,
                    ]);

                // mark for non-removal..
                $existing->forget($section->id);

                // Now sync field settings...
                $this->syncSettingFields($section, $fields);
            });

        // Clean up removed elements..
        $existing->each(function ($id) {
            Section::findOrFail($id)->delete();
        });
    }

    /**
     * Sync Setting Fields for Section.
     *
     * @param Section $section
     * @param array   $fields
     *
     * @return void
     */
    public function syncSettingFields(Section $section, $fields = [])
    {
        $existing = $section->fields->pluck('id', 'id');
        $order    = 0;

        collect($fields)
            ->each(function ($item) use ($section, $existing, &$order) {
                $fieldtype = fieldtypes()->get($item['type'] ?? 'input');

                $field = $section->fields()->updateOrCreate([
                    'handle' => $item['handle'],
                ], [
                    'name'       => $item['name'],
                    'type'       => $fieldtype->getHandle(),
                    'help'       => $item['description'] ?? '',
                    'order'      => ++$order,
                    'validation' => $this->determineValidation($item),
                    'settings'   => array_merge($fieldtype->getSettings(), [
                        'default'   => $item['default'] ?? '',
                        'override'  => $item['override'] ?? false,
                        'options'   => $this->formatSettingOptions($item['options'] ?? []),
                        'hidden'    => $this->determineHidden($item),
                        'component' => $item['component'] ?? false,
                    ]),
                ]);

                $existing->forget($field->id);
            });

        // Clean up removed elements..
        $existing->each(function ($id) {
            Field::findOrFail($id)->delete();
        });
    }

    /**
     * Properly format setting field options.
     * [helper].
     *
     * @param array $options
     *
     * @return array
     */
    private function formatSettingOptions($options = [])
    {
        return collect($options)->map(function ($label, $value) {
            return [
                'checked' => false,
                'label'   => $label,
                'value'   => $value,
            ];
        })->values()->all();
    }

    /**
     * Determine the validation attribute for the given setting.
     *
     * @param array $setting
     *
     * @return array
     */
    private function determineValidation($setting): array
    {
        if (!isset($setting['required'])) {
            return ['value' => null];
        }

        return $setting['required'] === true ? ['value' => 'required'] : [];
    }

    /**
     * Determine the hidden attribute for the given setting.
     *
     * @param array $setting
     *
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
