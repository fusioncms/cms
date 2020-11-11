<?php

namespace Fusion\Observers;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Fusion\Models\Setting;

class SettingObserver
{
    /**
     * Handle the setting "created" event.
     *
     * @param \Fusion\Models\Setting $setting
     *
     * @return void
     */
    public function created(Setting $setting)
    {
        Schema::create($setting->table, function (Blueprint $table) {
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
            Schema::rename($old->table, $setting->table);

            $oldClass = 'Fusion\\Models\\Settings\\'.Str::studly($old->handle);
            $newClass = 'Fusion\\Models\\Settings\\'.Str::studly($setting->handle);
        }
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
        Schema::dropIfExists($setting->table);
    }
}
