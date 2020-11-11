<?php

namespace Fusion\Observers;

use Illuminate\Database\Migrations\Migration;
use Fusion\Database\Schema\Blueprint;
use Fusion\Models\Taxonomy;

class TaxonomyObserver
{
    /**
     * @var \Illuminate\Database\Migrations\Migration
     */
    protected $migration;

    /**
     * Create a new TaxonomyObserver instance.
     *
     * @param \Illuminate\Database\Migrations\Migration $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the taxonomy "created" event.
     *
     * @param \Fusion\Models\Taxonomy $taxonomy
     *
     * @return void
     */
    public function created(Taxonomy $taxonomy)
    {
        $this->migration->schema->create($taxonomy->table, function (Blueprint $table) {
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
        if ($old->table !== $taxonomy->table) {
            $this->migration->schema->rename($old->table, $taxonomy->table);
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
        $this->migration->schema->dropIfExists($taxonomy->table);
    }
}
