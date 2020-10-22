<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Events\Backups\Restore;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Spatie\Backup\Tasks\Backup\Manifest;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;
use Throwable;

class RestoreDatabase
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
     * @throws Exception
     *
     * @return void
     */
    public function handle()
    {
        if (!$dbDumpPath = $this->fetchDBDump()) {
            $this->hasFailed(
                new Exception('Failed to locate database dump from backup.')
            );
        }

        try {
            switch (config('database.default')) {
                case 'mysql':
                    $this->restoreFromMySqlFile($dbDumpPath);
                    break;
                case 'sqlite':
                    $this->restoreFromSqliteFile($dbDumpPath);
                    break;
                default:
                    $this->hasFailed(
                        new Exception('Unsupported database connection: '.config('database.default'))
                    );
            }
        } catch (Exception $exception) {
            $this->hasFailed(
                new Exception('Unable to restore database dump from backup.')
            );
        }

        event(new Restore\DatabaseSuccessful($this->backup));
    }

    /**
     * Fetch db-dump recorded in manifest file.
     *
     * @return string|bool
     */
    private function fetchDBDump()
    {
        foreach ($this->manifest->files() as $file) {
            if (pathinfo($file, PATHINFO_EXTENSION) == 'sql') {
                return $this->tempDirectory->path($file);
            }
        }

        return false;
    }

    /**
     * Run command to restore mysql file.
     *
     * @throws ProcessFailedException
     *
     * @return void
     */
    private function restoreFromMySqlFile($dbDumpPath)
    {
        $dbUser = config('database.connections.mysql.username');
        $dbPass = config('database.connections.mysql.password');
        $dbHost = config('database.connections.mysql.host');
        $dbName = config('database.connections.mysql.database');

        $tempFile = tmpfile();
        fwrite($tempFile, implode(PHP_EOL, [
            '[client]',
            "user = '{$dbUser}'",
            "password = '{$dbPass}'",
            "host = '{$dbHost}'",
        ]));

        $command = sprintf(
            'mysql --defaults-extra-file="%s" %s < %s',
            stream_get_meta_data($tempFile)['uri'],
            escapeshellarg($dbName),
            escapeshellarg($dbDumpPath)
        );

        $process = Process::fromShellCommandline($command);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
    }

    /**
     * Run command to restore sqlite file.
     *
     * @throws ProcessFailedException
     *
     * @return void
     */
    private function restoreFromSqliteFile($dbDumpPath)
    {
        $dbName  = config('database.connections.sqlite.database');
        $command = "sqlite3 {$dbName} < {$dbDumpPath}";

        $process = Process::fromShellCommandline($command);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
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
        event(new Restore\DatabaseFailed($this->backup, $exception));

        throw $exception;
    }
}
