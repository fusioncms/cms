<?php

namespace Fusion\Tests\Feature\Auth;

use Auth;
use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
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
     */
    public function a_guest_can_visit_the_login_page()
    {
        $this
            ->get('/login')
            ->assertSuccessful()
            ->assertViewIs('auth.login');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_logged_in_user_cannot_visit_the_login_page()
    {
        $this
            ->actingAs($this->user)
            ->get('/login')
            ->assertRedirect('/home');
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_can_login_with_valid_credentials()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'secret',
            ])
            ->assertRedirect('/');

        $this->assertAuthenticatedAs($this->user);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     * @group activity
     */
    public function a_successful_login_will_be_tracked_in_activity_log()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->owner->email,
                'password' => 'secret',
            ]);

        $this->assertDatabaseHas('activity_log', [
            'subject_type' => User::class,
            'subject_id'   => $this->owner->id,
            'causer_type'  => User::class,
            'causer_id'    => $this->owner->id,
            'description'  => "Signed in ({$this->owner->name})",
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_successful_login_will_clear_failed_login_attempts()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->owner->email,
                'password' => 'secret',
            ]);

        $this->assertEquals(0, $this->owner->invalid_logins);
        $this->assertNull($this->owner->invalidly_logged_in_at);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function login_form_requires_a_valid_email()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => 'invalid-email',
                'password' => 'some-password',
            ])
            ->assertRedirect('/login')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_guest_cannot_login_with_invalid_credentials()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'invalid-password',
            ])
            ->assertRedirect('/login')
            ->assertSessionHasErrors('email');

        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_failed_login_attempt_will_record_invalid_attempts()
    {
        $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'invalid-password',
            ]);

        $this->assertEquals(
            1,
            $this->user->fresh()->invalid_logins
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_spammer_cannot_throttle_login()
    {
        for ($i = 0; $i <= 5; $i++) {
            $response = $this
                ->from('/login')
                ->post('/login', [
                    'email'    => 'spammer@example.com',
                    'password' => 'spammer',
                ]);
        }

        $response
            ->assertRedirect('/login')
            ->assertSessionHasErrors('email');

        $this->assertStringContainsString(
            'Too many login attempts.',
            collect(
                $response
                    ->baseResponse
                    ->getSession()
                    ->get('errors')
                    ->getBag('default')
                    ->get('email')
            )->first()
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_logged_in_user_can_opt_to_be_remembered()
    {
        $response = $this
            ->from('/login')
            ->post('/login', [
                'email'    => $this->user->email,
                'password' => 'secret',
                'remember' => true,
            ]);

        $user = $this->user->fresh();

        $response
            ->assertRedirect('/')
            ->assertCookie(Auth::guard()->getRecallerName(), vsprintf('%s|%s|%s', [
                $user->id,
                $user->getRememberToken(),
                $user->password,
            ]));

        $this->assertAuthenticatedAs($user);
    }

    /**
     * @test
     * @group fusioncms
     * @group auth
     */
    public function a_logged_in_user_can_logout()
    {
        $this
            ->be($this->user, 'web')
            ->post('/logout')
            ->assertRedirect('/');

        $this->assertGuest();
    }
}
