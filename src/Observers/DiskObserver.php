<?php

namespace Fusion\Observers;

use Fusion\Models\Disk;

class DiskObserver
{
    /**
     * Handle the "created" event.
     *
     * @param \Fusion\Models\Disk $disk
     *
     * @return void
     */
    public function created(Disk $disk)
    {
        $this->addFileSystemConfiguration($disk);
    }

    /**
     * Handle the "updating" event.
     *
     * @param \Fusion\Models\Disk $disk
     *
     * @return void
     */
    public function updating(Disk $disk)
    {
        $old = Disk::find($disk->id);

        if ($old->handle != $disk->handle) {
            $this->removeFileSystemConfiguration($old);
        }

        $this->addFileSystemConfiguration($disk);
    }

    /**
     * Handle the "deleted" event.
     *
     * @param \Fusion\Models\Disk $disk
     *
     * @return void
     */
    public function deleted(Disk $disk)
    {
        $this->removeFileSystemConfiguration($disk);
    }

    /**
     * Add FileSystem Disk configuration..
     * [Helper]
     *
     * @param \Fusion\Models\Disk $disk
     *
     * @return void
     */
    private function addFileSystemConfiguration(Disk $disk)
    {
        $disks = config('filesystems.disks');

        $disks[$disk->handle] = $disk->configurations->toArray() + ['driver' => $disk->driver];
        
        config(['filesystems.disks' => $disks]);
    }

    /**
     * Remove FileSystem Disk configuration..
     * [Helper]
     *
     * @param string $handle
     *
     * @return void
     */
    private function removeFileSystemConfiguration(Disk $disk)
    {
        $disks = config('filesystems.disks');

        unset($disks[$disk->handle]);

        config(['filesystems.disks' => $disks]);
    }
}
