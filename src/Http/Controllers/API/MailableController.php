<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\MailableRequest;
use Fusion\Http\Resources\MailableResource;
use Fusion\Models\Mailable;

class MailableController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Mailable $mailable
     *
     * @return \Fusion\Http\Resources\MailableResource
     */
    public function show(Mailable $mailable)
    {
        $this->authorize('mailables.view');

        return new MailableResource($mailable);
    }

    /**
     * Update an existing record in storage.
     *
     * @param \Fusion\Http\Requests\MailableRequest $request
     * @param \Fusion\Models\Mailable               $mailable
     *
     * @return \Fusion\Http\Resources\MailableResource
     */
    public function update(MailableRequest $request, Mailable $mailable)
    {
        $mailable->update($request->validated());

        return new MailableResource($mailable);
    }
}
