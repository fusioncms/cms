<?php

namespace Fusion\Observers;

use Fusion\Contracts\BuilderObserver;
use Fusion\Models\Matrix;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Spatie\Activitylog\Models\Activity;

class MatrixObserver implements BuilderObserver
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
        Schema::create($model->getBuilderTable(), function (Blueprint $table) use ($model) {
            if ($model->type === 'collection') {
                $table->bigIncrements('id');
            }

            $table->unsignedBigInteger('matrix_id');
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('name')->nullable();
            $table->string('slug')->unique()->nullable();
            $table->boolean('status')->default(true);
            $table->timestamp('publish_at')->useCurrent();
            $table->timestamp('expire_at')->nullable();
            $table->float('order')->nullable()->index();
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
        // Fetch our "old" instance
        $old = Matrix::find($model->id);

        // Rename the tables if changed
        if ($old->getBuilderTable() !== $model->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $model->getBuilderTable());

            $oldClass = 'Fusion\\Models\\Collections\\'.Str::studly($old->handle);
            $newClass = 'Fusion\\Models\\Collections\\'.Str::studly($model->handle);

            // Update model classes in the activity log to match the new class name
            Activity::where('subject_type', $oldClass)
                ->update([
                    'subject_type' => $newClass,
                    'properties'   => DB::raw("REPLACE(properties, '".$old->slug."', '".$model->slug."')"),
                ]);
        }

        // Create the ID column if converting from a single to a collection type
        if ($old->type === 'single' and $model->type === 'collection') {
            Schema::table($model->getBuilderTable(), function (Blueprint $table) {
                $table->bigIncrements('id')->first();
            });
        }

        // Drop the ID column if converting from a collection to a single type
        if ($old->type === 'collection' and $model->type === 'single') {
            Schema::table($model->getBuilderTable(), function (Blueprint $table) {
                $table->dropColumn('id');
            });
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
