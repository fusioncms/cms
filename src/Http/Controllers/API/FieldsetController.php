<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\FieldsetRequest;
use Fusion\Http\Resources\FieldsetResource;
use Fusion\Models\Fieldset;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class FieldsetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('fieldsets.viewAny');

        $fieldsets = Fieldset::orderBy('name')->paginate(25);

        return FieldsetResource::collection($fieldsets);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Fieldset $fieldset
     *
     * @return \Fusion\Http\Resources\FieldsetResource
     */
    public function show(Fieldset $fieldset)
    {
        $this->authorize('fieldsets.view');

        return new FieldsetResource($fieldset);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Fusion\Http\Requests\FieldsetRequest $request
     *
     * @return \Fusion\Http\Resources\FieldsetResource
     */
    public function store(FieldsetRequest $request)
    {
        $fieldset = Fieldset::create($request->validated());

        $fieldset->fields()->createMany(collect($request->fields));

        return new FieldsetResource($fieldset);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\FieldsetRequest $request
     * @param \Fusion\Models\Fieldset               $fieldset
     *
     * @return \Fusion\Http\Resources\FieldsetResource
     */
    public function update(FieldsetRequest $request, Fieldset $fieldset)
    {
        $fieldset->update($request->validated());

        $inserting = collect($request->fields)->reject(function($field) { return isset($field['id']); });
        $updating  = collect($request->fields)->filter(function($field) { return isset($field['id']); });
        $existing  = $fieldset->fields->pluck('id');
        $deleting  = $existing->diff($updating);

        $this->deleteFields($fieldset, $deleting);
        $this->updateFields($fieldset, $updating);
        $this->createFields($fieldset, $inserting);

        return new FieldsetResource($fieldset);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Fusion\Models\Fieldset $fieldset
     *
     * @return void
     */
    public function destroy(Fieldset $fieldset)
    {
        $this->authorize('fieldsets.delete');

        $fieldset->delete();
    }

    /**
     * Create Fields on Fieldset.
     *
     * @param \Fusion\Models\Fieldset         $fieldset
     * @param \Illuminate\Support\Collection  $fields
     *
     * @return void
     */
    protected function createFields(Fieldset $fieldset, Collection $fields)
    {
        $fields->each(function ($field, $index) use ($fieldset) {
            $fieldset->fields()->create([
                'name'       => $field['name'],
                'handle'     => $field['handle'],
                'help'       => $field['help'],
                'settings'   => $field['settings'],
                'validation' => $field['validation'],
                'type'       => $field['type']['handle'],
                'order'      => ($index + 1),
            ]);
        });
    }

    /**
     * Update Fields on Fieldset.
     *
     * @param \Fusion\Models\Fieldset         $fieldset
     * @param \Illuminate\Support\Collection  $fields
     *
     * @return void
     */
    protected function updateFields(Fieldset $fieldset, Collection $fields)
    {
        $fields->each(function ($data, $index) use ($fieldset) {
            $id = $data['id'];
            $data['type'] = $data['type']['handle'];

            $data['order'] = $index + 1;

            unset($data['id']);

            $field = $fieldset->fields()->find($id);
            $field->update($data);
        });
    }

    /**
     * Remove Fields from Fieldset.
     *
     * @param \Fusion\Models\Fieldset         $fieldset
     * @param \Illuminate\Support\Collection  $ids
     *
     * @return void
     */
    protected function deleteFields(Fieldset $fieldset, Collection $ids)
    {
        if ($ids->count()) {
            $fields = $fieldset->fields()->whereIn('id', $ids)->get();

            $fields->each(function ($field) {
                $field->delete();
            });
        }
    }
}
