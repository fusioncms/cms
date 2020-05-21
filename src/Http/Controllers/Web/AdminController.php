<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;

class AdminController extends Controller
{
	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->middleware(['role:owner','permission:cp.access']);
	}

    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\View\Factory
     */
    public function index()
	{
		return view('admin.index');
    }
}
