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
			list($handle, $column) = explode('.', $key);

			SettingGroup::where('handle', $handle)
				->firstOrFail()
				->getBuilder()
				->firstOrFail()
				->update([ $column => $value ]);
		}

		cache()->forget('settings');
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