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
     * Create replicator table.
     * 
     * @param  Replicator $replicator
     * @return void
     */
    protected function createReplicator(Replicator $replicator)
    {
        Schema::create($replicator->table, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('replicator_id')->index();
            $table->timestamps();
        });

        $this->createFieldset($replicator);
    }

    /**
     * 
     * @param  Replicator $replicator
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
     * Automatically create a Fieldset, Section,
     *  & Fields for our Replicator.
     *
     * @param  Replicator  $replicator
     * @return void
     */
    protected function createFieldset(Replicator $replicator)
    {
        $replicator->withoutEvents(function() use ($replicator) {
            $fieldset = Fieldset::create([
                'name'   => ($name = "Replicator: {$replicator->name}"),
                'handle' => str_handle($name),
                'hidden' => true
            ]);

            $replicator->attachFieldset($fieldset);
            $replicator->save();
        });

        $section = $replicator->fieldset->sections()->create([
            'name'   => ($name = "Replicator: {$replicator->name}"),
            'handle' => str_handle($name),
        ]);

        if (isset($replicator->field->settings['fields'])) {
            $this->createFields($section, collect($replicator->field->settings['fields']));
        }
    }

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

        $fields  = collect($replicator->field->settings['fields'] ?? []);
        $section = $replicator->fieldset()->sections()->first();

        $this->deleteFields($section, $this->getDetachedFields($section, $fields));
        $this->updateFields($section, $this->getUpdatedFields($fields));
        $this->createFields($section, $this->getAttachedFields($fields));
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
