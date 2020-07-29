<?php

namespace Fusion\Tests\Feature\Settings;

use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mail;

class MailTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_with_permissions_can_update_mail_settings()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/api', [
                'personal_access_tokens' => 'enabled',
            ])->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_without_permissions_can_not_update_mail_settings()
    {
        $this->expectException(AuthenticationException::class);

        $this
            ->json('PATCH', 'api/settings/mail', [])
            ->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function most_settings_are_required_to_have_a_value()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/api', [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['personal_access_tokens']);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function an_update_to_mail_settings_will_reflect_in_the_settings_file()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/api', [
                'personal_access_tokens' => 'enabled',
            ])->assertStatus(200);

        $this->assertDatabaseHas('settings_api', [
            'personal_access_tokens' => 'enabled',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_with_permissions_can_send_a_test_email()
    {
        Mail::fake();

        $this->actingAs($this->owner, 'api');
        $this->json('GET', 'api/mail/test', []);

        Mail::assertSent(\Fusion\Mail\WelcomeNewUser::class, function ($mail) {
            return $mail->user->id === $this->owner->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_without_permissions_can_not_send_a_test_email()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('GET', 'api/settings/mail', []);
    }
}
