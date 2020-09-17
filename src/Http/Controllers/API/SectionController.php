<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\BlueprintResource;
use Fusion\Models\Blueprint;
use Fusion\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class SectionController extends Controller
{
    public function store(Request $request, Blueprint $blueprint)
    {
        $sections = collect($request->sections);

        $attached = $this->getAttachedSections($sections);
        $updated  = $this->getUpdatedSections($sections);
        $detached = $this->getDetachedSections($blueprint, $sections);

        $blueprint = $this->deleteSections($blueprint, $detached);
        $blueprint = $this->updateSections($blueprint, $updated);
        $blueprint = $this->createSections($blueprint, $attached);

        return new BlueprintResource($blueprint);
    }

    /**
     * @param Collection $sections
     *
     * @return Collection
     */
    protected function getAttachedSections(Collection $sections)
    {
        return $sections->filter(function ($section) {
            return !isset($section['id']);
        });
    }

    /**
     * @param Collection $sections
     *
     * @return Collection
     */
    protected function getUpdatedSections(Collection $sections)
    {
        return $sections->reject(function ($section) {
            return !isset($section['id']);
        });
    }

    /**
     * @param Blueprint  $blueprint
     * @param Collection $sections
     *
     * @return Collection
     */
    protected function getDetachedSections(Blueprint $blueprint, Collection $sections)
    {
        if ($sections->isEmpty()) {
            return collect();
        }

        $existing = $blueprint->sections->pluck('id');
        $saving   = $this->getUpdatedSections($sections)->pluck('id');

        return $existing->diff($saving);
    }

    /**
     * Create Sections on Blueprint.
     *
     * @param Blueprint  $blueprint
     * @param Collection $sections
     *
     * @return Blueprint
     */
    protected function createSections(Blueprint $blueprint, Collection $sections)
    {
        if ($sections->isNotEmpty()) {
            $sections->each(function ($data, $index) use ($blueprint) {
                $section = $blueprint->sections()->create([
                    'name'        => $data['name'],
                    'handle'      => $data['handle'],
                    'description' => $data['description'],
                    'placement'   => $data['placement'],
                    'order'       => ($index + 1),
                ]);

                if (isset($data['fields'])) {
                    $this->createFields($section, collect($data['fields']));
                }
            });
        }

        return $blueprint;
    }

    /**
     * Update Sections on Blueprint.
     *
     * @param Blueprint  $blueprint
     * @param Collection $sections
     *
     * @return Blueprint
     */
    protected function updateSections(Blueprint $blueprint, Collection $sections)
    {
        if ($sections->isNotEmpty()) {
            $sections->each(function ($data, $index) use ($blueprint) {
                $id = $data['id'];
                $fields = collect($data['fields']);

                $data['order'] = $index + 1;

                unset($data['id']);
                unset($data['fields']);

                $section = $blueprint->sections()->findOrFail($id);
                $section->update($data);

                $detached = $this->getDetachedFields($section, $fields);
                $updated = $this->getUpdatedFields($fields);
                $attached = $this->getAttachedFields($fields);

                $this->deleteFields($section, $detached);
                $this->updateFields($section, $updated);
                $this->createFields($section, $attached);
            });
        }

        return $blueprint;
    }

    /**
     * Remove Sections from Blueprint.
     *
     * @param Blueprint  $blueprint
     * @param Collection $ids
     *
     * @return Blueprint
     */
    protected function deleteSections(Blueprint $blueprint, Collection $ids)
    {
        if ($ids->count()) {
            $sections = $blueprint->sections()->whereIn('id', $ids)->get();

            $sections->each(function ($section) {
                $section->delete();
            });
        }

        return $blueprint;
    }

    /**
     * @param Collection $fields
     *
     * @return Collection
     */
    protected function getAttachedFields(Collection $fields)
    {
        return $fields->filter(function ($field) {
            return !isset($field['id']);
        });
    }

    /**
     * @param Collection $fields
     *
     * @return Collection
     */
    protected function getUpdatedFields(Collection $fields)
    {
        return $fields->reject(function ($field) {
            return !isset($field['id']);
        });
    }

    /**
     * @param Section    $section
     * @param Collection $fields
     *
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
     * @param Section    $section
     * @param Collection $fields
     *
     * @return void
     */
    protected function createFields(Section $section, Collection $fields)
    {
        if ($fields->isNotEmpty()) {
            $fields->each(function ($field, $index) use ($section) {
                $section->fields()->create([
                    'name'       => $field['name'],
                    'handle'     => $field['handle'],
                    'help'       => $field['help'],
                    'settings'   => $field['settings'],
                    'validation' => $field['validation'] ?? '',
                    'type'       => $field['type']['handle'],
                    'order'      => ($index + 1),
                ]);
            });
        }
    }

    /**
     * Update Fields on Section.
     *
     * @param Section    $section
     * @param Collection $fields
     *
     * @return void
     */
    protected function updateFields(Section $section, Collection $fields)
    {
        $fields->each(function ($data, $index) use ($section) {
            $id = $data['id'];
            $data['type'] = $data['type']['handle'];

            $data['order'] = $index + 1;

            unset($data['id']);

            $field = $section->fields()->find($id);
            $field->update($data);
        });
    }

    /**
     * Remove Fields from Section.
     *
     * @param Section    $section
     * @param Collection $ids
     *
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
