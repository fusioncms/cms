<?php

namespace Fusion\Observers;

use Fusion\Models\Setting;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

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
        Schema::create($setting->getBuilderTable(), function (Blueprint $table) {
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
        $old = Setting::find($setting->id);

        if ($old->getBuilderTable() !== $setting->getBuilderTable()) {
            Schema::rename($old->getBuilderTable(), $setting->getBuilderTable());

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
        Schema::dropIfExists($setting->getBuilderTable());
    }
}
