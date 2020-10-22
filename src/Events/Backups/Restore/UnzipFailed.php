<?php

namespace Fusion\Events\Backups\Restore;

use Fusion\Models\Backup;
use Throwable;

class UnzipFailed
{
    /**
     * @var \Fusion\Models\Backup
     */
    public $backup;

    /**
     * @var \Throwable
     */
    public $exception;

    /**
     * Create new instance.
     *
     * @param \Fusion\Models\Backup  $backup
     * @param \Throwable             $exception
     */
    public function __construct(Backup $backup, Throwable $exception)
    {
        $this->backup    = $backup;
        $this->exception = $exception;
    }
}
