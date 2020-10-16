<?php

namespace Fusion\Tests\Feature\Backups;

use Fusion\Events\Backups\FileRestoreSuccessful;
use Fusion\Jobs\Backups\RestoreFromBackup;
use Fusion\Models\Backup;
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
    // RESTORE REQUEST
    // ------------------------------------------------

    /** @test */
    public function a_user_with_permission_can_restore_from_existing_backups()
    {
        Bus::fake();

        $backup = $this->newBackup();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/backups/restore/{$backup->id}")
            ->assertStatus(200);

        Bus::assertDispatched(RestoreFromBackup::class);
    }

    /** @test */
    public function a_user_without_permission_cannot_restore_from_existing_backups()
    {
        Bus::fake();

        $this->expectException(AuthorizationException::class);

        $backup = $this->newBackup();

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/backups/restore/{$backup->id}");

        Bus::assertNotDispatched(RestoreFromBackup::class);
    }

    /** @test */
    public function a_guest_cannot_restore_from_existing_backups()
    {
        Bus::fake();

        $this->expectException(AuthenticationException::class);

        $backup = $this->newBackup();

        $this->json('POST', "/api/backups/restore/{$backup->id}");

        Bus::assertNotDispatched(RestoreFromBackup::class);
    }

    // ------------------------------------------------
    // RESTORE PROCESS
    // ------------------------------------------------

    /** @test */
    public function restored_backup_will_recover_altered_files()
    {
        Event::fake([FileRestoreSuccessful::class]);

        $backup = $this->newBackup();

        // Alter storage setup..
        Storage::disk('public')->append('files/testing-file1.txt', 'more content');
        Storage::disk('public')->delete('files/testing-file2.txt');

        // Restore from backup..
        (new RestoreFromBackup($backup))->handle();

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

    public function restored_backup_will_recover_altered_env_variables()
    {
        $backup = $this->newBackup();

        // Alter .env.testing file and save..
        $envContents = File::get(app()->environmentFilePath());
        dump('before', File::get(app()->environmentFilePath()));
        foreach (config('backup.backup.source.env') as $key) {
            $envContents = preg_replace("/^({$key})=([^\r\n]*)$/m", '$1='.Str::random(), $envContents);
        }
        dd($envContents);
//         File::put(app()->environmentFilePath(), $envContents);
// dump('after', File::get(app()->environmentFilePath()));
//         // --

//         // Restore backup..
//         (new RestoreFromBackup($backup))->handle();

//         $envUpdated = File::get(app()->environmentFilePath());
//         $matches    = [];
// dd($envUpdated);
        // foreach (config('backup.backup.source.env') as $key) {
        //     preg_match("/^({$key})=([^\r\n]*)$/m", $envUpdated, $matches);

        //     if (!isset($matches[2]) or ($matches[2] != env($key))) {
        //         return false;
        //     }
        // }

        // return true;
    }

    //TODO: unable to dump sql database for testing
    public function a_request_to_restore_from_backup_will_restore_database()
    {
        // \Spatie\DbDumper\Databases\Sqlite::create()
        //  ->setDbName(Storage::disk('public')->path('database.sqlite'))
        //  ->dumpToFile(Storage::disk('public')->path('database.sql'));

        //TODO: need `$backup` to restore from

        // \Fusion\Models\User::find(2)->delete();
        // $this->assertDatabaseMissing('users', ['email' => 'guest@example.com']);

        // // Restore from backup...
        // (new RestoreFromBackup($backup))->handle();

        // // ...assert cleanup was successful.
        // Event::assertDispatched(\Fusion\Events\Backups\RestoreManifestWasCreated::class);
        // Event::assertDispatched(\Fusion\Events\Backups\BackupExtractionSuccessful::class);
        // Event::assertDispatched(\Fusion\Events\Backups\DatabaseRestoreSuccessful::class);
        // Event::assertDispatched(\Fusion\Events\Backups\FileRestoreSuccessful::class);

        // $this->assertDatabaseHas('users', ['email' => 'guest@example.com']);
    }
}
