<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Import;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImporterTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    public function a_user_with_permission_can_create_an_import()
    {
        $attributes = factory(Import::class)->make()->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/imports', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('imports', [
            'name'   => $attributes['name'],
            'handle' => $attributes['handle'],
            'module' => $attributes['module'],
            'source' => $attributes['source'],
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     * @group auth
     */
    public function a_guest_cannot_not_create_an_import()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/imports', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     * @group permissions
     */
    public function a_user_without_permissions_cannot_create_an_import()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/imports', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_imports()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/imports');
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_an_import()
    {
        $this->expectException(AuthorizationException::class);

        $import = factory(Import::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/imports/'.$import->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_import()
    {
        $this->expectException(AuthorizationException::class);

        $import = factory(Import::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/imports/'.$import->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_import()
    {
        $this->expectException(AuthorizationException::class);

        $import = factory(Import::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/imports/'.$import->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group imports
     */
    public function an_import_cannot_not_create_with_disable_and_delete_strategies()
    {
        $attributes = factory(Import::class)->make(
            ['strategy' => ['disable', 'delete']]
        )->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/imports', $attributes)
            ->assertJsonValidationErrors('strategy')
            ->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    // public function a_mapping_preview_will_be_generated_on_import_mapping_page()
    // {
    //     $this->actingAs($this->owner, 'api');

    //     $import = factory(Import::class)->states('users')->create([
    //         'preview'  => [],
    //         'mappings' => []
    //     ]);

    //     $this->json(
    //         'GET',
    //         '/api/imports/mapping/' . $import->id,
    //     );

    //     $this->assertEquals([
    //             ['ID', 'Name', 'Email', 'Password', 'Status'],
    //             [1, 'Mrs. Nora Hickle', 'boyer.alberto@example.org', 'r22S3q0cED#t+U+s', 1]
    //     ], $import->fresh()->preview->toArray());
    // }

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    public function a_user_with_permission_can_update_an_import()
    {
        $this->actingAs($this->owner, 'api');

        $import = factory(Import::class)->create();

        $attributes           = $import->toArray();
        $attributes['name']   = 'Updated Name';
        $attributes['handle'] = str_handle($attributes['name']);

        // ..when PATCH request submitted
        // ..assert 200 status response
        $response = $this->json(
            'PATCH',
            '/api/imports/'.$import->id,
            $attributes
        )->assertStatus(200);

        // ..assert data was persisted.
        $this->assertDatabaseHas('imports', [
            'name'   => 'Updated Name',
            'handle' => 'updated_name',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group imports
     */
    public function a_user_with_permission_can_delete_an_import()
    {
        $this->actingAs($this->owner, 'api');

        $import = factory(Import::class)->create();

        $response = $this->json(
            'DELETE',
            '/api/imports/'.$import->id
        )->assertStatus(200);
    }
}
