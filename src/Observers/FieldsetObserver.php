<?php

namespace Fusion\Observers;

use Fusion\Database\Schema\Blueprint;
use Fusion\Models\Fieldset;
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
        Schema::create($fieldset->builderName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('fieldset_id');
            $table->string('name');
            $table->string('handle')->unique();
            $table->boolean('status')->default(true);
            $table->timestamps();

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

        if ($old->builderName() !== $fieldset->builderName()) {
            Schema::rename($old->builderName(), $fieldset->builderName());
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
        Schema::dropIfExists($fieldset->builderName());
    }
}