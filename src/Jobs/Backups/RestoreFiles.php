<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Events\Backups\FileRestoreFailed;
use Fusion\Events\Backups\FileRestoreSuccessful;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Spatie\Backup\Tasks\Backup\Manifest;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Symfony\Component\Process\Process;

class RestoreFiles
{
    use Dispatchable;
    use Queueable;

    /**
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * @var Manifest
     */
    protected $manifest;

    /**
     * Constructor.
     *
     * @param Backup $backup
     */
    public function __construct(TemporaryDirectory $tempDirectory)
    {
        $this->tempDirectory = $tempDirectory;
        $this->manifest      = new Manifest($tempDirectory->path('manifest.txt'));
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $files = $this->fetchFilesToRestore();

        try {
            $this->cleanupExistingFiles();

            $this->restoreBackupFiles($files);

            event(new FileRestoreSuccessful($files));
        } catch (Exception $exception) {
            event(new FileRestoreFailed($exception, $files));

            Log::error('There was an error restoring files in backup: '.$exception->getMessage(), (array) $exception->getTrace()[0]);
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
     * Fetch all files recorded in manifest file.
     *
     * @return array
     */
    private function fetchFilesToRestore()
    {
        $files = [];

        foreach ($this->manifest->files() as $file) {
            if (Str::startsWith($file, 'db-dumps')) {
                // continue..
            } elseif (Str::startsWith($file, 'fusion-dumps')) {
                // continue..
            } else {
                $files[] = [
                    'path'   => $this->tempDirectory->path($file),
                    'target' => '/'.ltrim($file,'/'),
                ];
            }
        }

        return $files;
    }

    /**
     * Clear included files before restoring.
     * 
     * @return void
     */
    private function cleanupExistingFiles()
    {
        foreach (config('backup.backup.source.files.include') as $path) {
            if (File::isDirectory($path)) {
                File::cleanDirectory($path);
            } else {
                File::delete($path);
            }
        }
    }

    /**
     * Restore backed up files from manifest.
     *
     * @param array $files
     * 
     * @return void
     */
    private function restoreBackupFiles(array $files)
    {
        foreach ($files as $file) {
            File::copy($file['path'], $file['target']);
        }
    }
}
