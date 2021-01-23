<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;

class AdminController extends Controller
{
    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\View\Factory
     */
    public function index()
    {
notify('new_user_registration', auth()->user());
        if (auth()->check()) {
            $this->authorize('access.controlPanel');
        }

        return view('admin.index');
    }
}
