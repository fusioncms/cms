<?php

namespace Fusion\Events\Backups\Restore;

class FileRestoreSuccessful
{
    /**
     * @var array
     */
    public $filesToCopy;

    public function __construct(array $filesToCopy)
    {
        $this->filesToCopy = $filesToCopy;
    }
}
