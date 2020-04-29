<?php

namespace Fusion\Http\Controllers\API;

use Caffeinated\Themes\Facades\Theme;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ActiveThemeController extends Controller
{
    public function show()
    {
        $theme = Theme::where('slug', setting('system.theme'))->first();

        return new ThemeResource($theme);
    }
}
