<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class PasswordTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group auth
     * @group password
     */
    public function a_user_with_permissions_cannot_set_password_of_another_user()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->user->id, [
                'name'                  => $this->user->name,
                'email'                 => $this->user->email,
                'password'              => ($password = Str::random()),
                'password_confirmation' => $password,
            ]);

        $this->assertDatabaseHas('users', [
            'name'     => $this->user->name,
            'email'    => $this->user->email,
            'password' => $this->user->password,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group auth
     * @group password
     */
    public function a_user_with_permissions_can_set_their_own_password()
    {
        $oldPassword = $this->user->password;
        $newPassword = Str::random();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->owner->id, [
                'name'                  => $this->owner->name,
                'email'                 => $this->owner->email,
                'password'              => $newPassword,
                'password_confirmation' => $newPassword,
            ]);

        $owner = $this->owner->fresh();

        $this->assertTrue(Hash::check($newPassword, $owner->password));
        $this->assertFalse(Hash::check($oldPassword, $owner->password));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function password_confirmation_field_is_required_with_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->owner->id, [
                'name'     => $this->owner->name,
                'email'    => $this->owner->email,
                'password' => $this->faker->password
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'password_confirmation' => 'The password confirmation field is required when password is present.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group auth
     * @group password
     */
    public function password_fields_are_not_required_with_update()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->owner->id, [
                'name'  => $this->owner->name,
                'email' => $this->owner->email,
            ]);

        $this->assertDatabaseHas('users', [
            'name'     => $this->owner->name,
            'email'    => $this->owner->email,
            'password' => $this->owner->password,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group auth
     * @group password
     */
    public function new_passwords_must_be_at_least_6_characters_long()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->owner->id, [
                'name'                  => $this->owner->name,
                'email'                 => $this->owner->email,
                'password'              => 'short',
                'password_confirmation' => 'short',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'password' => 'The password field must be at least 6 characters long.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group auth
     * @group password
     */
    public function a_user_without_control_panel_access_cannot_update_a_user_password()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/users', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group auth
     * @group password
     */
    public function a_user_without_permissions_cannot_update_a_user_password()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/users/{$this->owner->id}/password", []);
    }
}
