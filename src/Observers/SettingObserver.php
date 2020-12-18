<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Fusion\Models\Setting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class SettingObserver implements BuilderObserver
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
            $table->unsignedBigInteger('setting_id')->index();
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
        $old = Setting::find($model->id);

        if ($old->getBuilderTable() !== $model->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $model->getBuilderTable());

            $oldClass = 'Fusion\\Models\\Settings\\'.Str::studly($old->handle);
            $newClass = 'Fusion\\Models\\Settings\\'.Str::studly($model->handle);
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
