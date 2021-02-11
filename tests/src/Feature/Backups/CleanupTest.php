<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Jobs\Backups\BackupSync;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Event;
use Spatie\Backup\Events\CleanupHasFailed;
use Spatie\Backup\Events\CleanupWasSuccessful;

class CleanupTest extends TestBase
{
    /** @test */
    public function successful_cleanup_will_run_sync_command()
    {
        Bus::fake([
            BackupSync::class
        ]);

        $this->artisan('backup:clean');

        Bus::assertDispatched(BackupSync::class);
    }

    /** @test */
    public function successful_cleanup_will_sync_database_with_physical_backups()
    {
        $backups = $this->newBackup('new-backup', 'public');
        $backup  = $backups->first();

        $this->artisan('backup:clean');

        $this->assertDatabaseMissing('backups', [
            'id'   => $backup->id,
            'name' => 'new-backup',
            'disk' => 'public'
        ]);
    }

    /** @test */
    public function successful_cleanup_will_fire_event()
    {
        Event::fake([
            CleanupWasSuccessful::class,
        ]);

        $this->artisan('backup:clean');

        Event::assertDispatched(CleanupWasSuccessful::class);
    }

    /** @test */
    public function failed_cleanup_will_fire_event()
    {
        Event::fake([
            CleanupHasFailed::class,
        ]);

        // invalidate..
        config(['backup.backup.destination.disks' => ['fake-disk']]);

        $this->artisan('backup:clean');

        Event::assertDispatched(CleanupHasFailed::class);
    }

    /** @test */
    public function successful_cleanup_will_notify_user_with_valid_mail_settings()
    {
        $this->artisan('backup:clean');

        \Notification::assertSentTo(
            app(config('backup.notifications.notifiable')),
            'Spatie\Backup\Notifications\Notifications\CleanupWasSuccessful'
        );
    }

    /** @test */
    public function failed_cleanup_will_notify_user_with_valid_mail_settings()
    {
        // invalidate..
        config(['backup.backup.destination.disks' => ['fake-disk']]);

        $this->artisan('backup:clean');

        \Notification::assertSentTo(
            app(config('backup.notifications.notifiable')),
            'Spatie\Backup\Notifications\Notifications\CleanupHasFailed'
        );
    }
}
