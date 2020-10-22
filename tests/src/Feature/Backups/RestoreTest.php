<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Events\Backups\Restore;
use Fusion\Jobs\Backups\RestoreFromBackup;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Models\Backup;
use Fusion\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RestoreTest extends TestBase
{
    // ------------------------------------------------
    // RESTORE
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_restore_from_existing_backups()
    {
        $backup = $this->newBackup()->first();

        // ----
        Bus::fake();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/backups/restore/{$backup->id}")
            ->assertStatus(200);

        Bus::assertDispatched(RestoreFromBackup::class);
    }

    /** @test */
    public function a_user_without_permission_cannot_restore_from_existing_backups()
    {
        $this->expectException(AuthorizationException::class);

        $backup = $this->newBackup()->first();

        // ----
        Bus::fake();

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/backups/restore/{$backup->id}");

        Bus::assertNotDispatched(RestoreFromBackup::class);
    }

    /** @test */
    public function a_guest_cannot_restore_from_existing_backups()
    {
        $this->expectException(AuthenticationException::class);

        $backup = $this->newBackup()->first();

        // ----
        Bus::fake();

        $this->json('POST', "/api/backups/restore/{$backup->id}");
        
        Bus::assertNotDispatched(RestoreFromBackup::class);
    }

    /** @test */
    public function a_backup_can_be_requested_before_restoring_an_existing_backup()
    {
        $backup = $this->newBackup()->first();

        // ----
        Bus::fake();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/backups/restore/{$backup->id}", ['saveBackup' => true])
            ->assertStatus(200);

        Bus::assertDispatched(BackupRun::class);
    }

    // ------------------------------------------------
    // EVENTS
    // ------------------------------------------------

    /** @test */
    public function custom_events_will_fire_at_beginning_and_end_of_restore()
    {
        $backup = $this->newBackup()->first();

        // ----
        Event::fake([
            Restore\HasStarted::class,
            Restore\WasSuccessful::class,
        ]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(Restore\HasStarted::class);
        Event::assertDispatched(Restore\WasSuccessful::class);
    }

    /** @test */
    public function custom_events_will_fire_when_restore_successful()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();

        //--
        Event::fake([
            Restore\UnzipSuccessful::class,
            Restore\ManifestWasCreated::class,
            Restore\DatabaseSuccessful::class,
            Restore\FileSuccessful::class,
            Restore\WasSuccessful::class
        ]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(Restore\DatabaseSuccessful::class);
        Event::assertDispatched(Restore\ManifestWasCreated::class);
        Event::assertDispatched(Restore\DatabaseSuccessful::class);
        Event::assertDispatched(Restore\FileSuccessful::class);
        Event::assertDispatched(Restore\WasSuccessful::class);
    }

    /** @test */
    public function custom_events_will_fire_when_restore_fails()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();

        // invalidate
        app()->useEnvironmentPath('fake-path');

        //--
        Event::fake([
            Restore\HasFailed::class,
            Restore\RestoreFiles::class
        ]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(function(Restore\HasFailed $event) {
            return $event->exception->getMessage() === 'File does not exist at path fake-path/.env.testing.';
        });

        // assert process aborted..
        Event::assertNotDispatched(Restore\RestoreFiles::class);
    }

    /** @test */
    public function custom_events_will_fire_when_unzipping_backup_fails()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();
        
        // invalidate
        $backup->update(['location' => 'backups/invalid-backup.zip']);

        //--
        Event::fake([
            Restore\UnzipFailed::class,
            Restore\RestoreEnvVariables::class
        ]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(function(Restore\UnzipFailed $event) {
            return $event->exception->getMessage() === 'Unable to locate and unzip backup file.';
        });

        // assert process aborted..
        Event::assertNotDispatched(Restore\RestoreEnvVariables::class);
    }

    /** @test */
    public function custom_events_will_fire_when_database_restore_fails()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();
        
        // invalidate
        config(['database.default' => 'mysql']);

        //--
        Event::fake([Restore\DatabaseFailed::class]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(function (Restore\DatabaseFailed $event) {
            return $event->exception->getMessage() === 'Unable to restore database dump from backup.';
        });
    }

    // ------------------------------------------------
    // LOGS
    // ------------------------------------------------

    /** @test */
    public function backup_log_will_be_updated_when_file_restore_fails()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();
        
        // invalidate
        config(['backup.backup.source.files.include' => null]);

        //--
        RestoreFromBackup::dispatchNow($backup);

        // assert log..
        $this->assertStringContainsString('Filesystem restore failed.',
            Storage::disk($backup->disk)->get($backup->log_path));
    }

    /** @test */
    public function backup_log_will_be_updated_when_database_restore_fails()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();
        
        // invalidate
        config(['database.default' => 'mysql']);

        //--
        RestoreFromBackup::dispatchNow($backup);

        // assert log..
        $this->assertStringContainsString('Database restore failed.',
            Storage::disk($backup->disk)->get($backup->log_path));
    }

    // ------------------------------------------------
    // PROCESS
    // ------------------------------------------------

    /** @test */
    public function restored_backup_will_recover_any_altered_files()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();

        // Alter some files..
        Storage::disk('public')->append('files/testing-file1.txt', 'more content');
        Storage::disk('public')->delete('files/testing-file2.txt');
        
        // ----
        Event::fake([Restore\FileSuccessful::class]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(Restore\FileSuccessful::class, function ($ev) use ($backup) {
            // file1 test..
            $expected = 'dummy content';
            $actual   = Storage::disk('public')->get('files/testing-file1.txt');

            if ($expected != $actual) {
                return false;
            }

            // file2 test..
            if (!Storage::disk($backup->disk)->exists('files/testing-file2.txt')) {
                return false;
            }

            return true;
        });
    }

    /** @test */
    public function restored_backup_will_recover_altered_env_variables()
    {
        $backup  = $this->newBackup()->first();
        $envPath = app()->environmentFilePath();

        // Alter .env values
        $envContents = File::get($envPath);

        foreach (config('backup.backup.source.env') as $key) {
            $envContents = preg_replace("/^({$key})=([^\r\n]*)$/m", '$1='.Str::random(), $envContents);
        }

        File::put($envPath, $envContents);

        // ----
        RestoreFromBackup::dispatchNow($backup);

        $envUpdated = File::get($envPath);
        $matches    = [];

        foreach (config('backup.backup.source.env') as $key) {
            preg_match("/^({$key})=([^\r\n]*)$/m", $envUpdated, $matches);

            if (!isset($matches[2]) or ($matches[2] != env($key))) {
                return false;
            }
        }

        return true;
    }

    // TODO: not able to dump :memory: to test this
    // https://spatie.be/docs/laravel-backup/v6/installation-and-setup#custom-database-dumpers
    public function a_request_to_restore_from_backup_will_restore_database()
    {
        $backup = $this->newBackup()->first();

        // \Spatie\DbDumper\Databases\Sqlite::create()
        // ->setDbName(config('database.connections.sqlite.database'))
        // ->dumpToFile(config('backup.backup.temporary_directory').'/temp/db-dumps/sqlite-sqlite-database.sql');

        // ------------------------
        // Alter database
        $id = $this->user->id;
        $this->user->delete();

        $this->assertDatabaseMissing('users', ['id' =>  $id]);
        // ------------------------

        RestoreFromBackup::dispatchNow($backup);

        $this->assertDatabaseHas('users', ['id' => $id]);
    }
}
