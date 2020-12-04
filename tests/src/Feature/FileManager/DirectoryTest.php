<?php

namespace Fusion\Tests\Feature\FileManager;

use Fusion\Models\Directory;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DirectoryTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permissions_can_create_directories()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', 'api/directories', ['name' => 'Test Folder'])
            ->assertStatus(201);

        $this->assertDatabaseHas('directories', [
            'name' => 'Test Folder',
            'slug' => 'test-folder',
        ]);
    }

    /** @test */
    public function activity_will_be_tracked_when_directory_is_created()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', 'api/directories', ['name' => 'Test Folder']);

        $this->assertDatabaseHas('activity_log', [
            'description' => 'Created folder (Test Folder)',
            'causer_id'   => $this->owner->id,
        ]);
    }

    /** @test */
    public function activity_will_be_tracked_when_directory_is_updated()
    {
        $directory = Directory::factory()->create();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "api/directories/{$directory->id}", [
                'name' => 'Updated Name',
            ]);

        $this->assertDatabaseHas('activity_log', [
            'description' => 'Updated folder (Updated Name)',
            'causer_id'   => $this->owner->id,
            'subject_id'  => $directory->id,
        ]);
    }

    /** @test */
    public function activities_will_be_cleaned_up_for_directory_when_it_is_deleted()
    {
        $directory = Directory::factory()->create();

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "api/directories/{$directory->id}");

        $this->assertDatabaseMissing('activity_log', [
            'subject_id'   => $directory->id,
            'subject_type' => 'Fusion\Models\Directory',
        ]);
    }

    /** @test */
    public function a_user_without_control_panel_access_cannot_create_new_directories()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/directories', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_directories()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/directories', []);
    }

    /** @test */
    public function a_user_with_permissions_can_rename_directories()
    {
        $directory = Directory::factory()->create();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "api/directories/{$directory->id}", [
                'name' => 'Updated Name',
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas('directories', [
            'name' => 'Updated Name',
            'slug' => 'updated-name',
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_directories()
    {
        $directory   = Directory::factory()->create();
        $directories = Directory::factory()->withParent($directory)->count(2)->create();

        // delete directory..
        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "api/directories/{$directory->id}")
            ->assertStatus(200);

        // assert directory was removed..
        $this->assertDatabaseMissing('directories', ['id' => $directory->id]);

        // assert children were removed..
        $this->assertDatabaseMissing('directories', ['id' => $directories->get(0)->id]);
        $this->assertDatabaseMissing('directories', ['id' => $directories->get(1)->id]);
    }

    /** @test */
    public function directories_can_be_searched_by_name()
    {
        $directoryA = Directory::factory()->withName('Lorem')->create();
        $directoryB = Directory::factory()->withName('Dolor')->create();
        $directoryC = Directory::factory()->withName('Ipsum')->withParent($directoryA)->create();
        $directoryD = Directory::factory()->withName('Sit')->withParent($directoryA)->create();
        $directoryE = Directory::factory()->withName('Amet')->withParent($directoryB)->create();

        $this->actingAs($this->owner, 'api');

        $response = $this->json('GET', '/api/directories?filter[search]=lor');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'Lorem'));
        $this->assertCount(1, $data->where('name', 'Dolor'));

        $response = $this->json('GET', '/api/directories?filter[search]=lorem');
        $data     = collect($response->getData()->data);

        $this->assertCount(1, $data);
        $this->assertCount(1, $data->where('name', 'Lorem'));
    }

    /** @test */
    public function directories_can_be_searched_by_parent()
    {
        $directoryA = Directory::factory()->withName('Lorem')->create();
        $directoryB = Directory::factory()->withName('Dolor')->create();
        $directoryC = Directory::factory()->withName('Ipsum')->withParent($directoryA)->create();
        $directoryD = Directory::factory()->withName('Sit')->withParent($directoryA)->create();
        $directoryE = Directory::factory()->withName('Amet')->withParent($directoryB)->create();

        $this->actingAs($this->owner, 'api');

        $response = $this->json('GET', '/api/directories');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'Lorem'));
        $this->assertCount(1, $data->where('name', 'Dolor'));

        $response = $this->json('GET', '/api/directories?filter[parent_id]=1');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'Ipsum'));
        $this->assertCount(1, $data->where('name', 'Sit'));
    }

    /** @test */
    public function directories_must_have_a_unique_parent_id_and_slug_combination()
    {
        $directory       = Directory::factory()->create()->toArray();
        $directory['id'] = null;

        $this
            ->be($this->owner, 'api')
            ->json('POST', 'api/directories', $directory)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /** @test */
    public function directories_can_have_duplicate_slugs_with_a_different_parent_id()
    {
        $directory              = Directory::factory()->create()->toArray();
        $directory['id']        = null;
        $directory['parent_id'] = 99;

        $this
            ->be($this->owner, 'api')
            ->json('POST', 'api/directories', $directory)
            ->assertStatus(201);
    }

    /** @test */
    public function a_directory_cannot_be_moved_to_another_directory_with_a_conflicting_slug()
    {
        // Create two directories (A1/A2) w/ same slug in diff folders
        $directoryA1 = Directory::factory()->withName('Folder A')->create();
        $directoryA2 = Directory::factory()->withName('Folder A')->withParent($directoryA1)->create();
        $directoryB1 = Directory::factory()->withName('Folder B')->withParent($directoryA1)->create();

        // Attempt to combine directories in same location
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/files/move', [
                'directory' => $directoryA1->parent_id,
                'moving'    => [
                    'files'       => [],
                    'directories' => [
                        $directoryA2->id,
                        $directoryB1->id,
                    ],
                ],
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['moving']);

        // assert db records are correct..
        $this->assertDatabaseHas('directories', ['slug' => 'folder-a', 'parent_id' => $directoryA1->id]);
        $this->assertDatabaseHas('directories', ['slug' => 'folder-b', 'parent_id' => 0]);
    }
}
