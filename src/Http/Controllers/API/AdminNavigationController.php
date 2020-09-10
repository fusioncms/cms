<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Facades\Menu;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\AdminNavigationResource;

class AdminNavigationController extends Controller
{
    /**
     * Get all admin navigation menu items.
     *
     * @return \Fusion\Http\Resources\AdminNavigationResource
     */
    public function index()
    {
        $this->authorize('access.controlPanel');

        return new AdminNavigationResource(Menu::get('admin'));
    }
}
