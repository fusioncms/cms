<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Script;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ScriptTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_guest_cannot_not_create_a_script()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/scripts', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_scripts()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/scripts', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_scripts()
    {
        $this->expectException(AuthorizationException::class);

        $script = Script::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/scripts/'.$script->id, []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_scripts()
    {
        $this->expectException(AuthorizationException::class);

        $script = Script::factory()->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/scripts/'.$script->id);
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_script()
    {
        $script = Script::factory()->make()->toArray();

        $this
            ->actingAs($this->owner, 'api')
            ->json('POST', '/api/scripts', $script)
            ->assertStatus(201);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_script()
    {
        $script              = Script::factory()->create();
        $script->description = 'This is the new script description';

        $this
            ->actingAs($this->owner, 'api')
            ->json('PATCH', '/api/scripts/'.$script->id, $script->toArray())
            ->assertStatus(200);
    }
}
