<?php

namespace Fusion\Tests\Feature\Backups;

use Closure;
use Fusion\Models\Backup;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class UploadTest extends TestBase
{
    /** @test */
    public function a_user_with_permission_can_upload_new_backup()
    {
        $this->generateBackup('test-upload', function ($path, $name) {
            $this
                ->be($this->owner, 'api')
                ->json('POST', '/api/backups/upload', [
                    'file-upload' => new UploadedFile($path, $name, 'application/zip', null, true),
                ])
                ->assertStatus(201);

            Storage::disk('public')->assertExists(
                Backup::latest('id')->first()->location
            );
        });
    }

    /** @test */
    public function newly_uploaded_backup_will_be_recorded_in_the_database()
    {
        $this->generateBackup('test-upload', function ($path, $name) {
            $this
                ->be($this->owner, 'api')
                ->json('POST', '/api/backups/upload', [
                    'file-upload' => new UploadedFile($path, $name, 'application/zip', null, true),
                ]);

            foreach (config('backup.backup.destination.disks') as $disk) {
                $this->assertDatabaseHas('backups', [
                    'name' => 'test-upload',
                    'disk' => $disk,
                ]);
            }
        });
    }

    /** @test */
    public function a_user_without_permission_cannot_upload_new_backups()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/backups/upload', []);
    }

    /** @test */
    public function a_guest_cannot_not_upload_a_backup()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/backups/upload', []);
    }

    /** @test */
    public function backup_file_upload_must_be_a_zip_file_type()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/backups/upload', [
                'file-upload' => UploadedFile::fake()->image('backup.png'),
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file-upload' => 'The file-upload must be a file of type: zip.',
            ]);
    }

    //
    // ------------------------------------------------
    //

    /**
     * Generates new `backup zip` testing..
     * [helper].
     *
     * @param string  $name
     * @param Closure $closure
     *
     * @return array
     */
    private function generateBackup($name, Closure $closure)
    {
        $backup = $this->newBackup();

        // setup
        File::move(
            $backup->fullPath,
            $uploadPath = Storage::disk('temp')->path("{$name}.zip")
        );

        DB::table('backups')->delete();

        $closure($uploadPath, $name);

        // clean up
        File::delete($uploadPath);
    }
}
