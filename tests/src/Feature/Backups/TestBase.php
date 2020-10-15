<?php

namespace Fusion\Tests\Feature\Backups;

use Carbon\Carbon;
use Fusion\Tests\TestCase;
use Fusion\Models\Backup;
use Fusion\Jobs\Backups\Backup\BackupRun;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;

class TestBase extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // Disable notifications..
        Notification::fake();

        // --
        Storage::fake('public');
        Storage::fake('temp');

        // Establish fake db connection..
        config(['backup.backup.source.databases' => ['sqlite']]);

        // Establish backup `backup-temp`..
        config([
            'backup.backup.temporary_directory' =>
                Storage::disk('public')->path('backup-temp')
        ]);

        // Establish backup destination disks
        config(['backup.backup.destination.disks' => ['public','temp']]);

        // Establish backup source env variables
        config(['backup.backup.source.env' => ['APP_KEY']]);

        // Establish included files to backup..
        config(['backup.backup.source.files.include' => [
            Storage::disk('public')->path('files'),
        ]]);

        // Add multiple files..
        Storage::disk('public')->put('files/testing-file1.txt', 'dummy content');
        Storage::disk('public')->put('files/testing-file2.txt', 'dummy content');
    }

    /**
     * Run backup, return backup(s).
     * [Helper].
     *
     * @param  string $name
     * @param  string $disk
     * 
     * @return Collection
     */
    protected function newBackup($name = null, $disk = null)
    {
        $name = $name ?? Carbon::now()->format(Backup::FILENAME_FORMAT);

        (new BackupRun($name, $disk))->handle();

        return Backup::where(['name' => $name])->get();
    }
}
