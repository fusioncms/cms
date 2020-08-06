<?php

use Fusion\Facades\Theme;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

if (!function_exists('javascript')) {
    /**
     * Transform PHP variables to JavaScript.
     *
     * @param array $data
     *
     * @return string
     */
    function javascript($data)
    {
        return Javascript::put($data);
    }
}

if (!function_exists('theme_preview')) {
    /**
     * Determines if the current request has the theme customizer
     * header present or not.
     *
     * @return bool
     */
    function theme_preview()
    {
        return request()->session()->has('customizing');
    }
}

if (!function_exists('theme')) {
    /**
     * Fetches the theme property from the manifest file.
     *
     * @param string $key
     * @param mixed  $default
     *
     * @return mixed
     */
    function theme($key, $default = '')
    {
        $theme = Theme::active();

        $dotNotation = $theme->mapWithKeys(function ($value, $handle) {
            return Arr::dot([$handle => $value]);
        });

        $theme = $theme->merge($dotNotation);

        return $theme->get($key, $default);
    }
}

if (!function_exists('theme_option')) {
    /**
     * Fetches the theme's option value.
     *
     * @param string $key
     * @param mixed  $default
     *
     * @return mixed
     */
    function theme_option($key, $default = '')
    {
        $theme  = Theme::active();
        $values = collect();

        if (theme_preview()) {
            $values = collect(request()->attributes->get('customize'));
        } else {
            $optionsFilePath = storage_path('app/themes/'.$theme->get('namespace').'.json');

            $options = collect(json_decode(File::get($optionsFilePath), true));
            $values  = $values->merge($options);
        }

        $dotNotation = $values->mapWithKeys(function ($value, $handle) {
            return Arr::dot([$handle => $value]);
        });

        $values = $values->merge($dotNotation);

        return $values->get($key, $default);
    }
}

if (!function_exists('theme_mix')) {
    /**
     * Laravel Mix helper for themes.
     *
     * @param string $path
     * @param string $manifest
     *
     * @return string
     */
    function theme_mix($path)
    {
        $theme        = Theme::active();
        $namespace    = $theme->get('namespace');
        $manifestPath = public_path('theme/mix-manifest.json');

        if (!File::exists($manifestPath)) {
            throw new Exception(
                'The Laravel Mix manifest file does not exist within your theme. '.
                'Please run "npm run watch" and try again.'
            );
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);

        if (!Str::startsWith($path, '/')) {
            $path = "/$path";
        }

        if (!array_key_exists($path, $manifest)) {
            throw new Exception(
                "Unknown Laravel Mix file path: $path. Please check your requested ".
                'theme webpack.mix.js output path, and try again.'
            );
        }

        $assetPath = $manifest[$path];

        if (Str::startsWith($assetPath, '/')) {
            $assetPath = ltrim($assetPath, '/');
        }

        return "/theme/$assetPath";
    }
}
