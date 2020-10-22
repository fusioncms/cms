<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Events\Backups\Backup\HasFinished;
use Fusion\Events\Backups\Backup\HasStarted;
use Fusion\Events\Backups\Backup\WasUpdated;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Models\Backup;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class BackupTest extends TestBase
{
    // ------------------------------------------------
    // VIEW ALL
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_view_all_backups()
    {
        $this
            ->be($this->owner, 'api')
            ->json('GET', '/api/backups')
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_permission_cannot_view_any_backups()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/backups');
    }

    /** @test */
    public function a_guest_cannot_view_any_backups()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('GET', '/api/backups');
    }

    // ------------------------------------------------
    // VIEW
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_view_a_backup()
    {
        $backups = $this->newBackup();

        $this
            ->be($this->owner, 'api')
            ->json('GET', "/api/backups/{$backups->first()->id}")
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_permission_cannot_view_a_backup()
    {
        $this->expectException(AuthorizationException::class);

        $backups = $this->newBackup();

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/backups/{$backups->first()->id}");
    }

    // ------------------------------------------------
    // CREATE
    // ------------------------------------------------

    /** @test */
    public function newly_created_backup_will_be_pushed_to_queue()
    {
        Queue::fake();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/backups')
            ->assertOk();

        Queue::assertPushedOn('default', BackupRun::class);
    }

    /** @test */
    public function custom_events_will_fire_at_beginning_and_end_of_backup()
    {
        Event::fake([
            HasStarted::class,
            HasFinished::class,
        ]);

        $backups = $this->newBackup();

        Event::assertDispatched(HasStarted::class);
        Event::assertDispatched(HasFinished::class);
    }

    /** @test */
    public function newly_created_backup_will_generate_zip_file()
    {
        $backups = $this->newBackup();

        foreach ($backups as $backup) {
            Storage::disk($backup->disk)->assertExists($backup->location);
        }
    }

    /** @test */
    public function newly_created_backups_will_generate_log_file()
    {
        $backups = $this->newBackup();

        foreach ($backups as $backup) {
            Storage::disk($backup->disk)->assertExists($backup->log_path);
        }
    }

    /** @test */
    public function newly_created_backup_will_be_recorded_in_database()
    {
        $name    = 'test-backup';
        $disks   = config('backup.backup.destination.disks');
        $backups = $this->newBackup($name);

        foreach ($disks as $disk) {
            $this->assertDatabaseHas('backups', [
                'name'     => $name,
                'disk'     => $disk,
                'location' => "backups/{$name}.zip",
                'log_path' => "logs/backups/{$name}.log",
            ]);
        }
    }

    /** @test */
    public function a_guest_cannot_not_create_a_backup()
    {
        Queue::fake();

        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/backups', []);

        Queue::assertNotPushed(BackupRun::class);
    }

    /** @test */
    public function a_user_without_permission_cannot_create_new_backups()
    {
        Queue::fake();

        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/backups', []);

        Queue::assertNotPushed(BackupRun::class);
    }

    // ------------------------------------------------
    // UDPATE
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_update_an_existing_backup_name()
    {
        $backups  = $this->newBackup('new-backup', 'public');
        $backupId = $backups->first()->id;

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/backups/{$backupId}", [
                'name' => 'updated-name',
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas('backups', [
            'id'   => $backupId,
            'name' => 'updated-name',
        ]);

        $this->assertDatabaseMissing('backups', [
            'id'   => $backupId,
            'name' => 'new-backup',
        ]);
    }

    /** @test */
    public function custom_event_will_fire_after_update_of_backup()
    {
        Event::fake([WasUpdated::class]);

        $backups = $this->newBackup();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/backups/{$backups->first()->id}", [
                'name' => 'updated-name',
            ]);

        Event::assertDispatched(WasUpdated::class);
    }

    /** @test */
    public function a_user_without_permission_cannot_update_existing_backups()
    {
        $this->expectException(AuthorizationException::class);

        $backups = $this->newBackup('new-backup', 'public');

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/backups/{$backups->first()->id}", []);
    }

    /** @test */
    public function a_guest_cannot_update_existing_backups()
    {
        $this->expectException(AuthenticationException::class);

        $backups = $this->newBackup('new-backup', 'public');

        $this->json('PATCH', "/api/backups/{$backups->first()->id}", []);
    }

    /** @test */
    public function backup_name_and_disk_must_be_unique()
    {
        $backupOne = $this->newBackup('first-backup', 'public')->first();
        $backupTwo = $this->newBackup('second-backup', 'public')->first();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/backups/{$backupOne->id}", [
                'name' => 'second-backup',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'name' => 'The name & disk combination has already been taken.',
            ]);
    }

    // ------------------------------------------------
    // DELETE
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_delete_a_backup()
    {
        list($b1, $b2) = $this->newBackup()->take(2);

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/backups/{$b1->id}")
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_permission_cannot_delete_existing_backups()
    {
        $this->expectException(AuthorizationException::class);

        list($b1, $b2) = $this->newBackup()->take(2);

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/backups/{$b1->id}");
    }

    /** @test */
    public function a_guest_cannot_not_delete_a_backup()
    {
        $this->expectException(AuthenticationException::class);

        list($b1, $b2) = $this->newBackup()->take(2);

        $this->json('DELETE', "/api/backups/{$b1->id}");
    }

    /** @test */
    public function deleted_backup_will_clean_up_backup_zip_file()
    {
        list($b1, $b2) = $this->newBackup()->take(2);

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/backups/{$b1->id}");

        Storage::disk($b1->disk)->assertMissing($b1->location);
        Storage::disk($b2->disk)->assertExists($b2->location);
    }

    /** @test */
    public function deleted_backup_will_clean_up_log_file()
    {
        list($b1, $b2) = $this->newBackup()->take(2);

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/backups/{$b1->id}");

        Storage::disk($b1->disk)->assertMissing($b1->log_path);
        Storage::disk($b2->disk)->assertExists($b2->log_path);
    }

    /** @test */
    public function deleted_backup_will_be_removed_from_database()
    {
        list($b1, $b2) = $this->newBackup()->take(2);

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/backups/{$b1->id}");

        $this->assertDatabaseMissing('backups', ['id' => $b1->id]);
        $this->assertDatabaseHas('backups', ['id' => $b2->id]);
    }

    // ------------------------------------------------
    // BACKUP ZIP
    // ------------------------------------------------

    /** @test */
    public function backup_zip_will_save_env_variables_from_config()
    {
        $backup     = $this->newBackup('test-backup', 'public')->first();
        $zipArchive = new ZipArchive();

        $envFile = 'fusion-dumps/env.json';

        if ($zipArchive->open($backup->fullPath) === true) {
            $contents  = $zipArchive->getFromName($envFile);
            $variables = json_decode($contents, true);

            foreach (config('backup.backup.source.env') as $key) {
                $this->assertEquals($variables[$key], env($key));
            }
        }
    }

    /** @test */
    public function backup_zip_will_save_files_included_in_config()
    {
        $backup     = $this->newBackup('test-backup', 'public')->first();
        $zipArchive = new ZipArchive();

        $file1 = Storage::disk($backup->disk)->path('files/testing-file1.txt');
        $file2 = Storage::disk($backup->disk)->path('files/testing-file2.txt');

        if ($zipArchive->open($backup->fullPath) === true) {
            $this->assertNotFalse($zipArchive->statName(
                ltrim($file1, '/')
            ));

            $this->assertNotFalse($zipArchive->statName(
                ltrim($file2, '/')
            ));
        }
    }

    /** @test */
    public function backup_zip_will_save_database_dumps_in_config()
    {
        $backup     = $this->newBackup('test-backup', 'public')->first();
        $zipArchive = new ZipArchive();

        $dbDump = 'db-dumps/sqlite-sqlite-database.sql';

        if ($zipArchive->open($backup->fullPath) === true) {
            $this->assertNotFalse(
                $zipArchive->statName($dbDump)
            );
        }
    }
}
