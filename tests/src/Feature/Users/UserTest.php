<?php

namespace Fusion\Tests\Feature\Users;

use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class UserTest extends TestCase
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
     * @group user
     */
    public function a_user_with_permissions_can_create_a_user()
    {
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->unique()->safeEmail,
            'password'              => ($password = '@M-J"ga&t9f9P5'),
            'password_confirmation' => ($password),
            'role'                  => $this->faker->randomElement(['user', 'guest']),
            'status'                => $this->faker->boolean,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/users', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('users', [
            'name'   => $attributes['name'],
            'email'  => $attributes['email'],
            'status' => $attributes['status'],
        ]);

        $newUser = User::orderBy('id', 'desc')->first();

        $this->assertDatabaseHas('activity_log', [
            'subject_type' => User::class,
            'subject_id'   => $newUser->id,
            'causer_type'  => User::class,
            'causer_id'    => $this->owner->id,
            'description'  => "Created user account ({$newUser->name})",
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
    public function a_user_with_permissions_can_update_a_user()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->user->id, [
                'name'                  => ($name = $this->faker->name),
                'email'                 => ($email = $this->faker->unique()->safeEmail),
                'password'              => ($password = '%22CweS3QBZ#d'),
                'password_confirmation' => ($password),
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas('users', [
            'name'   => $name,
            'email'  => $email,
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
    public function password_fields_can_be_ignored_upon_update()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->user->id, [
                'name'  => ($name = $this->faker->name),
                'email' => ($email = $this->faker->unique()->safeEmail),
                // no `password`
                // no `password_confirmation`
            ])
            ->assertStatus(200);

        $this->assertDatabaseHas('users', [
            'name'   => $name,
            'email'  => $email,
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
            ->json('PATCH', '/api/users/'.$this->user->id, [
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
            ->json('PATCH', '/api/users/'.$this->user->id, [])
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
            ->json('PATCH', '/api/users/'.$this->user->id, [
                'name'  => $this->user->name,
                'email' => $this->owner->email,
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'email' => 'The email has already been taken.',
            ]);
    }
}
