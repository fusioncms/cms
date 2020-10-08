<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Tests\TestCase;
use Fusion\Models\Backup;
use Fusion\Jobs\Backups\BackupRun;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Notification;
use Spatie\Backup\Events\BackupWasSuccessful;
use Spatie\Backup\Events\CleanupWasSuccessful;

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
                Storage::disk('public')->path('app/backup-temp')
        ]);

        // Establish backup destination disks
        config(['backup.backup.destination.disks' => ['public']]);

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
     * Run backup, return backup.
     * [Helper].
     *
     * @return void
     */
    protected function newBackup()
    {
        (new BackupRun())->handle();

        return Backup::latest('id')->first();
    }
}