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
        'Fusion\Events\FieldsetAttached' => [
            'Fusion\Listeners\WhenFieldsetIsAttached',
        ],

        'Fusion\Events\FieldsetDetached' => [
            'Fusion\Listeners\WhenFieldsetIsDetached',
        ],

        'Fusion\Events\FieldsetReplaced' => [
            'Fusion\Listeners\WhenFieldsetIsReplaced',
        ],
    ];

    protected $subscribe = [
        'Fusion\Listeners\UserEventSubscriber',
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        \Fusion\Models\Form::observe(\Fusion\Observers\FormObserver::class);
        \Fusion\Models\Field::observe(\Fusion\Observers\FieldObserver::class);
        \Fusion\Models\Matrix::observe(\Fusion\Observers\MatrixObserver::class);
        \Fusion\Models\Section::observe(\Fusion\Observers\SectionObserver::class);
        \Fusion\Models\Setting::observe(\Fusion\Observers\SettingObserver::class);
        \Fusion\Models\Fieldset::observe(\Fusion\Observers\FieldsetObserver::class);
        \Fusion\Models\Taxonomy::observe(\Fusion\Observers\TaxonomyObserver::class);
        \Fusion\Models\Extension::observe(\Fusion\Observers\ExtensionObserver::class);
        \Fusion\Models\Navigation::observe(\Fusion\Observers\NavigationObserver::class);
        \Fusion\Models\Replicator::observe(\Fusion\Observers\ReplicatorObserver::class);
    }
}
