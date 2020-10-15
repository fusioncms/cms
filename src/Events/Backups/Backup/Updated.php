<?php

namespace Fusion\Events\Backups\Backup;

use Fusion\Models\Backup;

class Updated
{
    /**
     * @var \Fusion\Models\Backup
     */
    public $backup;

    /**
     * Create new instance.
     *
     * @param \Fusion\Models\Backup $backup
     * @param array  $disks
     */
    public function __construct(Backup $backup)
    {
    	$this->backup = $backup;
    }
}
