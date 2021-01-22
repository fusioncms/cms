<?php

namespace Fusion\Console\Actions;

use Fusion\Models\{Channel,Notification};
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
        'database'
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
     * 
     */
    public function __construct()
    {
        $this->path = fusion_path('notifications');
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

        foreach ($this->notifications as $name => $namespace) {
            $notification = Notification::updateOrCreate([
                'handle' => str_handle($name),
            ],[
                'name'      => $name,
                'namespace' => $namespace,
            ]);

            // Unset for later cleanup..
            unset($existing[$notification->id]);
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
        $files  = Finder::create()->files()->name('*.php')->in($this->path);
        $files  = $files->sortByModifiedTime()->reverseSorting();
        $merged = [];

        foreach ($files as $file) {
            $merged = Arr::mergeDeep($merged, require $file->getRealPath());
        }

        return $merged;
    }
}
