<?php

namespace Fusion\Tests\Feature;

use Closure;
use File;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\Backup\Events\BackupWasSuccessful;
use Spatie\Backup\Events\CleanupWasSuccessful;
use ZipArchive;

class BackupTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        Storage::fake('public');
        Storage::fake('temp');

        // Establish fake db connection..
        config(['backup.backup.source.databases' => ['sqlite']]);

        // Establish backup `backup-temp`..
        config(['backup.backup.temporary_directory' => Storage::disk('temp')->path('backup-temp')]);

        // Establish backup destination disks
        config(['backup.backup.destination.disks' => ['public']]);

        // Establish backup source env variables
        config(['backup.backup.source.env' => ['APP_KEY']]);

        // Establish included files to backup..
        config(['backup.backup.source.files.include' => [
            Storage::disk('public')->path('files'),
            Storage::disk('temp')->path('env.json'),
        ]]);

        // Add multiple files..
        Storage::disk('public')->put('files/testing-file1.txt', 'dummy content');
        Storage::disk('public')->put('files/testing-file2.txt', 'dummy content');
    }

    /**
     * @test
     * @group fusioncms
     * @group backups
     */
    public function a_user_with_permission_can_create_a_backup()
    {
        Bus::fake();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/backups')
            ->assertStatus(200);

        Bus::assertDispatched(\Fusion\Jobs\Backups\BackupRun::class);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     * @group auth
     */
    public function a_guest_cannot_not_create_a_backup()
    {
        Bus::fake();

        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/backups', []);

        Bus::assertNotDispatched(\Fusion\Jobs\Backups\BackupRun::class);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_backups()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/backups');
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     * @group permissions
     */
    public function a_user_without_permissions_cannot_upload_new_backups()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/backups/upload', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     * @group permissions
     */
    public function a_user_without_permissions_cannot_create_new_backups()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/backups', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_backups()
    {
        $this->newBackup(function ($ev, $backup) {
            $this->expectException(AuthorizationException::class);

            $this
                ->be($this->user, 'api')
                ->json('DELETE', '/api/backups/'.basename($backup->path(), '.zip'));
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     * @group permissions
     */
    public function a_user_without_permissions_cannot_restore_from_existing_backups()
    {
        $this->newBackup(function ($ev, $backup) {
            $this->expectException(AuthorizationException::class);

            $this
                ->be($this->user, 'api')
                ->json('POST', '/api/backups/restore/'.basename($backup->path(), '.zip'));
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     */
    public function a_request_to_backup_will_first_clean_then_create_a_backup()
    {
        $this->newBackup(function ($ev, $backup) {
            Event::assertDispatched(CleanupWasSuccessful::class);

            return Storage::disk('public')->assertExists($backup->path());
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     */
    public function a_request_to_backup_will_save_env_variables_with_the_backup_zip()
    {
        $this->newBackup(function ($ev, $backup) {
            $backupPath = Storage::disk('public')->path($backup->path());
            $zipArchive = new ZipArchive();

            // Verify env variables were backed-up correctly..
            if ($zipArchive->open($backupPath) === true) {
                $envFile = Storage::disk('temp')->path('env.json');
                $envPath = ltrim($envFile, '/');
                $contents = $zipArchive->getFromName($envPath);
                $variables = json_decode($contents, true);

                foreach (config('backup.backup.source.env') as $key) {
                    if ($variables[$key] != env($key)) {
                        return false;
                    }
                }
            }

            return true;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     */
    public function a_request_to_restore_from_backup_will_restore_files()
    {
        $this->newBackup(function ($ev, $backup) {

            // Alter storage setup..
            Storage::disk('public')->append('files/testing-file1.txt', 'more content');
            Storage::disk('public')->delete('files/testing-file2.txt');

            // Restore from backup..
            (new \Fusion\Jobs\Backups\RestoreFromBackup($backup))->handle();

            // Assert events were dispatched..
            Event::assertDispatched(\Fusion\Events\Backups\RestoreManifestWasCreated::class);
            Event::assertDispatched(\Fusion\Events\Backups\BackupExtractionSuccessful::class);
            Event::assertDispatched(\Fusion\Events\Backups\FileRestoreSuccessful::class, function ($ev) {
                foreach ($ev->filesToCopy as $file) {
                    if (Storage::disk('public')->exists('files/'.basename($file['target']))) {
                        $this->assertEquals(
                            Storage::disk('public')->get('files/'.basename($file['target'])),
                            'dummy content'
                        );
                    }
                }

                return true;
            });

            return true;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group backups
     */
    public function a_request_to_restore_from_backup_will_restore_env_variables()
    {
        $this->newBackup(function ($ev, $backup) {

            // Alter .env.testing file and save..
            $envContents = File::get(app()->environmentFilePath());

            foreach (config('backup.backup.source.env') as $key) {
                $envContents = preg_replace("/^({$key})=([^\r\n]*)$/m", '$1='.Str::random(), $envContents);
            }

            File::put(app()->environmentFilePath(), $envContents);
            // --

            // ----
            // Restore backup..
            (new \Fusion\Jobs\Backups\RestoreFromBackup($backup))->handle();

            $envUpdated = File::get(app()->environmentFilePath());
            $matches = [];

            foreach (config('backup.backup.source.env') as $key) {
                preg_match("/^({$key})=([^\r\n]*)$/m", $envUpdated, $matches);

                if (!isset($matches[2]) or ($matches[2] != env($key))) {
                    return false;
                }
            }

            return true;
        });
    }

    //TODO: unable to dump sql database for testing
    public function a_request_to_restore_from_backup_will_restore_database()
    {
        // \Spatie\DbDumper\Databases\Sqlite::create()
        // 	->setDbName(Storage::disk('public')->path('database.sqlite'))
        // 	->dumpToFile(Storage::disk('public')->path('database.sql'));

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

    //
    // ------------------------------------------------
    //

    /**
     * Returns new term w/ attributes
     * [Helper].
     *
     * @param array $overrides
     *
     * @return array
     */
    private function newBackup(Closure $closure)
    {
        Event::fake();

        (new \Fusion\Jobs\Backups\BackupRun())->handle();

        Event::assertDispatched(BackupWasSuccessful::class, function ($ev) use ($closure) {
            return $closure($ev, $ev->backupDestination->newestBackup());
        });
    }
}
