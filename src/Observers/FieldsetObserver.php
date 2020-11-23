<?php

namespace Fusion\Observers;

use Fusion\Models\Fieldset;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FieldsetObserver
{
    /**
     * Handle the "created" event.
     *
     * @param \Fusion\Models\Fieldset $fieldset
     *
     * @return void
     */
    public function created(Fieldset $fieldset)
    {
        Schema::create($fieldset->getBuilderTable(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('field_id');
            $table->unsignedBigInteger('fieldset_id');
            $table->morphs('fieldsetable');

            $table->foreign('field_id')
                ->references('id')->on('fields')
                ->onDelete('cascade');

            $table->foreign('fieldset_id')
                ->references('id')->on('fieldsets')
                ->onDelete('cascade');
        });
    }

    /**
     * Handle the "updating" event.
     *
     * @param \Fusion\Models\Fieldset $fieldset
     *
     * @return void
     */
    public function updating(Fieldset $fieldset)
    {
        $old = Fieldset::find($fieldset->id);

        if ($old->getBuilderTable() !== $fieldset->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $fieldset->getBuilderTable());
        }
    }

    /**
     * Handle the "deleted" event.
     *
     * @param \Fusion\Models\Fieldset $fieldset
     *
     * @return void
     */
    public function deleted(Fieldset $fieldset)
    {
        Schema::dropIfExists($fieldset->getBuilderTable());
    }
}
