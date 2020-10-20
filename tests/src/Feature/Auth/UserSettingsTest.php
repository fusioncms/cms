<?php

namespace Fusion\Tests\Feature\Auth;

use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\ValidationException;

class UserSettingsTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_visitor_can_not_access_account_settings()
    {
        $this->expectException(AuthenticationException::class);

        $this->get('/account/settings');
    }

    /** @test */
    public function an_unverified_user_cannot_access_account_settings_if_verficiation_enabled()
    {
        setting(['users.user_email_verification' => 'enabled']);

        $this
            ->be($this->unverifiedUser)
            ->get('/account/settings')
            ->assertStatus(302)
            ->assertRedirect('/email/verify');
    }

    /** @test */
    public function an_unverified_user_can_access_account_settings_if_verficiation_disabled()
    {
        setting(['users.user_email_verification' => 'disabled']);

        $this
            ->be($this->user)
            ->get('/account/settings')
            ->assertStatus(200);
    }

    /** @test */
    public function a_verified_user_can_access_account_settings()
    {
        $this
            ->be($this->owner)
            ->get('/account/settings')
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_can_update_their_personal_information()
    {
        $attributes = [
            'name'  => $this->faker->name,
            'email' => $this->user->email,
        ];

        $this
            ->be($this->user)
            ->post('/account/settings', $attributes);

        $this->assertDatabaseHas('users', [
            'id'    => $this->user->id,
            'name'  => $attributes['name'],
            'email' => $attributes['email'],
        ]);
    }

    /** @test */
    public function a_user_will_need_to_verify_an_updated_email_if_setting_enabled()
    {
        Notification::fake();

        setting([
            'users.user_email_verification' => 'enabled',
        ]);

        $this
            ->be($this->user)
            ->post('/account/settings', [
                'name'  => $this->user->name,
                'email' => $this->faker->unique()->safeEmail,
            ]);

        $this->assertFalse($this->user->fresh()->hasVerifiedEmail());

        Notification::assertSentTo($this->user, VerifyEmail::class);
    }

    /** @test */
    public function email_verification_will_be_forgoed_when_for_email_updates_if_setting_disabled()
    {
        Notification::fake();

        setting([
            'users.user_email_verification' => 'disabled',
        ]);

        $this
            ->be($this->user)
            ->post('/account/settings', [
                'name'  => $this->user->name,
                'email' => $this->faker->unique()->safeEmail,
            ]);

        $this->assertTrue($this->user->fresh()->hasVerifiedEmail());

        Notification::assertNothingSent($this->user, VerifyEmail::class);
    }

    /** @test */
    public function name_and_email_fields_are_required_to_update()
    {
        $this->expectException(ValidationException::class);

        $this
            ->be($this->owner)
            ->post('/account/settings', [])
            ->assertStatus(302)
            ->assertJsonValidationErrors([
                'name'  => 'The name field is required.',
                'email' => 'The email field is required.',
            ]);
    }

    /** @test */
    public function a_user_can_update_their_own_password()
    {
        $this->withoutMiddleware([
            \Illuminate\Auth\Middleware\RequirePassword::class,
        ]);

        $oldPassword = $this->owner->password;
        $newPassword = '@M-J"ga&t9f9P5';

        $this
            ->be($this->owner)
            ->from('account/security')
            ->post('account/security', [
                'password'              => $newPassword,
                'password_confirmation' => $newPassword,
            ]);

        $user = $this->owner->fresh();

        $this->assertTrue(Hash::check($newPassword, $user->password));
        $this->assertFalse(Hash::check($oldPassword, $user->password));
    }

    /** @test */
    public function a_user_will_need_to_confirm_their_password_before_updating_their_password()
    {
        $this->user->update([
            'email_verified_at' => now(),
            'password'          => bcrypt('secret123'),
        ]);

        // 1) redirect to password confirm screen..
        $this
            ->be($this->user)
            ->get('account/security')
            ->assertStatus(302)
            ->assertRedirect(route('password.confirm'));

        // 2) confirm password to redirect back..
        $this
            ->post(route('password.confirm'), ['password' => 'secret123'])
            ->assertStatus(302)
            ->assertRedirect('account/security');
    }
}
