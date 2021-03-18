<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Channel;
use Fusion\Models\Notification;
use Illuminate\Support\Arr;
use Symfony\Component\Finder\Finder;

class SyncNotifications
{
    /**
     * Supported Channels.
     *
     * @var array
     */
    protected $channels = [
        'mail',
    ];

    /**
     * Supported Notifications.
     *
     * @var array
     */
    protected $notifications = [];

    /**
     * Path to notifications.
     *
     * @var string
     */
    protected $path;

    /**
     * Construct new instance.
     */
    public function __construct()
    {
        $this->path          = fusion_path('notifications');
        $this->notifications = $this->fetchNotifications();
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $this->syncChannels();
        $this->syncNotifications();
    }

    /**
     * Sync available channels in storage.
     *
     * @return void
     */
    public function syncChannels()
    {
        //TODO: allow for extension

        foreach ($this->channels as $channel) {
            Channel::firstOrCreate(
                ['handle' => $channel],
                ['name' => ucwords($channel)]
            );
        }
    }

    /**
     * Sync available notifications in storage.
     *
     * @return void
     */
    public function syncNotifications()
    {
        $existing = Notification::all()->pluck('id', 'id');

        foreach ($this->notifications as $group => $notifications) {
            foreach ($notifications as $name => $namespace) {
                $notification = Notification::updateOrCreate([
                    'handle' => str_handle($name),
                ], [
                    'name'      => $name,
                    'group'     => $group,
                    'namespace' => $namespace,
                ]);

                // Unset for later cleanup..
                unset($existing[$notification->id]);
            }
        }

        // Clean up removed notifications..
        foreach ($existing as $id) {
            Notification::findOrFail($id)->delete();
        }
    }

    /**
     * Fetch all notification files.
     *
     * @return array
     */
    protected function fetchNotifications()
    {
        // Include FusionCMS notifications..
        $paths = [$this->path];

        // Include Addon notifications..
        app('addons.manifest')->getAddons()->each(function ($addon) use (&$paths) {
            if (file_exists($addon->getPath('notifications'))) {
                array_push($paths, $addon->getPath('notifications'));
            }
        });

        $files  = Finder::create()->files()->name('*.php')->in($paths);
        $files  = $files->sortByModifiedTime()->reverseSorting();
        $merged = [];

        foreach ($files as $file) {
            $merged = Arr::mergeDeep($merged, require $file->getRealPath());
        }

        return $merged;
    }
}
