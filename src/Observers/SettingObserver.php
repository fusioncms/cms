<?php

namespace Fusion\Observers;

use Fusion\Database\Migration;
use Fusion\Database\Schema\Blueprint;
use Fusion\Models\Setting;
use Illuminate\Support\Str;

class SettingObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Constructor.
     *
     * @param \Fusion\Database\Migration $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the setting "created" event.
     *
     * @param \Fusion\Models\Setting $setting
     *
     * @return void
     */
    public function created(Setting $setting)
    {
        $this->migration->schema->create($setting->table, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('setting_id')->index();
            $table->timestamps();
        });
    }

    /**
     * Handle the setting "updating" event.
     *
     * @param \Fusion\Models\Setting $setting
     *
     * @return void
     */
    public function updating(Setting $setting)
    {
        // Fetch our "old" setting instance
        $old = Setting::find($setting->id);

        // Rename the tables if changed
        if ($old->table !== $setting->table) {
            $this->migration->schema->rename($old->table, $setting->table);

            $oldClass = 'Fusion\\Models\\Settings\\'.Str::studly($old->handle);
            $newClass = 'Fusion\\Models\\Settings\\'.Str::studly($setting->handle);
        }
    }

    /**
     * Handle the setting  "deleting" event.
     *
     * @param \Fusion\Models\Setting $setting
     *
     * @return void
     */
    public function deleting(Setting $setting)
    {
        $fieldsets = $setting->fieldsets;

        $setting->detachFieldset();

        // Manually remove fieldsets..
        $fieldsets->each(function ($fieldset) {
            $fieldset->delete();
        });
    }

    /**
     * Handle the setting "deleted" event.
     *
     * @param \Fusion\Models\Setting $setting
     *
     * @return void
     */
    public function deleted(Setting $setting)
    {
        $this->dropTable($setting);
    }

    /**
     * Drop the setting database table.
     *
     * @param \Fusion\Models\Setting $setting
     *
     * @return void
     */
    protected function dropTable(Setting $setting)
    {
        $this->migration->schema->dropIfExists($setting->table);
    }
}
