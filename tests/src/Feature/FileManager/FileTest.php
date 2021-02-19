<?php

namespace Fusion\Tests\Feature\FileManager;

use Fusion\Models\Directory;
use Fusion\Models\Disk;
use Fusion\Models\File;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        // Get default public disk..
        $this->disk = Disk::first();

        Storage::fake($this->disk->handle);
    }

    /** @test */
    public function a_user_with_permissions_can_create_files()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/files/{$this->disk->id}", [
                'file' => UploadedFile::fake()->image('foobar.png'),
            ])
            ->assertStatus(201);

        $this->assertDatabaseHas('files', [
            'disk_id'   => $this->disk->id,
            'name'      => 'foobar',
            'mimetype'  => 'image/png',
            'extension' => 'png',
        ]);

        Storage::disk($this->disk->handle)->assertExists(
            File::latest()->first()->location
        );
    }

    /** @test */
    public function a_guest_cannot_create_new_files()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', "/api/files/{$this->disk->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_any_files()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/files/{$this->disk->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_file()
    {
        $this->expectException(AuthorizationException::class);

        $file = File::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/files/{$this->disk->id}/{$file->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_files()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/files/{$this->disk->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_files()
    {
        $this->expectException(AuthorizationException::class);

        $file = File::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/files/{$this->disk->id}/{$file->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_files()
    {
        $this->expectException(AuthorizationException::class);

        $file = File::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/files/{$this->disk->id}/{$file->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_download_files()
    {
        $this->expectException(AuthorizationException::class);

        $file = File::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/files/{$this->disk->id}/{$file->id}/download");
    }

    /** @test */
    public function a_file_is_required_for_uploads()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/files/{$this->disk->id}", ['file' => null])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file' => 'The file field is required.',
            ]);
    }

    /** @test */
    public function a_valid_file_is_required_for_uploads()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/files/{$this->disk->id}", ['file' => 'foobar'])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file' => 'The file must be a file.',
            ]);
    }

    /** @test */
    public function a_user_with_permissions_can_update_files()
    {
        $file = File::factory()->asDocument()->create();
        $attr = $file->toArray();

        // updates ----
        $attr['name']    = 'updated-name';
        $attr['title']   = 'This is the title field.';
        $attr['alt']     = 'This is the alt field.';
        $attr['caption'] = 'This is the caption field.';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/files/{$this->disk->id}/{$file->id}", $attr)
            ->assertStatus(200);

        $this->assertDatabaseHas('files', [
            'name'        => ($name = $attr['name']),
            'uuid'        => ($uuid = $file->uuid),
            'title'       => $attr['title'],
            'alt'         => $attr['alt'],
            'caption'     => $attr['caption'],
            'extension'   => ($extn = $file->extension),
            'location'    => "files/{$uuid}-{$name}.{$extn}",
        ]);

        Storage::disk($this->disk->handle)->assertMissing($file->location);
        Storage::disk($this->disk->handle)->assertExists("files/{$uuid}-{$name}.{$extn}");
    }

    /** @test */
    public function a_user_with_permissions_can_delete_files()
    {
        $file = File::factory()->asAudio()->create();

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/files/{$this->disk->id}/{$file->id}")
            ->assertStatus(200);

        $this->assertDatabaseMissing('files', ['id' => $file->id]);

        Storage::disk($this->disk->handle)->assertMissing($file->location);
    }

    /** @test */
    public function a_name_must_be_provided_with_an_update_request()
    {
        $file = File::factory()->create();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/files/{$this->disk->id}/{$file->id}", [])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'name' => 'The name field is required.',
            ]);
    }

    /** @test */
    public function a_user_with_permissions_can_get_a_file()
    {
        $file = File::factory()->create();

        $payload = $this
            ->be($this->owner, 'api')
            ->json('GET', "/api/files/{$this->disk->id}/{$file->id}")
            ->assertStatus(200)
            ->getData()->data;

        $this->assertEquals($payload->name, $file->name);
    }

    /** @test */
    public function a_user_without_permissions_cannot_get_a_file()
    {
        $this->expectException(AuthorizationException::class);

        $file = File::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/files/{$this->disk->id}/{$file->id}");
    }

    /** @test */
    public function a_user_with_permissions_can_download_files()
    {
        $file = File::factory()->asDocument()->create();

        $response = $this
            ->be($this->owner, 'api')
            ->json('GET', "/api/files/{$this->disk->id}/{$file->id}/download")
            ->assertStatus(200);

        $this->assertTrue($response->headers->get('content-type') === $file->mimetype);
        $this->assertTrue($response->headers->get('content-disposition') === "attachment; filename={$file->name}.{$file->extension}");
    }

    /** @test */
    public function a_user_with_permissions_can_replace_existing_files()
    {
        $file = File::factory()->create();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/files/{$this->disk->id}/{$file->id}/replace", [
                'file' => UploadedFile::fake()->image('file.jpeg', 25, 25),
            ])
            ->assertStatus(200);

        // assert file still exists at same location
        //   w/ same name..
        Storage::disk($this->disk->handle)->assertExists($file->location);

        // assert file info has updated..
        $this->assertDatabaseHas('files', [
            'mimetype'  => 'image/jpeg',
            'extension' => 'jpg',
            'width'     => 25,
            'height'    => 25,
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_move_files()
    {
        $file      = File::factory()->asDocument()->create();
        $directory = Directory::factory()->create();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/files/{$this->disk->id}/move", [
                'directory' => $directory->id,
                'moving'    => [
                    'files'       => [$file->id],
                    'directories' => [],
                ],
            ])->assertStatus(200);

        $this->assertDatabaseHas('files', [
            'id'           => $file->id,
            'directory_id' => $directory->id,
        ]);
    }

    /** @test */
    public function files_can_be_searched_by_keywords()
    {
        $this->actingAs($this->owner, 'api');

        File::factory()->withName('lorem')->create(['title' => 'sit']);
        File::factory()->withName('ipsum')->create(['title' => 'amet']);
        File::factory()->withName('sit')->create(['alt' => 'lorem']);
        File::factory()->withName('amet')->create(['alt' => 'ipsum']);
        File::factory()->withName('dolor')->create(['caption' => 'foo']);
        File::factory()->withName('foo')->create(['caption' => 'bar']);

        $response = $this->json('GET', "/api/files/{$this->disk->id}?filter[search]=lor");
        $data     = collect($response->getData()->data);

        $this->assertCount(3, $data);
        $this->assertCount(1, $data->where('name', 'lorem'));
        $this->assertCount(1, $data->where('name', 'sit'));
        $this->assertCount(1, $data->where('name', 'dolor'));

        $response = $this->json('GET', "/api/files/{$this->disk->id}?filter[search]=dolor");
        $data     = collect($response->getData()->data);

        $this->assertCount(1, $data);
        $this->assertCount(1, $data->where('name', 'dolor'));

        $response = $this->json('GET', "/api/files/{$this->disk->id}?filter[search]=foo");
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'dolor'));
        $this->assertCount(1, $data->where('name', 'foo'));
    }

    /** @test */
    public function files_can_be_sorted_by_name()
    {
        $this->actingAs($this->owner, 'api');

        File::factory()->withName('lorem')->create();
        File::factory()->withName('ipsum')->create();
        File::factory()->withName('dolor')->create();
        File::factory()->withName('sit')->create();
        File::factory()->withName('amet')->create();
        File::factory()->withName('do')->create();

        // forward sort
        $response = $this->json('GET', "/api/files/{$this->disk->id}?sort=name");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['amet', 'do', 'dolor', 'ipsum', 'lorem', 'sit'], $data);

        // reverse sort
        $response = $this->json('GET', "/api/files/{$this->disk->id}?sort=-name");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit', 'lorem', 'ipsum', 'dolor', 'do', 'amet'], $data);
    }

    /** @test */
    public function files_can_be_sorted_by_filesize()
    {
        $this->actingAs($this->owner, 'api');

        File::factory()->withName('lorem')->create(['bytes' => 400]);
        File::factory()->withName('ipsum')->create(['bytes' => 100]);
        File::factory()->withName('dolor')->create(['bytes' => 300]);
        File::factory()->withName('sit')->create(['bytes' => 600]);
        File::factory()->withName('amet')->create(['bytes' => 200]);
        File::factory()->withName('do')->create(['bytes' => 500]);

        // forward sort
        $response = $this->json('GET', "/api/files/{$this->disk->id}?sort=bytes");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['ipsum', 'amet', 'dolor', 'lorem', 'do', 'sit'], $data);

        // reverse sort
        $response = $this->json('GET', "/api/files/{$this->disk->id}?sort=-bytes");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit', 'do', 'lorem', 'dolor', 'amet', 'ipsum'], $data);
    }

    /** @test */
    public function files_can_be_sorted_by_last_modified_timestamp()
    {
        $this->actingAs($this->owner, 'api');

        File::factory()->withName('lorem')->create(['updated_at' => now()->addDays(1)]);
        File::factory()->withName('ipsum')->create(['updated_at' => now()->addDays(3)]);
        File::factory()->withName('dolor')->create(['updated_at' => now()->addDays(2)]);
        File::factory()->withName('sit')->create(['updated_at' => now()->addDays(6)]);
        File::factory()->withName('amet')->create(['updated_at' => now()->addDays(4)]);
        File::factory()->withName('do')->create(['updated_at' => now()->addDays(5)]);

        // forward sort
        $response = $this->json('GET', "/api/files/{$this->disk->id}?sort=updated_at");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['lorem', 'dolor', 'ipsum', 'amet', 'do', 'sit'], $data);

        // reverse sort
        $response = $this->json('GET', "/api/files/{$this->disk->id}?sort=-updated_at");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit', 'do', 'amet', 'ipsum', 'dolor', 'lorem'], $data);
    }

    /** @test */
    public function image_files_can_be_filtered()
    {
        $this->actingAs($this->owner, 'api');

        File::factory()->withName('lorem')->create();
        File::factory()->withName('ipsum')->create();
        File::factory()->asAudio()->withName('dolor')->create();
        File::factory()->asVideo()->withName('sit')->create();

        // filter by image
        $response = $this->json('GET', "/api/files/{$this->disk->id}?filter[display]=images");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['ipsum', 'lorem'], $data);

        // filter by video
        $response = $this->json('GET', "/api/files/{$this->disk->id}?filter[display]=videos");
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit'], $data);
    }
}
