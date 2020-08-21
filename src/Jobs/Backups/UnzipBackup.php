<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Events\Backups\BackupExtractionFailed;
use Fusion\Events\Backups\BackupExtractionSuccessful;
use Fusion\Events\Backups\RestoreManifestWasCreated;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Spatie\Backup\Tasks\Backup\Manifest;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use ZipArchive;

class UnzipBackup
{
    use Dispatchable;
    use Queueable;

    /**
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * @var string
     */
    protected $backupPath;

    /**
     * @var ZipArchive
     */
    protected $zipFile;

    /**
     * Constructor.
     *
     * @param TemporaryDirectory $tempDirectory
     * @param string             $backupPath
     */
    public function __construct(TemporaryDirectory $tempDirectory, string $backupPath)
    {
        $this->tempDirectory = $tempDirectory;
        $this->backupPath    = $backupPath;
        $this->zipFile       = new ZipArchive();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            if ($this->zipFile->open($this->backupPath) === true) {
                // Create restoration manifest..
                $this->createRestorationManifest();

                // Extract files from zip to temp folder..
                $this->zipFile->extractTo($this->tempDirectory->path());
                $this->zipFile->close();

                event(new BackupExtractionSuccessful($this->tempDirectory->path()));
            } else {
                throw new Exception('Unable to locate and unzip backup file.');
            }
        } catch (Exception $exception) {
            event(new BackupExtractionFailed($exception, $this->tempDirectory->path()));

            Log::error('There was an error extracting the backup: '.$exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }

    /**
     * The job failed to process.
     *
     * @param Exception $exception
     *
     * @return void
     */
    public function failed(Exception $exception)
    {
        Log::error('There was an error trying to restore from a backup: ', $exception->getMessage(), (array) $exception->getTrace()[0]);
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

        event(new RestoreManifestWasCreated($manifest));

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
}
