<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Channel;
use Fusion\Models\Notification;
use Fusion\Models\User;
use Fusion\Notifications\Auth\NewUserRegistration;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification as NotificationFacade;

class NotificationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        Mail::fake();
        NotificationFacade::fake();
    }

    /** @test */
    public function a_user_with_permission_can_subscribe_notifications_to_a_user()
    {
        $attributes = [
            'name'          => $this->faker->name,
            'email'         => $this->faker->unique()->safeEmail,
            'role'          => 'user',
            'subscriptions' => [
                [
                    'channel_id'      => Channel::first()->id,
                    'notification_id' => Notification::first()->id,
                ],
            ],
        ];

        $this
            ->be($this->admin)
            ->json('POST', '/api/users', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('notifications_users', [
            'user_id'         => User::latest('id')->first()->id,
            'channel_id'      => $attributes['subscriptions'][0]['channel_id'],
            'notification_id' => $attributes['subscriptions'][0]['notification_id'],
        ]);
    }

    /** @test */
    public function a_user_will_receive_a_notification_they_are_subscribed_to()
    {
        $this->admin->subscribeTo([
            'channel_id'      => Channel::where('handle', 'mail')->first()->id,
            'notification_id' => Notification::first()->id,
        ]);

        $newUser = $this->makeUserRegistration();

        NotificationFacade::assertSentTo(
            $this->admin,
            function (NewUserRegistration $notification, $channels) use ($newUser) {
                return $channels == $this->admin->via(NewUserRegistration::class) &&
                       $notification->user->id == $newUser->id;
            }
        );
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
