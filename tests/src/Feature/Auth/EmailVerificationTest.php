<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Mail\WelcomeNewUser;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\URL;

class EmailVerificationTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // suppress any emails..
        Mail::fake();

        // assume email verifications are enabled..
        setting([
            'users.user_email_verification' => 'enabled',
        ]);
    }

    /** @test */
    public function a_guest_cannot_see_the_verification_notice()
    {
        $this->withExceptionHandling();

        $this
            ->get(route('verification.notice'))
            ->assertRedirect('/login');
    }

    /** @test */
    public function an_unverified_user_will_see_verification_notice()
    {
        $this
            ->actingAs($this->unverifiedUser)
            ->get(route('verification.notice'))
            ->assertStatus(200)
            ->assertViewIs('auth.verify');
    }

    /** @test */
    public function an_unverified_user_will_not_see_verification_notice_if_user_email_verification_setting_disabled()
    {
        setting([
            'users.user_email_verification' => 'disabled',
        ]);

        $this
            ->actingAs($this->user)
            ->get(route('verification.notice'))
            ->assertStatus(302)
            ->assertRedirect('/');
    }

    /** @test */
    public function a_verified_user_will_not_see_verification_notice()
    {
        $this
            ->actingAs($this->user)
            ->get(route('verification.notice'))
            ->assertRedirect('/');
    }

    /** @test */
    public function a_guest_cannot_visit_verification_verify_route()
    {
        $this->withExceptionHandling();

        // Manually create email verify route for user..
        // Creating for `unverified user`.
        $validSignature = URL::signedRoute('verification.verify', [
            'id'   => $this->unverifiedUser->id,
            'hash' => sha1($this->unverifiedUser->email),
        ]);

        $this
            ->get($validSignature)
            ->assertRedirect('/login');
    }

    /** @test */
    public function a_user_cannot_verify_another_user()
    {
        $this->withExceptionHandling();

        // Manually create email verify route for user..
        // Creating for `unverified user`.
        $validSignature = URL::signedRoute('verification.verify', [
            'id'   => $this->unverifiedUser->id,
            'hash' => sha1($this->unverifiedUser->email),
        ]);

        $this
            ->actingAs($this->owner)
            ->get($validSignature)
            ->assertStatus(403);

        // assert user is still unverified..
        $this->assertFalse(
            $this->unverifiedUser->fresh()->hasVerifiedEmail()
        );
    }

    /** @test */
    public function a_verification_is_forbidden_for_invalid_signature()
    {
        $this->withExceptionHandling();

        // Manually create invalid verification signature..
        // Creating for `unverified user`.
        $invalidSignature = URL::signedRoute('verification.verify', [
            'id'   => 123,
            'hash' => sha1($this->unverifiedUser->email),
        ]);

        $this
            ->actingAs($this->unverifiedUser)
            ->get($invalidSignature)
            ->assertStatus(403);

        // assert user is still unverified..
        $this->assertFalse(
            $this->unverifiedUser->fresh()->hasVerifiedEmail()
        );
    }

    /** @test */
    public function a_user_can_verify_themselves()
    {
        $this->assertTrue(
            $this
                ->verifyUser($this->unverifiedUser)
                ->hasVerifiedEmail()
        );
    }

    /** @test */
    public function a_newly_verified_user_will_receive_welcome_email_if_setting_enabled()
    {
        setting([
            'users.user_email_welcome' => 'enabled',
        ]);

        $user = $this->verifyUser($this->unverifiedUser);

        Mail::assertSent(WelcomeNewUser::class, function ($mail) use ($user) {
            return $mail->user->id === $user->id;
        });
    }

    /** @test */
    public function a_newly_verified_user_will_not_receive_welcome_email_if_setting_disabled()
    {
        setting([
            'users.user_email_welcome' => 'disabled',
        ]);

        $this->verifyUser($this->unverifiedUser);

        Mail::assertNotSent(WelcomeNewUser::class);
    }

    /** @test */
    public function a_guest_cannot_resend_verification_email()
    {
        $this->withExceptionHandling();

        $this
            ->post(route('verification.resend'))
            ->assertRedirect('/login');
    }

    /** @test */
    public function an_already_verified_user_will_be_redirected()
    {
        $this
            ->actingAs($this->user)
            ->post(route('verification.resend'))
            ->assertRedirect('/');
    }

    /** @test */
    public function an_unverified_user_can_resend_verification_email()
    {
        Notification::fake();

        $response = $this
            ->actingAs($this->unverifiedUser)
            ->from(route('verification.notice'))
            ->post(route('verification.resend'))
            ->assertRedirect(route('verification.notice'));

        Notification::assertSentTo($this->unverifiedUser, VerifyEmail::class);
    }

    // ----------------------------------------

    /**
     * Successfully verify user.
     * [helper].
     *
     * @param \Fusion\Models\User $user
     *
     * @return \Fusion\Models\User
     */
    private function verifyUser($user)
    {
        // Manually create email verify route for user..
        // Creating for `unverified user`.
        $route = URL::signedRoute('verification.verify', [
            'id'   => $user->id,
            'hash' => sha1($user->email),
        ]);

        $this
            ->actingAs($user)
            ->get($route)
            ->assertRedirect('/');

        return $user->fresh();
    }
}
