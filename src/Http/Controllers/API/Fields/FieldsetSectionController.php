<?php

namespace Fusion\Http\Controllers\API\Fields;

use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\FieldsetResource;

class FieldsetSectionController extends Controller
{
    public function store(Request $request, Fieldset $fieldset)
    {
        $sections = collect($request->sections);

        $fieldset = $this->createSections($fieldset, $this->getAttachedSections($sections));
        $fieldset = $this->updateSections($fieldset, $this->getUpdatedSections($sections));
        $fieldset = $this->deleteSections($fieldset, $this->getDetachedSections($fieldset, $sections));

        return new FieldsetResource($fieldset);
    }

    /**
     * @param  Collection $sections
     * @return Collection
     */
    protected function getAttachedSections(Collection $sections)
    {
        return $sections->filter(function ($section) {
            return ! isset($section['id']);
        });
    }

    /**
     * @param  Collection $sections
     * @return Collection
     */
    protected function getUpdatedSections(Collection $sections)
    {
        return $sections->reject(function ($section) {
            return ! isset($section['id']);
        });
    }

    /**
     * @param  Fieldset   $fieldset
     * @param  Collection $sections
     * @return Collection
     */
    protected function getDetachedSections(Fieldset $fieldset, Collection $sections)
    {
        $existing = $fieldset->sections->pluck('id');
        $saving   = $this->getUpdatedSections($sections)->pluck('id');

        return $existing->diff($saving);
    }

    /**
     * Create Sections on Fieldset.
     * 
     * @param  Fieldset   $fieldset
     * @param  Collection $sections
     * @return Fieldset
     */
    protected function createSections(Fieldset $fieldset, Collection $sections)
    {
        $sections->each(function ($data) use ($fieldset) {
            $section = $fieldset->sections()->create([
                'name'        => $data['name'],
                'handle'      => $data['handle'],
                'description' => $data['description'],
                'placement'   => $data['placement'],
                'order'       => $data['order'],
            ]);

            if (isset($data['fields'])) {
                $this->createFields($section, collect($data['fields']));
            }
        });

        return $fieldset;
    }

    /**
     * Update Sections on Fieldset.
     * 
     * @param  Fieldset   $fieldset
     * @param  Collection $sections
     * @return Fieldset
     */
    protected function updateSections(Fieldset $fieldset, Collection $sections)
    {
        $sections->each(function ($data) use ($fieldset) {
            $id      = $data['id'];
            $fields  = collect($data['fields']);

            unset($data['id']);
            unset($data['fields']);

            $section = $fieldset->sections()->findOrFail($id);
            $section->update($data);

            $this->deleteFields($section, $this->getDetachedFields($section, $fields));
            $this->updateFields($section, $this->getUpdatedFields($fields));
            $this->createFields($section, $this->getAttachedFields($fields));
        });

        return $fieldset;
    }

    /**
     * Remove Sections from Fieldset.
     * 
     * @param  Fieldset   $fieldset
     * @param  Collection $ids
     * @return Fieldset
     */
    protected function deleteSections(Fieldset $fieldset, Collection $ids)
    {
        if ($ids->count()) {
            $sections = $fieldset->sections()->whereIn('id', $ids)->get();

            $sections->each(function ($section) {
                $section->delete();
            });
        }

        return $fieldset;
    }

    /**
     * @param  Collection $fields
     * @return Collection
     */
    protected function getAttachedFields(Collection $fields)
    {
        return $fields->filter(function ($field) {
            return ! isset($field['id']);
        });
    }

    /**
     * @param  Collection $fields
     * @return Collection
     */
    protected function getUpdatedFields(Collection $fields)
    {
        return $fields->reject(function ($field) {
            return ! isset($field['id']);
        });
    }

    /**
     * @param  Section    $section
     * @param  Collection $fields
     * @return Collection
     */
    protected function getDetachedFields(Section $section, Collection $fields)
    {
        $existing = $section->fields->pluck('id');
        $saving   = $this->getUpdatedFields($fields)->pluck('id');

        return $existing->diff($saving);
    }

    /**
     * Create Fields on Section.
     * 
     * @param  Section    $section
     * @param  Collection $fields
     * @return void
     */
    protected function createFields(Section $section, Collection $fields)
    {
        if ($fields->isNotEmpty()){
            $section->fields()->createMany($fields->all());
        }
        // $fields->each(function ($field) use ($section) {
        //     $section->fields()->create([
        //         'name'      => $field['name'],
        //         'handle'    => $field['handle'],
        //         'help'      => $field['help'],
        //         'settings'  => $field['settings'],
        //         'type'      => $field['type']['handle'],
        //         'order'     => $field['order']
        //     ]);
        // });
    }

    /**
     * Update Fields on Section.
     * 
     * @param  Section    $section
     * @param  Collection $fields
     * @return void
     */
    protected function updateFields(Section $section, Collection $fields)
    {
        $fields->each(function ($field) use ($section) {
            $id            = $field['id'];
            $field['type'] = $field['type']['handle'];

            unset($field['id']);

            $section->fields()->find($id)->update($field);
        });
    }

    /**
     * Remove Fields from Section.
     * 
     * @param  Section    $section
     * @param  Collection $ids
     * @return void
     */
    protected function deleteFields(Section $section, Collection $ids)
    {
        if ($ids->count()) {
            $fields = $section->fields()->whereIn('id', $ids)->get();

            $fields->each(function ($field) {
                $field->delete();
            });
        }
    }
}
