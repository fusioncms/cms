<?php

namespace Fusion\Events\Backups\Restore;

use Spatie\Backup\Tasks\Backup\Manifest;

class ManifestWasCreated
{
    /**
     * @var Manifest
     */
    public $manifest;

    public function __construct(Manifest $manifest)
    {
        $this->manifest = $manifest;
    }
}
