<?php

namespace Fusion\Http\Controllers\API\Themes;

use Fusion\Facades\Theme;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;
use Illuminate\Http\Request;

class ActiveController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @return JsonResponse
     */
    public function show()
    {
        $this->authorize('themes.view');

        $theme = Theme::active();

        return new ThemeResource($theme);
    }

    /**
     * Update the currently active theme.
     *
     * @param Request $request
     * @param string  $theme
     *
     * @return JsonResponse
     */
    public function update(Request $request, $theme)
    {
        $this->authorize('themes.update');

        Theme::deactivate();
        Theme::activate($theme);

        $theme = Theme::active();

        setting([
            'system.theme' => $theme->get('namespace'),
        ]);

        activity()
            ->withProperties([
                'icon' => 'swatchbook',
                'link' => 'themes',
            ])
            ->log('Set theme to '.$theme->get('name').' ('.$theme->get('version').')');
    }
}
