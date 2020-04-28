<?php

namespace Fusion\Http\Controllers\API\Themes;

use Storage;
use ZipArchive;
use Illuminate\Http\Request;
use Caffeinated\Themes\Facades\Theme;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\VerifyThemeRequest;

class VerifyController extends Controller
{
    /**
     * Return all available themes.
     *
     * @return Response
     */
    public function index(VerifyThemeRequest $request)
    {
        $this->authorize('themes.create');
    }
}