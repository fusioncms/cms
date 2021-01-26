<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\{Channel,Notification,Subscription,User};
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class SubscriptionTest extends TestCase
{
    use RefreshDatabase;

    private $subscription;

    public function setUp(): void
    {
        parent::setUp();

        $this->subscription = Subscription::create([
            'user_id'         => $this->user->id,
            'channel_id'      => 1,
            'notification_id' => 1,
        ]);
    }

    /** @test */
    public function each_subscription_must_have_a_unique_combination_of_ids()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: notifications_users.user_id, notifications_users.channel_id, notifications_users.notification_id');

        DB::table('notifications_users')->insert(
            $this->subscription->toArray()
        );
    }

    /** @test */
    public function a_subscription_belongs_to_a_user()
    {
        $this->assertInstanceOf(User::class, $this->subscription->user);
    }

    /** @test */
    public function a_subscription_belongs_to_a_channel()
    {
        $this->assertInstanceOf(Channel::class, $this->subscription->channel);
    }

    /** @test */
    public function a_subscription_belongs_to_a_notification()
    {
        $this->assertInstanceOf(Notification::class, $this->subscription->notification);
    }
}
