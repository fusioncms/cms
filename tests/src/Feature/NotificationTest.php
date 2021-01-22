<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\{Channel,Notification};
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Notification as NotificationFacade;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NotificationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_with_permissions_can_subscribe_to_a_notification()
    {
        $attributes = [
            'channel'      => Channel::first()->id,
            'notification' => Notification::first()->id,
        ];

        $this
            ->be($this->admin)
            ->json('POST', "/api/users/{$this->user->id}/subscriptions/subscribe", $attributes)
            ->assertStatus(201);

    	$this->assertTrue(
            $this->user->hasSubscription($attributes['channel'], $attributes['notification'])
        );
    }

    /** @test */
    public function a_user_can_unsubscribe_to_a_notification()
    {
    	$channel      = Channel::where('handle', 'mail')->first();
    	$notification = Notification::where('handle','auth_new_user_registration')->first();

    	$this->user->subscribeTo($channel, $notification);

    	$this->user->unsubscribeFrom($channel, $notification);

    	$this->assertFalse($this->user->hasSubscription($channel, $notification));
    }

    /** @test */
    public function a_user_will_be_notified_through_their_subscriptions()
    {
    	NotificationFacade::fake();

    	$channel      = Channel::where('handle', 'mail')->first();
    	$notification = Notification::where('handle','auth_new_user_registration')->first();

    	$this->user->subscribeTo($channel, $notification);

    	$notification->notifySubscriber($this->guest);

    	NotificationFacade::assertSentTo(
            [$this->user], \Fusion\Notifications\Auth\NewUserRegistration::class
        );
    }
}
