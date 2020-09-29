<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Tests\TestCase;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class SetPasswordTest extends TestCase
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
     * @group auth
     * @group password
     */
    public function a_valid_user_can_set_password_with_a_valid_token()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->from(route('password.setForm', $validToken))
            ->post(route('password.set'), [
                'token'                 => $validToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        $user = $this->user->fresh();

        $this->assertTrue(Hash::check('new-password', $user->password));
        $this->assertAuthenticatedAs($user);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function setting_a_password_will_fire_password_reset_event()
    {
        Event::fake([PasswordReset::class]);

        $validToken = Password::broker()->createToken($this->user);

        $this
            ->from(route('password.setForm', $validToken))
            ->post(route('password.set'), [
                'token'                 => $validToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        Event::assertDispatched(PasswordReset::class, function ($event) {
            return $event->user->id === $this->user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function a_valid_user_can_set_password_with_a_invalid_token()
    {
        $invalidToken = 'invalid-token';

        $this
            ->from(route('password.setForm', $invalidToken))
            ->post(route('password.set'), [
                'token'                 => $invalidToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'new-password',
            ])
            ->assertRedirect(route('password.setForm', $invalidToken));

        $this->assertTrue(Hash::check('secret', $this->user->password));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function password_set_form_requires_a_valid_password()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->from(route('password.setForm', $validToken))
            ->post(route('password.set'), [
                'token'                 => $validToken,
                'email'                 => $this->user->email,
                'password'              => 'short',
                'password_confirmation' => 'short',
            ])
            ->assertRedirect(route('password.setForm', $validToken))
            ->assertSessionHasErrors('password');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function password_set_form_requires_confirming_password()
    {
        $validToken = Password::broker()->createToken($this->user);

        $this
            ->actingAs($this->user)
            ->from(route('password.setForm', $validToken))
            ->post(route('password.set'), [
                'token'                 => $validToken,
                'email'                 => $this->user->email,
                'password'              => 'new-password',
                'password_confirmation' => 'different',
            ])
            ->assertRedirect(route('password.setForm', $validToken))
            ->assertSessionHasErrors('password');
    }
}
