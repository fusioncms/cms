<?php

namespace Fusion\Services;

use Illuminate\Support\Str;
use Fusion\Models\Settings\Field;
use Fusion\Models\Settings\Section;
use Symfony\Component\Finder\Finder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class Setting
{
	/**
	 * Get settings reference.
	 * 
	 * @return Collection
	 */
	public function all()
	{
		return Field::all()->mapWithKeys(function($setting) {
			return [ $setting->handle => $setting->value ];
		});
	}

	/**
	 * Get FusionCMS setting value(s).
	 *
	 * @param  string     $key
	 * @param  mixed|null $default
	 * @return mixed
	 */
	public function get($key, $default = null)
	{
		$filtered = $this->all()->filter(function($value, $name) use ($key) {
			return Str::startsWith($name, $key ?? '');
		});

		if ($filtered->count() == 1) {
			return $filtered->first() ?? $default;
		}

		return $filtered;
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
	
		foreach ($keys as $handle => $value) {
			$setting = Field::where('handle', $handle)->first();
			$setting->value = $value;
		}

//         if (! Schema::hasColumn('setting', $handle)) {
//             $fieldtype = fieldtypes()->get($this->type);
//             $dataType  = $fieldtype->getColumn('type');
// dd($fieldtype, $dataType);
//             Schema::table($this->table, function(Blueprint $table) use ($columnName) {
//                 call_user_func_array([$table, $dataType], $columnName)->nullable();
//             });
//         }

		// 	try {
		// 		$setting = Setting::whereHas('section', function($query) use ($section) {
		// 			$query->where('handle', $section);
		// 		})
		// 		->where('handle', $handle)
		// 		->firstOrFail()
		// 		->update(['value' => $value]);
		// 	} catch (Exception $exception) {
		// 		throw new Exception($exception->getMessage());
		// 	}
		// }

		// // rewrite any updated overrides..
		// $this->registerOverrides();

		// // bust cache..
		// Cache::forget('settings');
	}

	/**
	 * Cached array of setting sections.
	 * 
	 * @return array
	 */
	public function sections()
	{
		return Cache::rememberForever('setting_sections', function() {
			return $this->raw()->map(function($section, $handle) {
				return [
					'name'        => $section['name'],
					'handle'      => $handle,
					'group'       => $section['group'],
					'description' => $section['description'],
					'icon'        => $section['icon'],
				];
			});
		});
	}

	/**
	 * Cached array of settings
	 * 
	 * @return Collection
	 */
	public function settings()
	{
		return Cache::rememberForever('settings', function() {
			$output   = collect([]);
			$sections = $this->raw()->all();

			foreach ($sections as $handle => $section) {
				foreach ($section['settings'] as $group => $settings) {
					$order = 0;

					foreach ($settings as $setting) {
						$output->push([
							'section_id'  => $handle,
							'name'        => $setting['name'],
							'handle'      => "{$handle}.{$setting['handle']}",
							'description' => $setting['description'] ?? '',
							'override'    => $setting['override']    ?? '',
							'component'   => $setting['component']   ?? '',
							'type'        => $setting['type']        ?? 'input',
							'options'     => collect($setting['options'] ?? []),
							'default'     => $setting['default']     ?? '',
							'value'       => $setting['value'] ?? $setting['default'] ?? '',
							'required'    => (bool) ($setting['required'] ?? true),
							'gui'         => (bool) ($setting['gui']      ?? true),
							'order'       => (int)  ($setting['order']    ??  ++$order),
						]);
					}
				}
			}

			return $output;
		});
	}

	/**
	 * 
	 * @return Collection
	 */
	private function raw()
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