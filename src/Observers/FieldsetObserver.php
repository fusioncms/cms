<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Fusion\Models\Fieldset;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FieldsetObserver implements BuilderObserver
{
    /**
     * Handle the "created" event.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return void
     */
    public function created(Model $model)
    {
        Schema::create($model->getBuilderTable(), function (Blueprint $table) {
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
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return void
     */
    public function updating(Model $model)
    {
        $old = Fieldset::find($model->id);

        if ($old->getBuilderTable() !== $model->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $model->getBuilderTable());
        }
    }

    /**
     * Handle the "deleted" event.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     *
     * @return void
     */
    public function deleted(Model $model)
    {
        Schema::dropIfExists($model->getBuilderTable());
    }
}
