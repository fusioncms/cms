<?php

namespace Fusion\Events\Backups\Restore;

class UnzipSuccessful
{
    /**
     * @var string
     */
    public $extractionPath;

    public function __construct(string $extractionPath)
    {
        $this->extractionPath = $extractionPath;
    }
}
