<?php

namespace Fusion\Http\Controllers\API\Themes;

use Storage;
use Artisan;
use ZipArchive;
use Fusion\Facades\Theme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;
use Fusion\Http\Requests\StoreThemeRequest;

class BrowseController extends Controller
{
    /**
     * Return all available themes.
     *
     * @return \Fusion\Http\Resources\ThemeResource
     */
    public function index()
    {
        $this->authorize('themes.viewAny');

        $themes = collect(Theme::all());

        return ThemeResource::collection($themes);
    }

    /**
     * Store a new theme in storage.
     *
     * Note:
     *   Run the following command line to remove
     *   unwanted files (e.g. `__MACOSX`):
     *
     *   zip -d your-archive.zip "__MACOSX*"
     *
     * @param  Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $this->authorize('themes.create');

        $zipArchive = new ZipArchive;
        $themePath  = Storage::disk('themes')->path('');

        if ($zipArchive->open($request->file('file-upload')) === true) {
            $index      = $zipArchive->locateName('theme.json', ZipArchive::FL_NODIR);
            $filename   = $zipArchive->getNameIndex($index);
            $fileHandle = $zipArchive->getStream($filename);

            $manifest = stream_get_contents($fileHandle);
            $manifest = collect(json_decode($manifest));

            $originalName  = basename($request->file('file-upload')->getClientOriginalName(), '.zip');
            $themeName = $manifest->get('name');

            $files = [];
            for ($i = 0; $i < $zipArchive->numFiles; ++$i) {
                $zipArchive->renameIndex($i, str_replace($originalName, $themeName, $zipArchive->getNameIndex($i)));
                $files[] = $zipArchive->getNameIndex($i);
            }

            $zipArchive->extractTo($themePath, $files);
            $zipArchive->close();
        }

        Artisan::call('route:clear');

        return response()->json([], 201);
    }

    /**
     * Update the specified themes options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  String  $theme
     */
    public function update(Request $request, $theme)
    {
        $this->authorize('themes.update');

        $optionsPath = storage_path("/themes/{$theme}.json");

        File::put($optionsPath, json_encode($request->except('_method'), JSON_PRETTY_PRINT));

        activity()
            ->withProperties([
                'icon' => 'swatchbook',
                'link' => 'theme',
            ])
            ->log('Updated theme options');
    }
}
