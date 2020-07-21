<?php

namespace Fusion\Observers;

use Illuminate\Support\Str;
use Fusion\Models\Fieldset;
use Fusion\Models\Replicator;
use Fusion\Database\Migration;
use Fusion\Database\Schema\Blueprint;

class ReplicatorObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Constructor.
     *
     * @param  \Fusion\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the "created" event.
     *
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    public function created(Replicator $replicator)
    {
        $this->migration->schema->create($replicator->table, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('replicator_id')->index();
            $table->timestamps();
        });

        $this->createFieldset($replicator);
    }

    /**
     * Handle the "updating" event.
     *
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    public function updating(Replicator $replicator)
    {
        // Fetch our "old" instance
        $old = Replicator::find($replicator->id);

        // Rename the tables if changed
        if ($old->table !== $replicator->table) {
            $this->migration->schema->rename($old->table, $replicator->table);

            $oldClass = 'Fusion\\Models\\Replicators\\' . Str::studly($old->handle);
            $newClass = 'Fusion\\Models\\Replicators\\' . Str::studly($replicator->handle);

            $this->updateFieldset($replicator);
        }
    }

    /**
     * Handle the  "deleting" event.
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
     * Handle the "deleted" event.
     *
     * @param  \Fusion\Models\Replicator $replicator
     * @return void
     */
    public function deleted(Replicator $replicator)
    {
        $this->migration->schema->dropIfExists($replicator->table);
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
        $fieldset = Fieldset::create([
            'name'   => ($name = "Replicator: {$replicator->name}"),
            'handle' => str_handle($name),
            'hidden' => true
        ]);

        // add section/fields
        $section = $fieldset->sections()->create([
            'name'   => 'General',
            'handle' => 'general',
        ])->fields()->createMany(
            $replicator->field->settings['fields'] ?? []
        );

        $replicator->attachFieldset($fieldset);
        $replicator->save();
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
        if ($fields->isNotEmpty()){
            $section->fields()->createMany($fields->all());
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
        $section
            ->fields()
            ->whereIn('id', $ids)
            ->each(function($field) {
                $field->delete();
            });
    }
}
