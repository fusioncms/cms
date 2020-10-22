<?php

namespace Fusion\Events\Backups\Restore;

use Fusion\Models\Backup;

class DatabaseSuccessful
{
    /**
     * @var \Fusion\Models\Backup
     */
    public $backup;

    /**
     * Create new instance.
     *
     * @param \Fusion\Models\Backup $backup
     */
    public function __construct(Backup $backup)
    {
        $this->backup = $backup;
    }
}
