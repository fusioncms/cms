<?php

namespace Fusion\Http\Controllers\API\Themes;

use Fusion\Facades\Theme;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ActiveController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @return JsonResponse
     */
    public function show()
    {
        $theme = Theme::active();

        return new ThemeResource($theme);
    }

    /**
     * Update the currently active theme.
     *
     * @param  Request  $request
     * @param  String   $theme
     * @return JsonResponse
     */
    public function update(Request $request, $theme)
    {
        Theme::deactivate();
        Theme::activate($theme);

        $theme = Theme::active();

        setting([
            'system.theme' => $theme->get('namespace')
        ]);

        activity()
            ->withProperties([
                'icon' => 'swatchbook',
                'link' => 'themes',
            ])
            ->log('Set theme to ' . $theme->get('name') . ' (' . $theme->get('version') . ')');
    }
}
