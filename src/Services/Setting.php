<?php

namespace Fusion\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;
use Fusion\Models\Setting as SettingGroup;

class Setting
{
	/**
	 * @var array
	 */
	protected $items;

	/**
	 * Constructor.
	 * 
	 * @param array $items
	 */
	public function __construct(array $items = [])
	{
		$this->items = $items;
	}

	/**
	 * Get settings repository.
	 * 
	 * @return Collection
	 */
	public function all()
	{
		return $this->items;
	}

	/**
     * Determine if the given setting value exists.
     *
     * @param  string  $key
     * @return bool
     */
    public function has($key)
    {
        return Arr::has($this->items, $key);
    }

	/**
     * Get the specified setting value.
     *
     * @param  array|string  $key
     * @param  mixed  $default
     * @return mixed
     */
	public function get($key, $default = null)
    {
        if (is_array($key)) {
            return $this->getMany($key);
        }

        return Arr::get($this->items, $key, $default);
    }

    /**
     * Get many setting values.
     *
     * @param  array  $keys
     * @return array
     */
    public function getMany($keys)
    {
        $config = [];

        foreach ($keys as $key => $default) {
            if (is_numeric($key)) {
                [$key, $default] = [$default, null];
            }

            $config[$key] = Arr::get($this->items, $key, $default);
        }

        return $config;
    }

	/**
	 * Set a given FusionCMS setting value.
	 *
	 * @param  array|string  $key
     * @param  mixed         $value
     * @return void
	 */
	public function set($key, $value = null)
	{
		$keys = is_array($key) ? $key : [$key => $value];

		foreach ($keys as $key => $value) {
			if ($this->has($key)) {
				list($handle, $column) = explode('.', $key);

				$group = SettingGroup::where('handle', $handle)->firstOrFail();
				
				// persist setting..
				$setting = $group->getBuilder()->firstOrFail();
				$setting->update([ $column => $value ]);

				// update runtime setting..
				$this->items[$key] = $value;

				// override config (if necessary)..
				$group->fieldset->fields->each(function($field) use ($group, $key) {
					if ($key == "{$group->handle}.{$field->handle}") {
						if ($field->settings['override'] !== false) {
							config([ $field->settings['override'] => setting($key)]);
						}
					}
				});
			}
		}
	}

	/**
     * Load system settings.
     * 
     * @return array
     */
	public static function loadSettings($refresh = false)
	{
		if (settings_available()) {
			if ($refresh) cache()->forget('settings');
			
            /**
             * Load settings from database
             */
            return cache()->rememberForever('settings', function () {
                return SettingGroup::all()->flatMap(function($group) {
                	return collect($group->fieldset->fields ?? [])
	                	->mapWithKeys(function($field) use ($group) {
	                        return [ "{$group->handle}.{$field->handle}" =>
	                            $group->settings->{$field->handle} ?? $field->settings['default'] ?? null ];
	                    });
                })->all();
            });
        } else {
            /**
             * Load settings from flat files
             */
            $files   = glob(fusion_path('settings') . '/*.php');
            $results = [];

            foreach ($files as $file) {
                $group    = basename($file, '.php');
                $contents = require $file;

                foreach ($contents['settings'] as $settings) {
                    foreach ($settings as $setting) {
                        $results["{$group}.{$setting['handle']}"] = $setting['value'] ?? $setting['default'] ?? '';
                    }
                }
            }
            
            return $results;
        }
	}

	/**
	 * Convienence method to pull Setting Groups.
	 * 
	 * @return Collection
	 */
	public static function groups()
	{
		return self::raw()
			->map(function($group, $handle) {
				return [
					'name'        => $group['name'],
					'handle'      => $handle,
					'group'       => $group['group'] ?? 'General',
					'icon'        => $group['icon'],
					'description' => $group['description'],
				];
			});
	}

	/**
	 * Convienence method to pull Group Settings.
	 *
	 * @return Collection
	 */
	public static function fields($group = null)
	{
		$raw = self::raw();

		if (isset($group) && $raw->has($group)) {
			return collect($raw->get($group)['settings']);
		}

		return $raw->map(function($group, $handle) {
			return $group['settings'];
		});
	}

	/**
	 * Pull all settings from filesystem.
	 * 
	 * @return Collection
	 */
	private static function raw()
	{
		$path  = fusion_path('settings');
        $files = Finder::create()->files()->name('*.php')->in($path);

        return collect($files)->mapWithKeys(function($file) {
        	$path = $file->getRealPath();
            $name = basename($path, '.php');

            return [ $name => require $path ];
        })->sortKeys();
	}
}