<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Events\UserWelcomed;
use Fusion\Mail\WelcomeNewUser;
use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class RegisterTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
        //--

        // supress any emails..
        Mail::fake();
        Notification::fake();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function an_authenticated_user_cannot_visit_registration_form()
    {
        $this
            ->actingAs($this->user)
            ->get(route('register'))
            ->assertRedirect('/home');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_can_visit_registration_form()
    {
        $this
            ->get(route('register'))
            ->assertViewIs('auth.register');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function registration_form_requires_an_valid_email()
    {
        // Generate new user attributes..
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => 'invalid-email',
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        // Assert - registration returns error
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect(route('register'))
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('name'));
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function registration_form_requires_matching_password_fields()
    {
        // Generate new user attributes..
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'invalid-match',
        ];

        // Assert - registration returns error
        $this
            ->from(route('register'))
            ->post(route('register'), $attributes)
            ->assertRedirect(route('register'))
            ->assertSessionHasErrors('password');

        $this->assertTrue(session()->hasOldInput('name'));
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function successful_registration_will_immediately_authenticate_user()
    {
        $this->assertAuthenticatedAs(
            $this->makeUserRegistration()
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function successful_registration_will_null_password_expiration()
    {
        $user = $this->makeUserRegistration();

        $this->assertFalse($user->passwordHasExpired());
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function successful_registration_will_fire_registrated_event()
    {
        Event::fake([Registered::class]);

        $this->makeUserRegistration();

        Event::assertDispatched(Registered::class);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function successful_registration_will_send_verified_email_if_setting_enabled()
    {
        setting([
            'users.user_email_verification' => 'enabled',
        ]);

        $user = $this->makeUserRegistration();

        Notification::assertSentToTimes($user, VerifyEmail::class, 1);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function successful_registration_will_forgo_email_verification_if_setting_disabled()
    {
        Event::fake([Verified::class]);

        setting([
            'users.user_email_welcome'      => 'disabled',
            'users.user_email_verification' => 'disabled',
        ]);

        $user = $this->makeUserRegistration();

        Event::assertDispatched(Verified::class, function ($mail) use ($user) {
            return $mail->user->id == $user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function verified_registration_will_fire_user_welcomed_event()
    {
        Event::fake([UserWelcomed::class]);

        setting([
            'users.user_email_verification' => 'disabled',
        ]);

        $user = $this->makeUserRegistration();

        Event::assertDispatched(UserWelcomed::class, function ($event) use ($user) {
            return $event->user->id === $user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function verified_registration_will_send_welcome_email_if_setting_enabled()
    {
        setting([
            'users.user_email_welcome'      => 'enabled',
            'users.user_email_verification' => 'disabled',
        ]);

        $user = $this->makeUserRegistration();

        Mail::assertSent(WelcomeNewUser::class, function ($mail) use ($user) {
            return $mail->user->id === $user->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function verified_registration_will_forgo_sending_welcome_email_if_setting_disabled()
    {
        setting([
            'users.user_email_welcome'      => 'disabled',
            'users.user_email_verification' => 'disabled',
        ]);

        $this->makeUserRegistration();

        Mail::assertNotSent(WelcomeNewUser::class);
    }

    // ----------------------------------------

    /**
     * Simulate successful registration form.
     *
     * @return \Fusion\Models\User
     */
    private function makeUserRegistration()
    {
        $attributes = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret-password',
            'password_confirmation' => 'secret-password',
        ];

        $this
            ->from(route('register'))
            ->post(route('register'), $attributes);

        return User::latest('id')->first();
    }
}
