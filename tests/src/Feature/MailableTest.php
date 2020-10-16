<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Mailable;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;

class MailableTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permission_can_update_a_mailable()
    {
        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $newData = [
            'name'     => ($name = $this->faker->word),
            'handle'   => Str::slug($name, '_'),
            'markdown' => $this->faker->text,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/mailables/'.$model->id, $newData)
            ->assertStatus(200);

        $this->assertDatabaseHas('mailables', $newData);
    }

    /** @test */
    public function a_guest_cannot_not_update_a_mailable()
    {
        $this->expectException(AuthenticationException::class);

        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $this->json('PATCH', '/api/mailables/'.$model->id, []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_mailable()
    {
        $this->expectException(AuthorizationException::class);

        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/mailables/'.$model->id);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_mailables()
    {
        $this->expectException(AuthorizationException::class);

        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/mailables/'.$model->id, []);
    }

    /** @test */
    public function a_user_cannot_update_a_mailable_without_required_fields()
    {
        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/mailables/'.$model->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name']);
    }
}
