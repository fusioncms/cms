<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Events\Backups\Restore;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Spatie\Backup\Tasks\Backup\Manifest;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Throwable;

class RestoreFiles
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
     * @var Manifest
     */
    protected $manifest;

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
        $this->manifest      = new Manifest($tempDirectory->path('manifest.txt'));
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $files = $this->fetchFilesToRestore();

            $this->cleanupExistingFiles();

            $this->restoreBackupFiles($files);
        } catch (Exception $exception) {
            $this->hasFailed($exception);
        }

        event(new Restore\FileSuccessful($this->backup));
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
                    'target' => '/'.ltrim($file, '/'),
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

    /**
     * Handle failed case.
     *
     * @param \Throwable $exception
     *
     * @return void
     */
    private function hasFailed(Throwable $exception)
    {
        event(new Restore\FileFailed($this->backup, $exception));

        throw $exception;
    }
}
