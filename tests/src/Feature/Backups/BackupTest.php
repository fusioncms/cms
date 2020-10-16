<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Jobs\Backups\BackupRun;
use Fusion\Models\Backup;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class BackupTest extends TestBase
{
    // ------------------------------------------------
    // VIEW BACKUPS
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_view_backups()
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

    // ------------------------------------------------
    // CREATE BACKUPS
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_create_a_backup()
    {
        Bus::fake();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/backups')
            ->assertStatus(200);

        Bus::assertDispatched(BackupRun::class);
    }

    /** @test */
    public function newly_created_backup_zip_will_be_created()
    {
        $backup = $this->newBackup();

        Storage::disk('public')->assertExists($backup->location);
    }

    /** @test */
    public function newly_created_backup_will_be_recorded_in_database()
    {
        $backup = $this->newBackup();

        foreach (config('backup.backup.destination.disks') as $disk) {
            $this->assertDatabaseHas('backups', [
                'name' => $backup->name,
                'disk' => $disk,
            ]);
        }
    }

    /** @test */
    public function a_guest_cannot_not_create_a_backup()
    {
        Bus::fake();

        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/backups', []);

        Bus::assertNotDispatched(BackupRun::class);
    }

    /** @test */
    public function a_user_without_permission_cannot_create_new_backups()
    {
        Bus::fake();

        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/backups', []);

        Bus::assertNotDispatched(BackupRun::class);
    }

    // ------------------------------------------------
    // DELETE BACKUPS
    // ------------------------------------------------

    /** @test */
    public function deleted_backup_will_be_removed_from_storage()
    {
        $backup = $this->newBackup();

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/backups/{$backup->id}")
            ->assertStatus(200);

        Storage::disk($backup->disk)->assertMissing($backup->location);
    }

    /** @test */
    public function deleted_backup_will_be_removed_from_database()
    {
        $backup = $this->newBackup();

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/backups/{$backup->id}")
            ->assertStatus(200);

        $this->assertDatabaseMissing('backups', ['id' => $backup->id]);
    }

    /** @test */
    public function a_user_without_permission_cannot_delete_existing_backups()
    {
        $this->expectException(AuthorizationException::class);

        $backup = $this->newBackup();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/backups/{$backup->id}");
    }

    // ------------------------------------------------
    // BACKUP ZIP
    // ------------------------------------------------

    /** @test */
    public function backup_zip_will_save_env_variables_from_config()
    {
        $backup     = $this->newBackup();
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
        $backup     = $this->newBackup();
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
        $backup     = $this->newBackup();
        $zipArchive = new ZipArchive();

        $dbDump = 'db-dumps/sqlite-sqlite-database.sql';

        if ($zipArchive->open($backup->fullPath) === true) {
            $this->assertNotFalse(
                $zipArchive->statName($dbDump)
            );
        }
    }
}
