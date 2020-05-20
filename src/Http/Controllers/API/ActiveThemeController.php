<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Facades\Theme;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ActiveThemeController extends Controller
{
    public function show()
    {
        $theme = Theme::active();

        return new ThemeResource($theme);
    }
}
