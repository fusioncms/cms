<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Form;
use Illuminate\Http\Request;

class ThankyouController extends Controller
{
    public function index(Request $request, $form)
    {
        $form = Form::where('slug', $form)->first();

        if (!$form) {
            abort(404);
        }

        return view(($form->thankyou_template ?: 'forms.thankyou'), compact('form'));
    }
}
