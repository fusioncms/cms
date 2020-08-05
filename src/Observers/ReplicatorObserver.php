<?php

namespace Fusion\Observers;

use Fusion\Models\Field;
use Fusion\Models\Fieldset;
use Fusion\Models\Replicator;
use Fusion\Models\Section;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Schema;

class ReplicatorObserver
{
    /**
     * Dynamic table name prefix.
     *
     * @var string
     */
    private $prefix;

    /**
     * Dynamic table name suffix.
     *
     * @var string
     */
    private $suffix;

    /**
     * Handle 'saved' model event.
     *
     * @param \Fusion\Models\Replicator $replicator
     *
     * @return void
     */
    public function saved(Replicator $replicator)
    {
        $this->prefix = "rp_{$replicator->handle}";
        $this->suffix = $replicator->uniqid;

        $replicator->withoutEvents(function () use ($replicator) {
            if ($replicator->fieldset == null) {
                $this->createFieldset($replicator);
            } else {
                $this->updateFieldset($replicator);
            }
        });
    }

    /**
     * Handle 'deleted' model event.
     *
     * @param \Fusion\Models\Replicator $replicator
     *
     * @return void
     */
    public function deleted(Replicator $replicator)
    {
        $this->prefix = "rp_{$replicator->handle}";
        $this->suffix = $replicator->uniqid;

        $replicator->withoutEvents(function () use ($replicator) {
            $this->deleteFieldset($replicator);
        });
    }

    /**
     * Auto-generate Fieldset.
     *
     * @param \Fusion\Models\Replicator $replicator
     *
     * @return void
     */
    private function createFieldset(Replicator $replicator)
    {
        $fieldset = $replicator->fieldsets()->create([
            'name'   => ($name = "Replicator: {$replicator->name}"),
            'handle' => str_handle("{$replicator->name}_{$replicator->uniqid}"),
            'hidden' => true,
        ]);

        $this->createSections(
            $fieldset,
            collect($replicator->field->settings['sections'])
        );
    }

    /**
     * Update Fieldset.
     *
     * @param \Fusion\Models\Replicator $replicator
     *
     * @return void
     */
    private function updateFieldset(Replicator $replicator)
    {
        $fieldset = $replicator->fieldset;
        $fieldset->update([
            'name'   => ($name = "Replicator: {$replicator->name}"),
            'handle' => str_handle("{$replicator->name}_{$replicator->uniqid}"),
        ]);

        $sections = collect($replicator->field->settings['sections']);
        $existing = $fieldset->sections->pluck('id');

        $this->deleteSections($fieldset, $this->getDetachedItems($existing, $sections));
        $this->updateSections($fieldset, $this->getUpdatedItems($sections));
        $this->createSections($fieldset, $this->getAttachedItems($sections));
    }

    /**
     * Delete Fieldset.
     *
     * @param \Fusion\Models\Replicator $replicator
     *
     * @return void
     */
    private function deleteFieldset(Replicator $replicator)
    {
        $fieldset = $replicator->fieldset;

        $this->deleteSections($fieldset, $fieldset->sections->pluck('id'));

        $fieldset->delete();
    }

    /**
     * Create fieldset sections.
     *
     * @param \Fusion\Models\Fieldset        $fieldset
     * @param \Illuminate\Support\Collection $toCreate
     *
     * @return void
     */
    private function createSections(Fieldset $fieldset, Collection $toCreate)
    {
        $toCreate->each(function ($data, $index) use ($fieldset) {
            $section = $fieldset->sections()->create([
                'name'        => $data['name'],
                'handle'      => $data['handle'],
                'description' => $data['description'],
                'placement'   => $data['placement'],
                'order'       => ($index + 1),
            ]);

            $this->createReplicantTable($section);
            $this->createFields($section, collect($data['fields']));
        });
    }

    /**
     * Update fieldset sections.
     *
     * @param \Fusion\Models\Fieldset        $fieldset
     * @param \Illuminate\Support\Collection $toUpdate
     *
     * @return void
     */
    private function updateSections(Fieldset $fieldset, Collection $toUpdate)
    {
        $toUpdate->each(function ($data, $index) use ($fieldset) {
            $newSection = $fieldset->sections()->find($data['id']);
            $oldSection = $newSection->replicate();
            $newSection->update([
                'name'        => $data['name'],
                'handle'      => $data['handle'],
                'description' => $data['description'],
                'placement'   => $data['placement'],
                'order'       => ($index + 1),
            ]);

            $this->updateReplicantTable($oldSection, $newSection);

            // manage fields..
            $fields = collect($data['fields']);
            $existing = $newSection->fields->pluck('id');

            $this->deleteFields($newSection, $this->getDetachedItems($existing, $fields));
            $this->updateFields($newSection, $this->getUpdatedItems($fields));
            $this->createFields($newSection, $this->getAttachedItems($fields));
        });
    }

    /**
     * Delete fieldset sections.
     *
     * @param \Fusion\Models\Fieldset        $fieldset
     * @param \Illuminate\Support\Collection $toDelete
     *
     * @return void
     */
    private function deleteSections(Fieldset $fieldset, Collection $toDelete)
    {
        $sections = $fieldset->sections()->whereIn('id', $toDelete);
        $sections->each(function ($section) {
            $this->deleteFields($section, $section->fields->pluck('id'));
            $this->deleteReplicantTable($section);
            $section->delete();
        });
    }

    /**
     * Create section fields.
     *
     * @param \Fusion\Models\Section         $section
     * @param \Illuminate\Support\Collection $toCreate
     *
     * @return void
     */
    private function createFields(Section $section, Collection $toCreate)
    {
        $toCreate->each(function ($data, $index) use ($section) {
            $field = $section->fields()->create([
                'name'     => $data['name'],
                'handle'   => $data['handle'],
                'help'     => $data['help'],
                'settings' => $data['settings'],
                'type'     => is_string($data['type']) ? $data['type'] : $data['type']['handle'],
                'order'    => ($index + 1),
            ]);

            if ($field->type()->hasColumn()) {
                $this->createReplicantColumn($section, $field);
            }
        });
    }

    /**
     * Update section fields.
     *
     * @param \Fusion\Models\Section         $section
     * @param \Illuminate\Support\Collection $toUpdate
     *
     * @return void
     */
    private function updateFields(Section $section, Collection $toUpdate)
    {
        $toUpdate->each(function ($data, $index) use ($section) {
            $newField = $section->fields()->find($data['id']);
            $oldField = $newField->replicate();
            $newField->update([
                'name'     => $data['name'],
                'handle'   => $data['handle'],
                'help'     => $data['help'],
                'settings' => $data['settings'],
                'type'     => is_string($data['type']) ? $data['type'] : $data['type']['handle'],
                'order'    => ($index + 1),
            ]);

            if ($newField->type()->hasColumn()) {
                $this->updateReplicantColumn($section, $oldField, $newField);
            }
        });
    }

    /**
     * Remove Fields from Section.
     *
     * @param \Fusion\Models\Section         $section
     * @param \Illuminate\Support\Collection $toDelete
     *
     * @return void
     */
    private function deleteFields(Section $section, Collection $toDelete)
    {
        $fields = $section->fields()->whereIn('id', $toDelete);
        $fields->each(function ($field) use ($section) {
            if ($field->type()->hasColumn()) {
                $this->deleteReplicantColumn($section, $field);
            }

            $field->delete();
        });
    }

    /**
     * Create replicant table for section.
     *
     * @param \Fusion\Models\Section $section
     *
     * @return void
     */
    private function createReplicantTable(Section $section)
    {
        Schema::create($this->getTable($section), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('replicator_id')->index();
            $table->unsignedBigInteger('section_id')->index();
            $table->timestamps();
        });
    }

    /**
     * Update replicant table for section.
     *
     * @param \Fusion\Models\Section $oldSection
     * @param \Fusion\Models\Section $newSection
     *
     * @return void
     */
    private function updateReplicantTable(Section $oldSection, Section $newSection)
    {
        $oldTableName = $this->getTable($oldSection);
        $newTableName = $this->getTable($newSection);

        if ($oldTableName !== $newTableName) {
            Schema::rename($oldTableName, $newTableName);
        }
    }

    /**
     * Delete replicant table.
     *
     * @param Section $section
     *
     * @return void
     */
    private function deleteReplicantTable(Section $section)
    {
        Schema::drop($this->getTable($section));
    }

    /**
     * Update replicant table column.
     *
     * @param \Fusion\Models\Section $section
     * @param \Fusion\Models\Field   $field
     *
     * @return void
     */
    private function createReplicantColumn(Section $section, Field $field)
    {
        Schema::table($this->getTable($section), function (Blueprint $table) use ($field) {
            $fieldtype = fieldtypes()->get($field->type);
            $dataType = $fieldtype->getColumn('type');

            call_user_func_array([$table, $dataType], [$field->handle])->nullable();
        });
    }

    /**
     * Update replicant table column.
     *
     * @param \Fusion\Models\Section $section
     * @param \Fusion\Models\Field   $oldField
     * @param \Fusion\Models\Field   $newField
     *
     * @return void
     */
    private function updateReplicantColumn(Section $section, Field $oldField, Field $newField)
    {
        Schema::table($this->getTable($section), function (Blueprint $table) use ($oldField, $newField) {
            $oldFieldtype = fieldtypes()->get($oldField->type);
            $oldDataType = $oldFieldtype->getColumn('type');

            $newFieldtype = fieldtypes()->get($newField->type);
            $newDataType = $newFieldtype->getColumn('type');

            if ($oldField->handle !== $newField->handle) {
                $table->renameColumn("`{$oldField->handle}`", "`{$newField->handle}`");
            }

            // update datatype
            if ($oldDataType !== $newDataType) {
                call_user_func_array([$table, $newDataType], [$newField->handle])->change();
            }
        });
    }

    /**
     * Delete replicant table column.
     *
     * @param \Fusion\Models\Section $section
     * @param \Fusion\Models\Field   $field
     *
     * @return void
     */
    private function deleteReplicantColumn(Section $section, Field $field)
    {
        Schema::table($this->getTable($section), function ($table) use ($field) {
            $table->dropColumn($field->handle);
        });
    }

    /**
     * Get replicant table name based on Section.
     *
     * @param \Fusion\Models\Section $section
     *
     * @return string
     */
    private function getTable(Section $section)
    {
        return str_handle("{$this->prefix}_{$section->handle}_{$this->suffix}");
    }

    /**
     * @param \Illuminate\Support\Collection $items
     *
     * @return \Illuminate\Support\Collection
     */
    private function getAttachedItems(Collection $items)
    {
        return $items->filter(function ($item) {
            return !isset($item['id']);
        });
    }

    /**
     * @param \Illuminate\Support\Collection $items
     *
     * @return \Illuminate\Support\Collection
     */
    private function getUpdatedItems(Collection $items)
    {
        return $items->reject(function ($item) {
            return !isset($item['id']);
        });
    }

    /**
     * @param \Illuminate\Support\Collection $existing
     * @param \Illuminate\Support\Collection $new
     *
     * @return \Illuminate\Support\Collection
     */
    private function getDetachedItems(Collection $existing, Collection $items)
    {
        return $existing->diff(
            $this->getUpdatedItems($items)->pluck('id')
        );
    }
}
