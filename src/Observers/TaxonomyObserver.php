<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Fusion\Models\Taxonomy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TaxonomyObserver implements BuilderObserver
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
            $table->unsignedBigInteger('taxonomy_id');
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('name');
            $table->string('slug')->unique()->nullable();
            $table->boolean('status')->default(true);
            $table->timestamps();

            $table->foreign('taxonomy_id')
                ->references('id')->on('taxonomies')
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
        // Fetch our "old" instance
        $old = Taxonomy::find($model->id);

        // Rename the tables if changed
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
