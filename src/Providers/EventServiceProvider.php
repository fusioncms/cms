<?php

namespace Fusion\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        //
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        'Fusion\Listeners\UserEventSubscriber',
        'Fusion\Listeners\BackupEventSubscriber',
        'Fusion\Listeners\RestoreEventSubscriber',
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        \Fusion\Models\Backup::observe(\Fusion\Observers\BackupObserver::class);
        \Fusion\Models\Disk::observe(\Fusion\Observers\DiskObserver::class);
        \Fusion\Models\Form::observe(\Fusion\Observers\FormObserver::class);
        \Fusion\Models\Field::observe(\Fusion\Observers\FieldObserver::class);
        \Fusion\Models\Fieldset::observe(\Fusion\Observers\FieldsetObserver::class);
        \Fusion\Models\Matrix::observe(\Fusion\Observers\MatrixObserver::class);
        \Fusion\Models\Navigation::observe(\Fusion\Observers\NavigationObserver::class);
        \Fusion\Models\Replicator::observe(\Fusion\Observers\ReplicatorObserver::class);
        \Fusion\Models\Section::observe(\Fusion\Observers\SectionObserver::class);
        \Fusion\Models\Setting::observe(\Fusion\Observers\SettingObserver::class);
        \Fusion\Models\Taxonomy::observe(\Fusion\Observers\TaxonomyObserver::class);
    }
}
