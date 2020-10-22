<?php

namespace Fusion\Events\Backups\Backup;

class HasStarted
{
    /**
     * @var string
     */
    public $filename;

    /**
     * @var array
     */
    public $disks;

    /**
     * Create new instance.
     *
     * @param string $filename
     * @param array  $disks
     */
    public function __construct($filename, array $disks = [])
    {
        $this->filename = $filename;
        $this->disks    = $disks;
    }
}
