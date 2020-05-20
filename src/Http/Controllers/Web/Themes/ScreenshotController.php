<?php

namespace Fusion\Http\Controllers\Web\Themes;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ScreenshotController extends Controller
{
    public function show($theme)
    {
        return \Image::make(theme_path("{$theme}/preview.png"))->response();
    }
}
