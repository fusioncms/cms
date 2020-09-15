<?php

namespace Fusion\Observers;

use Fusion\Database\Schema\Blueprint;
use Fusion\Database\Migration;
use Fusion\Models\Navigation;
use Illuminate\Support\Str;

class NavigationObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Create a new NavigationObserver instance.
     *
     * @param \Fusion\Database\Migration $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the navigation "created" event.
     *
     * @param \Fusion\Models\Navigation $navigation
     *
     * @return void
     */
    public function created(Navigation $navigation)
    {
        $this->migration->schema->create($navigation->table, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('navigation_id')->index();
            $table->unsignedBigInteger('parent_id')->index()->default(0);
            $table->string('name');
            $table->string('url')->nullable();
            $table->boolean('new_window')->default(false);
            $table->float('order', 12, 6)->nullable()->index();

            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Handle the navigation "updating" event.
     *
     * @param \Fusion\Models\Navigation $navigation
     *
     * @return void
     */
    public function updating(Navigation $navigation)
    {
        // Fetch our "old" navigation instance
        $old = Navigation::find($navigation->id);

        // Update table if changed
        if ($old->table !== $navigation->table) {
            $this->migration->schema->rename($old->table, $navigation->table);
        }
    }

    /**
     * Handle the navigation "deleted" event.
     *
     * @param \Fusion\Models\Navigation $navigation
     *
     * @return void
     */
    public function deleted(Navigation $navigation)
    {
        $this->migration->schema->dropIfExists($navigation->table);
    }
}
