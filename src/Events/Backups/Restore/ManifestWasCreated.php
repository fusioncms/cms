<?php

namespace Fusion\Events\Backups\Restore;

use Fusion\Models\Backup;
use Spatie\Backup\Tasks\Backup\Manifest;

class ManifestWasCreated
{
	/**
     * @var \Fusion\Models\Backup
     */
    public $backup;

    /**
     * @var Manifest
     */
    public $manifest;

    /**
     * Create new instance.
     *
     * @param \Fusion\Models\Backup                $backup
     * @param \Spatie\Backup\Tasks\Backup\Manifest $manifest
     */
    public function __construct(Backup $backup, Manifest $manifest)
    {
    	$this->backup   = $backup;
        $this->manifest = $manifest;
    }
}
