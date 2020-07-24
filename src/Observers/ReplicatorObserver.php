<?php

namespace Fusion\Observers;

use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Replicator;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class ReplicatorObserver
{
    /**
     * Handle 'saved' model event.
     *
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    public function saved(Replicator $replicator)
    {
        if (Schema::hasTable($replicator->table)) {
            $this->updateReplicator($replicator);
        } else {
            $this->createReplicator($replicator);
        }
    }

    /**
     * Handle 'deleting' model event.
     *
     * @param \Fusion\Models\Replicator $replicator
     * @return void
     */
    public function deleting(Replicator $replicator)
    {
        $fieldsets = $replicator->fieldsets;

        $replicator->detachFieldset();

        // Manually remove fieldsets..
        $fieldsets->each(function($fieldset) {
            $fieldset->delete();
        });
    }

    /**
     * Handle 'deleted' model event.
     *
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    public function deleted(Replicator $replicator)
    {
        Schema::dropIfExists($replicator->table);
    }

    /**
     * Create replicator.
     * 
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    protected function createReplicator(Replicator $replicator)
    {
        $this->createFieldset($replicator);

        $prefix = "rp_{$replicator->field->handle}";
        $suffix = $replicator->uniqid;

        $replicator->fieldset->sections
            ->each(function($section) use ($prefix, $suffix) {
                $tableName = str_handle("{$prefix}_{$section->handle}_{$suffix}");

                Schema::create($tableName, function(Blueprint $table) use ($section) {
                    $table->bigIncrements('id');
                    $table->unsignedBigInteger('replicator_id')->index();
                    $table->timestamps();

                    // create columns..
                    $section->fields->each(function($field) use ($table) {
                        $fieldtype = fieldtypes()->get($field->type);
                        $column    = $fieldtype->getColumn('type');

                        call_user_func_array([$table, $column], [$field->handle])->nullable();
                    });
                });
            });
    }

    /**
     * Update replicator.
     * 
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    protected function updateReplicator(Replicator $replicator)
    {
        $field     = $replicator->field;
        $oldTable  = $replicator->table;
        $oldHandle = $replicator->handle;
        $newHandle = "{$field->handle}_" . Str::afterLast($oldHandle, '_');

        // If field name changed...
        if ($oldHandle !== $newHandle) {
            $replicator->withoutEvents(function() use ($replicator, $field, $newHandle) {
                $replicator->update([
                    'name'   => $field->name,
                    'handle' => $newHandle
                ]);
            });
            
            $replicator = $replicator->fresh();

            Schema::rename($oldTable, $replicator->table);
        }

        $this->updateFieldset($replicator);
    }


    /**
     * Auto-generate Fieldset.
     *
     * @param  \Fusion\Models\Replicator  $replicator
     * @return void
     */
    protected function createFieldset(Replicator $replicator)
    {
        $replicator->withoutEvents(function() use ($replicator) {
            $fieldset = $replicator->fieldsets()->create([
                'name'   => ($name = "Replicator: {$replicator->name}"),
                'handle' => str_handle($name),
                'hidden' => true
            ]);

            $this->createSections($fieldset,
                collect($replicator->field->settings['sections']));
        });

    }

    /**
     * Create fieldset sections.
     * 
     * @param  \Fusion\Models\Fieldset         $fieldset
     * @param  \Illuminate\Support\Collection  $sections
     * @return void
     */
    protected function createSections(Fieldset $fieldset, Collection $sections)
    {
        if ($sections->isNotEmpty()) {
            $sections->each(function ($data) use ($fieldset) {
                $section = $fieldset->sections()->create([
                    'name'        => $data['name'],
                    'handle'      => $data['handle'],
                    'description' => $data['description'],
                    'placement'   => $data['placement'],
                    'order'       => $data['order'],
                ]);

               $this->createFields($section, collect($data['fields']));
            });
        }
    }

    // /**
    //  * Update fieldset sections.
    //  * 
    //  * @param  \Fusion\Models\Fieldset         $fieldset
    //  * @param  \Illuminate\Support\Collection  $sections
    //  * @return void
    //  */
    // protected function updateSections(Fieldset $fieldset, Collection $sections)
    // {
    //     if ($sections->isNotEmpty()) {
    //         $sections->each(function ($data) use ($fieldset) {
    //             $id      = $data['id'];
    //             $fields  = collect($data['fields']);

    //     $attached = $this->getDetachedFields($section, $fields);
    //             $updated  = $this->getUpdatedFields($fields);
    //             $detached = $this->getAttachedFields($fields);

    //             $this->deleteFields($section, $detached);
    //             $this->updateFields($section, $updated);
    //             $this->createFields($section, $detached);
    // }

    /**
     * Automatically update Fieldset for Replicator.
     *
     * @param  Replicator  $replicator
     * @return void
     */
    protected function updateFieldset(Replicator $replicator)
    {
        $replicator->fieldset()->update([
            'name'   => ($name = "Replicator: {$replicator->name}"),
            'handle' => str_handle($name)
        ]);

        if (isset($replicator->field->settings['sections'])) {
            fusion()
                ->post("fieldsets/{$replicator->fieldset->id}/sections", [
                    'sections' => $replicator->field->settings['sections']
                ]);
        }

        // $fields  = collect($replicator->field->settings['fields'] ?? []);
        // $section = $replicator->fieldset()->sections()->first();

        // $this->deleteFields($section, $this->getDetachedFields($section, $fields));
        // $this->updateFields($section, $this->getUpdatedFields($fields));
        // $this->createFields($section, $this->getAttachedFields($fields));
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
     * Create section fields.
     * 
     * @param  Section    $section
     * @param  Collection $fields
     * @return void
     */
    protected function createFields(Section $section, Collection $fields)
    {
        if ($fields->isNotEmpty()) {
            $fields->each(function($field) use ($section) {
                $section->fields()->create([
                    'name'     => $field['name'],
                    'handle'   => $field['handle'],
                    'help'     => $field['help'],
                    'settings' => $field['settings'],
                    'type'     => $field['type']['handle'],
                    'order'    => $field['order'],
                ]);
            });
        }
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
        if ($fields->isNotEmpty()) {
            $fields->each(function ($field) use ($section) {
                $id            = $field['id'];
                $field['type'] = $field['type']['handle'];

                unset($field['id']);

                $section->fields()->find($id)->update($field);
            });
        }
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
        $section
            ->fields()
            ->whereIn('id', $ids)
            ->each(function($field) {
                $field->delete();
            });
    }
}
