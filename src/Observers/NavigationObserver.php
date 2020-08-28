<?php

namespace Fusion\Observers;

use Fusion\Database\Migration;
use Fusion\Database\Schema\Blueprint;
use Fusion\Models\Fieldset;
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

        $this->createFieldset($navigation);
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

        $this->updateFieldset($old, $navigation);
    }

    /**
     * Handle the navigation "deleting" event.
     *
     * @param \Fusion\Models\Navigation $navigation
     *
     * @return void
     */
    public function deleting(Navigation $navigation)
    {
        $this->deleteFieldset($navigation);
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

    /**
     * Automatically create a fieldset for our navigation.
     *
     * @param Navigation $navigation
     */
    protected function createFieldset($navigation)
    {
        $navigation::unsetEventDispatcher();

        $fieldsetName = 'Navigation: '.$navigation->name;

        // Create the fieldset first
        $fieldset = fusion()->post('fieldsets', [
            'name'   => $fieldsetName,
            'handle' => Str::slug($fieldsetName, '_'),
        ]);

        // Resolve the model instance
        $fieldset = Fieldset::find($fieldset->data->id);

        // Then create the sections/fields
        $sections = fusion()->post('fieldsets/'.$fieldset->id.'/sections', $fieldset->toArray());

        $navigation->attachFieldset($fieldset);
        $navigation->save();
    }

    /**
     * Automatically update the fieldset for our navigation.
     *
     * @param Navigation $navigation
     */
    protected function updateFieldset($old, $new)
    {
        $fieldset = $old->fieldsets()->first();

        if ($old->name !== $new->name) {
            $fieldsetName = 'Navigation: '.$new->name;

            $fieldset->name   = $fieldsetName;
            $fieldset->handle = Str::slug($fieldsetName, '_');
            $fieldset->save();
        }
    }

    /**
     * Automatically delete the fieldset from our navigation.
     *
     * @param Navigation $navigation
     */
    protected function deleteFieldset($navigation)
    {
        $fieldset = $navigation->fieldsets()->first();

        $fieldset->delete();
    }
}
