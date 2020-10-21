<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Events\Backups\Restore\FileRestoreSuccessful;
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
    // RESTORE PROCESS
    // ------------------------------------------------

    /** @test */
    public function restored_backup_will_recover_any_altered_files()
    {
        $backup = $this->newBackup('new-backup', 'public')->first();

        // Alter some files..
        Storage::disk('public')->append('files/testing-file1.txt', 'more content');
        Storage::disk('public')->delete('files/testing-file2.txt');
        
        // ----
        Event::fake([FileRestoreSuccessful::class]);

        RestoreFromBackup::dispatchNow($backup);

        Event::assertDispatched(FileRestoreSuccessful::class, function ($ev) use ($backup) {
            foreach ($ev->filesToCopy as $file) {
                if (Storage::disk($backup->disk)->exists('files/'.basename($file['target']))) {
                    $expected = 'dummy content';
                    $actual   = Storage::disk('public')->get('files/'.basename($file['target']));

                    if ($expected !== $actual) {
                        return false;
                    }
                }
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
