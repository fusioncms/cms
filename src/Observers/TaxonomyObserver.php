<?php

namespace Fusion\Observers;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Fusion\Models\Taxonomy;

class TaxonomyObserver
{
    /**
     * Handle the taxonomy "created" event.
     *
     * @param \Fusion\Models\Taxonomy $taxonomy
     *
     * @return void
     */
    public function created(Taxonomy $taxonomy)
    {
        Schema::create($taxonomy->builderName(), function (Blueprint $table) {
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
     * Handle the taxonomy "updating" event.
     *
     * @param \Fusion\Models\Taxonomy $taxonomy
     *
     * @return void
     */
    public function updating(Taxonomy $taxonomy)
    {
        // Fetch our "old" taxonomy instance
        $old = Taxonomy::find($taxonomy->id);

        // Rename the tables if changed
        if ($old->builderName() !== $taxonomy->builderName()) {
            Schema::rename($old->builderName(), $taxonomy->builderName());
        }
    }

    /**
     * Handle the taxonomy "deleted" event.
     *
     * @param \Fusion\Models\Taxonomy $taxonomy
     *
     * @return void
     */
    public function deleted(Taxonomy $taxonomy)
    {
        Schema::dropIfExists($taxonomy->builderName());
    }
}
