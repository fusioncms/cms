<?php

if (! function_exists('settings_available')) {
    /**
     * Determines if the settings have been loaded into
     * the database or not.
     *
     * @return bool
     */
	function settings_available()
	{
		try {
			return (DB::table('settings')->count() > 0);
		} catch (Exception $exception) { }

		return false;
	}
}

if (! function_exists('setting')) {
    /**
     * Get / set the specified setting value.
     *
     * If an array is passed as the key, we will assume you want to set an array of values.
     *
     * @param  array|string|null  $key
     * @param  mixed  $default
     * @return mixed|\Fusion\Services\Setting
     */
	function setting($key = null, $default = null)
	{
		if (is_null($key)) {
			return \Setting::all();
		} elseif (is_array($key)) {
			return \Setting::set($key);
		} else {
			return \Setting::get($key, $default);
		} 
	}
}