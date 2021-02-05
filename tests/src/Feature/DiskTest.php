<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Disk;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DiskTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->disk = Disk::factory()
            ->withName('public')
            ->isDefault()
            ->create();
    }

    #
    # 
    # PERMISSIONS TESTS
    # 
    #

    /** @test */
    public function a_guest_cannot_not_create_a_disk()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/disks', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_any_disks()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/disks');
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_disk()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/disks/{$this->disk->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_disks()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/disks', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_disks()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/disks/{$this->disk->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_disks()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/disks/{$this->disk->id}");
    }

    #
    # 
    # CRUD TESTS
    # 
    #
    
    /** @test */
    public function a_user_with_permissions_can_create_a_new_disk()
    {
        $disk = Disk::factory()->make()->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/disks', $disk)
            ->assertStatus(201);

        $this->assertDatabaseHas('disks', [
            'name'   => $disk['name'],
            'handle' => $disk['handle'],
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_retrieve_an_existing_disk()
    {
        $this
            ->be($this->owner, 'api')
            ->json('GET', "/api/disks/{$this->disk->id}")
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_disk()
    {
        $request           = $this->disk->toArray();
        $request['name']   = 'New Name';
        $request['handle'] = 'new_name';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/disks/{$this->disk->id}", $request)
            ->assertStatus(200);

        $this->assertDatabaseHas('disks', [
            'name'   => $request['name'],
            'handle' => $request['handle'],
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_disk()
    {
        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/disks/{$this->disk->id}")
            ->assertStatus(200);

        $this->assertDatabaseMissing('disks', [
            'id' => $this->disk->id
        ]);
    }

    #
    # 
    # MISC TESTS
    # 
    #

    /** @test */
    public function only_one_disk_can_be_selected_as_the_default_disk()
    {
        $attributes = Disk::factory()
            ->withName('another')
            ->isDefault()
            ->make()
            ->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/disks', $attributes);

        $this->assertDatabaseHas('disks', [
            'id'         => $this->disk->id,
            'is_default' => false
        ]);
    }

    /** @test */
    public function adding_a_new_disk_will_reflect_in_configs()
    {
        $attributes = Disk::factory()->make()->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/disks', $attributes);

        $this->assertEquals(
            config("filesystems.disks.{$attributes['handle']}"),
            $attributes['configurations'] + ['driver' => $attributes['driver']]
        );
    }

    /** @test */
    public function updating_existing_disk_will_reflect_in_configs()
    {
        $attributes           = $this->disk->toArray();
        $attributes['name']   = 'Another';
        $attributes['handle'] = 'another';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/disks/{$this->disk->id}", $attributes);

        $this->assertNull(config('filesystems.disks.public'));
        $this->assertEquals(
            config('filesystems.disks.another'),
            $attributes['configurations'] + ['driver' => $attributes['driver']]
        );
    }
}
