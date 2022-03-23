<?php

namespace Fusion\Http\Controllers\Web;

use Illuminate\Support\Facades\Mail;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ResponseRequest;
use Fusion\Mail\Form as FormMail;

class ResponseController extends Controller
{
    /**
     * Show the home index screen.
     *
     * @param \Fusion\Http\Requests\ResponseRequest $request
     *
     * @return Theme
     */
    public function store(ResponseRequest $request)
    {
        $form     = $request->form->fresh();
        $response = $form->responses()->create($request->validated());

        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($response, $relationship);
        }

        if (isset($form->send_to) && trim($form->send_to) != '') {
            Mail::to($form->send_to)->send(new FormMail($response));
        }

        if (!$form->redirect_on_submission) {
            $redirect = $form->thankyouPath();
        } else {
            $redirect = $form->redirect_url;
        }

        return redirect($redirect);
    }
}
