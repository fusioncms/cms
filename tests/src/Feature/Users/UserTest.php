<?php

namespace Fusion\Tests\Feature\Users;

use Fusion\Mail\ConfirmNewUser;
use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class UserTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->attributes = [
            'name'   => $this->faker->name,
            'email'  => $this->faker->unique()->safeEmail,
            'role'   => $this->faker->randomElement(['user', 'guest']),
            'status' => $this->faker->boolean,
        ];

        // suppress any emails..
        Mail::fake();
        Notification::fake();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function a_user_with_permissions_can_create_a_user()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/users', $this->attributes)
            ->assertStatus(201);

        // user..
        $this->assertDatabaseHas('users', [
            'name'   => $this->attributes['name'],
            'email'  => $this->attributes['email'],
            'status' => $this->attributes['status'],
        ]);

        // role..
        $this->assertTrue(
            User::latest('id')->first()->hasRole($this->attributes['role'])
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     * @group password
     */
    public function a_newly_created_user_will_receive_password_set_notification()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/users', [
                'name'  => $this->faker->name,
                'email' => $this->faker->unique()->safeEmail,
            ]);

        /**
         * Users created from back-end will have
         *   to first confirm themselves before
         *   authenticating.
         *
         *  1) Verify e-mail address.
         *  2) Set their own password.
         */
        Mail::assertSent(ConfirmNewUser::class, function ($mail) {
            return $mail->user->id === User::latest('id')->first()->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function new_user_creations_will_be_recorded_in_activity_log()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/users', $this->attributes)
            ->assertStatus(201);

        $user = User::latest('id')->first();

        $this->assertDatabaseHas('activity_log', [
            'subject_type' => User::class,
            'subject_id'   => $user->id,
            'causer_type'  => User::class,
            'causer_id'    => $this->owner->id,
            'description'  => "Created user account ({$user->name})",
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function a_user_without_control_panel_access_cannot_create_new_users()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/users', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_users()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/users');
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_a_user()
    {
        $this->expectException(AuthorizationException::class);

        $user = factory(User::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/users/'.$user->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     * @group permissions
     */
    public function a_user_without_permissions_cannot_create_new_users()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/users', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_users()
    {
        $this->expectException(AuthorizationException::class);

        $user = factory(User::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/users/'.$user->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_users()
    {
        $this->expectException(AuthorizationException::class);

        $user = factory(User::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/users/'.$user->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function a_user_with_permissions_can_update_a_user_profile()
    {
        $attributes = [
            'name'  => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'role'  => 'admin',
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->owner->id}", $attributes);

        // user..
        $this->assertDatabaseHas('users', [
            'name'  => $attributes['name'],
            'email' => $attributes['email'],
        ]);

        $user = $this->owner->fresh();

        // role..
        $this->assertFalse($user->hasRole('owner'));
        $this->assertTrue($user->hasRole('admin'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group password
     */
    public function password_fields_are_not_required_when_updating_user_profile()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->owner->id}", [
                'name'  => $this->owner->name,
                'email' => $this->owner->email,
            ]);

        $this->assertTrue(
            Hash::check('secret', $this->owner->fresh()->password)
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group password
     */
    public function a_user_with_permissions_cannot_update_the_password_of_another_user()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->user->id}", [
                'name'                  => $this->user->name,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        $this->assertFalse(
            Hash::check('new-password', $this->user->fresh()->password)
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group password
     */
    public function a_user_with_permissions_can_update_their_own_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->owner->id}", [
                'name'                  => $this->owner->name,
                'email'                 => $this->owner->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        $this->assertTrue(
            Hash::check('new-password', $this->owner->fresh()->password)
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group password
     */
    public function password_updates_will_be_recorded_in_the_database()
    {
        $lastChanged = $this->owner->password_changed_at;

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->owner->id}", [
                'name'                  => $this->owner->name,
                'email'                 => $this->owner->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        $this->assertTrue($lastChanged <
            $this->owner->fresh()->password_changed_at);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group password
     */
    public function password_confirmation_field_is_required_when_updating_a_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->owner->id}", [
                'name'     => $this->owner->name,
                'email'    => $this->owner->email,
                'password' => $this->faker->password,
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
     * @group password
     */
    public function new_passwords_must_be_at_least_6_characters_long()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->owner->id}", [
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
     * @group user
     */
    public function user_updates_will_be_recorded_in_activity_log()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->user->id}", [
                'name'  => ($name  = $this->faker->name),
                'email' => ($email = $this->faker->unique()->safeEmail),
            ]);

        $this->assertDatabaseHas('activity_log', [
            'subject_type' => User::class,
            'subject_id'   => $this->user->id,
            'causer_type'  => User::class,
            'causer_id'    => $this->owner->id,
            'description'  => "Updated user account ({$name})",
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function a_user_cannot_be_assigned_invalid_role()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->user->id}", [
                'name'  => $this->user->name,
                'email' => $this->user->email,
                'role'  => 'fake-role',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'role' => 'The selected role is invalid.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function name_and_email_fields_are_always_required()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->user->id}", [])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'name'  => 'The name field is required.',
                'email' => 'The email field is required.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function each_user_must_have_a_unique_email()
    {
        $user       = factory(User::class)->create()->toArray();
        $user['id'] = null;

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/users', $user)
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'email' => 'The email has already been taken.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function existing_user_cannot_use_an_already_taken_email()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/users/{$this->user->id}", [
                'name'  => $this->user->name,
                'email' => $this->owner->email,
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'email' => 'The email has already been taken.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function a_user_with_permission_can_resend_email_verification_to_another_user()
    {
        setting([
            'users.user_email_verification' => 'enabled',
        ]);

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/users/{$this->user->id}/verify")
            ->assertStatus(202);

        $this->assertFalse($this->user->fresh()->hasVerifiedEmail());

        Notification::assertSentTo($this->user, VerifyEmail::class);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group user
     */
    public function a_user_with_permission_can_send_user_reset_password_notification()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/users/{$this->user->id}/reset-password")
            ->assertStatus(202);

        Notification::assertSentTo($this->user, ResetPassword::class);
    }
}
