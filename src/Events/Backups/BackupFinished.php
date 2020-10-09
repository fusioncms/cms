<?php

namespace Fusion\Events\Backups;

class BackupFinished
{
    /**
     * @var string|null
     */
    public $filename;

    /**
     * @var string|null
     */
    public $disks;

    public function __construct($filename = null, $disks = null)
    {
    	$this->filename = $filename;
        $this->disks    = $disks;
    }
}
