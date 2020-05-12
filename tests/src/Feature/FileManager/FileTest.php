<?php

namespace Fusion\Tests\Feature\FileManager;

use Fusion\Models\File;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Fusion\Models\Directory;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

class FileTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        Storage::fake('public');
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_create_files()
    {
        $this
            ->be($this->admin, 'api')
            ->json('POST', 'api/files', [
                'file' => UploadedFile::fake()->image('foobar.png')
            ])
            ->assertStatus(201);

        $this->assertDatabaseHas('files', [
            'name'      => 'foobar',
            'mimetype'  => 'image/png',
            'extension' => 'png'
        ]);

        Storage::disk('public')->assertExists(
            File::latest()->first()->location
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_without_control_panel_access_cannot_create_new_files()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/files', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_without_permissions_cannot_create_new_files()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/files', []);
    }

        /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_file_is_required_for_uploads()
    {
        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/files', [ 'file' => null ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file' => 'The file field is required.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_valid_file_is_required_for_uploads()
    {
        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/files', [ 'file' => 'foobar' ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file' => 'The file must be a file.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_valid_file_must_abide_by_acceptable_file_type_settings()
    {
        setting(['files.accepted_files' => 'jpg, png, gif']);
        setting(['files.file_size_upload_limit' => 1]);

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/files', [
                'file' => UploadedFile::fake()->createWithContent('foobar.txt', $this->faker->paragraphs(3, true))
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file'  => 'The file must be a file of type: ' . setting('files.accepted_files'),
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_valid_file_must_abide_by_acceptable_file_size_settings()
    {
        setting(['files.accepted_files' => 'pdf']);
        setting(['files.file_size_upload_limit' => 1]);

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/files', [
                'file' => UploadedFile::fake()->create('test.pdf', 2000, 'application/pdf')
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file'  => 'The file cannot be larger than ' . setting('files.file_size_upload_limit') . 'MB',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_update_files()
    {
        $file = factory(File::class)->states('document')->create();
        $attr = $file->toArray();

        // updates ----
        $attr['name']    = 'updated-name';
        $attr['title']   = 'This is the title field.';
        $attr['alt']     = 'This is the alt field.';
        $attr['caption'] = 'This is the caption field.';

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', 'api/files/' . $file->id, $attr)
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

        Storage::disk('public')->assertMissing($file->location);
        Storage::disk('public')->assertExists("files/{$uuid}-{$name}.{$extn}");
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_delete_files()
    {
        $file = factory(File::class)->states('audio')->create();

        $this
            ->be($this->admin, 'api')
            ->json('DELETE', 'api/files/' . $file->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('files', [ 'id' => $file->id ]);

        Storage::disk('public')->assertMissing($file->location);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_name_must_be_provided_with_an_update_request()
    {
        $file = factory(File::class)->states('image')->create();

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', 'api/files/' . $file->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'name' => 'The name field is required.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_get_a_file()
    {
        $file    = factory(File::class)->states('image')->create();
        $payload = $this
            ->be($this->admin, 'api')
            ->json('GET', '/api/files/' . $file->uuid)
            ->assertStatus(200)
            ->getData()->data;

        $this->assertEquals($payload->name, $file->name);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_without_permissions_cannot_get_a_file()
    {
        $this->expectException(AuthorizationException::class);

        $file = factory(File::class)->states('image')->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/files/' . $file->uuid);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_download_files()
    {
        $file = factory(File::class)->states('document')->create();

        $response = $this
            ->be($this->admin, 'api')
            ->json('GET', "/api/files/{$file->uuid}/download")
            ->assertStatus(200);

        $this->assertTrue($response->headers->get('content-type') === $file->mimetype);
        $this->assertTrue($response->headers->get('content-disposition') === "attachment; filename={$file->name}.{$file->extension}");
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_replace_existing_files()
    {
        $file = factory(File::class)->states('image')->create();

        $this
            ->be($this->admin, 'api')
            ->json('POST', '/api/files/replace/' . $file->id, [
                'file' => UploadedFile::fake()->image('file.jpeg', 25, 25)
            ])
            ->assertStatus(200);

        // assert file still exists at same location
        //   w/ same name..
        Storage::disk('public')->assertExists($file->location);

        // assert file info has updated..
        $this->assertDatabaseHas('files', [
            'mimetype'  => 'image/jpeg',
            'extension' => 'jpeg',
            'width'     => 25,
            'height'    => 25,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function a_user_with_permissions_can_move_files()
    {
        $file      = factory(File::class)->states('image')->create();
        $directory = factory(Directory::class)->create();

        $this
            ->be($this->admin, 'api')
            ->json('POST', 'api/files/move', [
                'directory' => $directory->id,
                'moving'    => [
                    'files'       => [ $file->id ],
                    'directories' => []
                ]
            ])->assertStatus(200);

        $this->assertDatabaseHas('files', [
            'id'           => $file->id,
            'directory_id' => $directory->id,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function files_can_be_searched_by_keywords()
    {
        $this->actingAs($this->admin, 'api');

        factory(File::class)->create(['name' => 'lorem', 'title' => 'sit']);
        factory(File::class)->create(['name' => 'ipsum', 'title' => 'amet']);
        factory(File::class)->create(['name' => 'sit', 'alt' => 'lorem']);
        factory(File::class)->create(['name' => 'amet', 'alt' => 'ipsum']);
        factory(File::class)->create(['name' => 'dolor', 'caption' => 'foo']);
        factory(File::class)->create(['name' => 'foo', 'caption' => 'bar']);

        $response = $this->json('GET', '/api/files?filter[search]=lor');
        $data     = collect($response->getData()->data);

        $this->assertCount(3, $data);
        $this->assertCount(1, $data->where('name', 'lorem'));
        $this->assertCount(1, $data->where('name', 'sit'));
        $this->assertCount(1, $data->where('name', 'dolor'));

        $response = $this->json('GET', '/api/files?filter[search]=dolor');
        $data     = collect($response->getData()->data);

        $this->assertCount(1, $data);
        $this->assertCount(1, $data->where('name', 'dolor'));

        $response = $this->json('GET', '/api/files?filter[search]=foo');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'dolor'));
        $this->assertCount(1, $data->where('name', 'foo'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function files_can_be_sorted_by_name()
    {
        $this->actingAs($this->admin, 'api');

        factory(File::class)->create(['name' => 'lorem']);
        factory(File::class)->create(['name' => 'ipsum']);
        factory(File::class)->create(['name' => 'dolor']);
        factory(File::class)->create(['name' => 'sit']);
        factory(File::class)->create(['name' => 'amet']);
        factory(File::class)->create(['name' => 'do']);

        // forward sort
        $response = $this->json('GET', '/api/files?sort=name');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['amet', 'do', 'dolor', 'ipsum', 'lorem', 'sit'], $data);

        // reverse sort
        $response = $this->json('GET', '/api/files?sort=-name');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit', 'lorem', 'ipsum', 'dolor', 'do', 'amet'], $data);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function files_can_be_sorted_by_filesize()
    {
        $this->actingAs($this->admin, 'api');

        factory(File::class)->create(['name' => 'lorem', 'bytes' => 400]);
        factory(File::class)->create(['name' => 'ipsum', 'bytes' => 100]);
        factory(File::class)->create(['name' => 'dolor', 'bytes' => 300]);
        factory(File::class)->create(['name' => 'sit',   'bytes' => 600]);
        factory(File::class)->create(['name' => 'amet',  'bytes' => 200]);
        factory(File::class)->create(['name' => 'do',    'bytes' => 500]);

        // forward sort
        $response = $this->json('GET', '/api/files?sort=bytes');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['ipsum', 'amet', 'dolor', 'lorem', 'do', 'sit'], $data);

        // reverse sort
        $response = $this->json('GET', '/api/files?sort=-bytes');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit', 'do', 'lorem', 'dolor', 'amet', 'ipsum'], $data);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function files_can_be_sorted_by_last_modified_timestamp()
    {
        $this->actingAs($this->admin, 'api');

        factory(File::class)->create(['name' => 'lorem', 'updated_at' => now()->addDays(1)]);
        factory(File::class)->create(['name' => 'ipsum', 'updated_at' => now()->addDays(3)]);
        factory(File::class)->create(['name' => 'dolor', 'updated_at' => now()->addDays(2)]);
        factory(File::class)->create(['name' => 'sit',   'updated_at' => now()->addDays(6)]);
        factory(File::class)->create(['name' => 'amet',  'updated_at' => now()->addDays(4)]);
        factory(File::class)->create(['name' => 'do',    'updated_at' => now()->addDays(5)]);

        // forward sort
        $response = $this->json('GET', '/api/files?sort=updated_at');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['lorem', 'dolor', 'ipsum', 'amet', 'do', 'sit'], $data);

        // reverse sort
        $response = $this->json('GET', '/api/files?sort=-updated_at');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame(['sit', 'do', 'amet', 'ipsum', 'dolor', 'lorem'], $data);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group file
     */
    public function image_files_can_be_filtered()
    {
        $this->actingAs($this->admin, 'api');

        factory(File::class)->create(['name' => 'lorem']);
        factory(File::class)->create(['name' => 'ipsum']);
        factory(File::class)->states('audio')->create(['name' => 'dolor']);
        factory(File::class)->states('video')->create(['name' => 'sit']);

        // filter by image
        $response = $this->json('GET', '/api/files?filter[display]=images');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame([ 'ipsum', 'lorem' ], $data);

        // filter by video
        $response = $this->json('GET', '/api/files?filter[display]=videos');
        $data     = collect($response->getData()->data)->pluck('name')->all();

        $this->assertSame([ 'sit' ], $data);
    }
}
