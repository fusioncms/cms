<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Tests\TestCase;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Event;

class ExpiredPasswordTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
        // --
        $this->markTestIncomplete();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function a_guest_cannot_visit_expired_password_form()
    {
        $this->withExceptionHandling();

        $this
            ->get(route('password.expiredForm'))
            ->assertRedirect(route('login'));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function an_authenticated_user_with_valid_password_cannot_visit_expired_password_form()
    {
        $this->withExceptionHandling();

        $this
            ->actingAs($this->user)
            ->get(route('password.expiredForm'))
            ->assertRedirect('/');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function a_newly_authenticated_user_with_expired_password_will_be_redirected_to_set_password()
    {
        $this->user->markPasswordAsExpired();

        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'secret',
            ]);

        $this
            ->get('/')
            ->assertRedirect(route('password.expiredForm'));

        $this->assertTrue($this->user->passwordHasExpired());
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function a_returning_authenticated_user_with_expired_password_will_be_redirected_to_set_password()
    {
        $this->user->markPasswordAsExpired();

        $this
            ->actingAs($this->user)
            ->get('/account/settings')
            ->assertRedirect(route('password.expiredForm'));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function a_user_with_expired_password_can_reset_password()
    {
        $this->user->markPasswordAsExpired();

        $this
            ->actingAs($this->user)
            ->from(route('password.expiredForm'))
            ->post(route('password.expired'), [
                'password'              => 'new-password',
                'password_confirmation' => 'new-password'
            ])
            ->assertRedirect('/');

        $user = $this->user->fresh();

        $this->assertFalse($user->passwordHasExpired());
        $this->assertTrue(Hash::check('new-password', $user->password));
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function setting_password_will_fire_password_reset_event()
    {
        Event::fake([ PasswordReset::class ]);

        $this->user->markPasswordAsExpired();

        $this
            ->actingAs($this->user)
            ->from(route('password.expiredForm'))
            ->post(route('password.expired'), [
                'password'              => 'new-password',
                'password_confirmation' => 'new-password'
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
    public function password_set_form_requires_a_valid_password()
    {
        $this->user->markPasswordAsExpired();

        $this
            ->actingAs($this->user)
            ->from(route('password.expiredForm'))
            ->post(route('password.expired'), [
                'password'              => 'short',
                'password_confirmation' => 'short'
            ])
            ->assertRedirect(route('password.expiredForm'))
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
        $this->user->markPasswordAsExpired();

        $this
            ->actingAs($this->user)
            ->from(route('password.expiredForm'))
            ->post(route('password.expired'), [
                'password'              => 'new-password',
                'password_confirmation' => 'different'
            ])
            ->assertRedirect(route('password.expiredForm'))
            ->assertSessionHasErrors('password');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group password
     */
    public function password_set_form_requires_fresh_password()
    {
        $this->user->markPasswordAsExpired();

        $this
            ->actingAs($this->user)
            ->from(route('password.expiredForm'))
            ->post(route('password.expired'), [
                'password'              => 'secret',
                'password_confirmation' => 'secret'
            ])
            ->assertRedirect(route('password.expiredForm'))
            ->assertSessionHasErrors([
                'password' => 'Password must differ from your current one.'
            ]);
    }
}
