<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;

class AdminController extends Controller
{
    use \Fusion\Concerns\HasCustomLogger;
    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\View\Factory
     */
    public function index()
    {
        if (auth()->check()) {
            $this->authorize('access.controlPanel');
        }

        return view('admin.index');
    }
}
