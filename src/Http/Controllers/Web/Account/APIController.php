<?php

namespace Fusion\Http\Controllers\Web\Account;

use Fusion\Http\Controllers\Controller;
use Illuminate\Http\Request;

class APIController extends Controller
{
    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function edit(Request $request)
    {
        return view('account.api');
    }
}
