<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Fusion\Models\Navigation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class NavigationObserver implements BuilderObserver
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
            $table->unsignedBigInteger('navigation_id')->index();
            $table->unsignedBigInteger('parent_id')->index()->default(0);
            $table->string('name');
            $table->string('url')->nullable();
            $table->boolean('new_window')->default(false);
            $table->float('order')->nullable()->index();

            $table->boolean('status')->default(true);
            $table->timestamps();
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
        $old = Navigation::find($model->id);

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
