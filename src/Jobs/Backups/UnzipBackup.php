<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Events\Backups\Restore;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Spatie\Backup\Tasks\Backup\Manifest;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Throwable;
use ZipArchive;

class UnzipBackup
{
    use Dispatchable;
    use Queueable;

    /**
     * @var \Fusion\Models\Backup
     */
    protected $backup;

    /**
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * @var ZipArchive
     */
    protected $zipFile;

    /**
     * Constructor.
     *
     * @param \Fusion\Models\Backup                         $backup
     * @param \Spatie\TemporaryDirectory\TemporaryDirectory $tempDirectory
     */
    public function __construct(Backup $backup, TemporaryDirectory $tempDirectory)
    {
        $this->backup        = $backup;
        $this->tempDirectory = $tempDirectory;
        $this->zipFile       = new ZipArchive();
    }

    /**
     * Execute the job.
     *
     * @throws Exception
     *
     * @return void
     */
    public function handle()
    {
        if ($this->zipFile->open($this->backup->fullPath) === true) {

            // Create restoration manifest..
            $manifest = $this->createRestorationManifest();

            // Extract files from zip to temp folder..
            $this->zipFile->extractTo($this->tempDirectory->path());
            $this->zipFile->close();

            event(new Restore\UnzipSuccessful($this->backup));
        } else {
            $this->hasFailed(
                new Exception('Unable to locate and unzip backup file.')
            );
        }
    }

    /**
     * Create restoration manifest.
     *
     * @return Manifest
     */
    private function createRestorationManifest(): Manifest
    {
        $manifest = Manifest::create($this->tempDirectory->path('manifest.txt'))
            ->addFiles($this->filesToRestore());

        event(new Restore\ManifestWasCreated($this->backup, $manifest));

        return $manifest;
    }

    /**
     * Return listing of files within the zip archive.
     *
     * @return array
     */
    private function filesToRestore(): array
    {
        $files = [];

        for ($i = 0; $i < $this->zipFile->numFiles; $i++) {
            $files[] = $this->zipFile->getNameIndex($i);
        }

        return $files;
    }

    /**
     * Handle failed case.
     *
     * @param \Throwable $exception
     *
     * @return void
     */
    private function hasFailed(Throwable $exception)
    {
        event(new Restore\UnzipFailed($this->backup, $exception));

        throw $exception;
    }
}
