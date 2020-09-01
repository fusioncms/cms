<?php

namespace Fusion\Http\Controllers\API\Navigation;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NodeResource;
use Fusion\Models\Navigation;
use Fusion\Services\Builders\Navigation as Builder;
use Illuminate\Http\Request;

class NodeController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        //
    ];

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Navigation $navigation
     *
     * @return \Illuminate\Http\Response
     */
    public function show($navigation, $id)
    {
        $this->authorize('nodes.view');

        $navigation  = Navigation::find($navigation);
        $model = (new Builder($navigation->handle))->make();
        $node  = $model->find($id);

        return new NodeResource($node);
    }

    public function store(Request $request, $navigation)
    {
        $this->authorize('nodes.create');

        $navigation          = Navigation::find($navigation);
        $model         = (new Builder($navigation->handle))->make();
        $relationships = [];

        $rules = [
            'name'       => 'required',
            'url'        => 'sometimes',
            'new_window' => 'sometimes',
            'parent_id'  => 'sometimes',
            'status'     => 'sometimes',
        ];

        if (isset($navigation->fieldset)) {
            $fields        = $navigation->fieldset->database();
            $relationships = $navigation->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes            = $request->validate($rules);
        $attributes['navigation_id'] = $navigation->id;
        $attributes['order']   = $model->orderLast();

        $node = $model->create($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($node, $relationship);
        }

        return new NodeResource($node);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $navigation
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $navigation, $id)
    {
        $this->authorize('nodes.update');

        $navigation          = Navigation::findOrFail($navigation);
        $node          = (new Builder($navigation->handle))->make()->findOrFail($id);
        $relationships = [];
        $rules         = [
            'name'       => 'required',
            'url'        => 'sometimes',
            'new_window' => 'sometimes',
            'parent_id'  => 'sometimes',
            'status'     => 'sometimes',
        ];

        if (isset($navigation->fieldset)) {
            $fields        = $navigation->fieldset->database();
            $relationships = $navigation->fieldset->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $node->{$handle} = $value;
        }

        $node->update($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($node, $relationship);
        }

        return new NodeResource($node);
    }

    public function destroy(Request $request, $navigation, $id)
    {
        $this->authorize('nodes.delete');

        $navigation  = Navigation::findOrFail($navigation);
        $model = (new Builder($navigation->handle))->make();
        $node  = $model->findOrFail($id);

        $node->delete();
    }
}
