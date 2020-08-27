<?php

namespace Themes\Hello\Http\Controllers;

use Fusion\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index(Request $request, Form $form)
    {
        return view('forms.default', compact('form'));
    }
}
