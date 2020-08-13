<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ResponseRequest;

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

        if (!$form->redirect_on_submission) {
            $redirect = $form->thankyouPath();
        } else {
            $redirect = $form->redirect_url;
        }

        return redirect($redirect);
    }
}
