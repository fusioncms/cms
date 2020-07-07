<?php

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