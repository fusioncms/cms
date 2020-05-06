<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Fusion\Models\Mailable;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MailableTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	public function setUp(): void
    {
        parent::setUp();

		Mailable::registerNewMailables();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group mailable
     */
	public function a_user_with_permission_can_update_a_mailable()
	{
    	// Storage::fake('temp');
		$this->actingAs($this->admin, 'api');

		$model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

		$newData = [
        	'name'     => ($name = $this->faker->word),
        	'handle'   => Str::slug($name, '_'),
        	'markdown' => $this->faker->text
        ];

        $response = $this->json('PATCH', '/api/mailables/' . $model->id, $newData)
        	->assertStatus(200);

        $this->assertDatabaseHas('mailables', $newData);
	}

	/**
     * @test
     * @group fusioncms
     * @group mailable
     */
	public function a_guest_cannot_not_update_a_mailable()
	{
		$this->expectException(AuthenticationException::class);

		$model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $response = $this->json('PATCH', '/api/mailables/' . $model->id, [])
        	->assertStatus(422);
	}

	/**
     * @test
     * @group fusioncms
     * @group mailable
     */
	public function a_user_cannot_update_a_mailable_without_required_fields()
	{
		$this->actingAs($this->admin, 'api');

		$model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        $response = $this->json('PATCH', '/api/mailables/' . $model->id, [])
        	->assertStatus(422)
        	->assertJsonValidationErrors(['name']);
	}

    /**
     * @test
     * @group fusioncms
     * @group fusioncms
     * @group mailable
     * @group activity
     */
    public function an_updated_mailable_should_be_logged_as_an_activity()
    {
        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();

        // Update ----
        $attributes         = $model->toArray();
        $attributes['name'] = 'New Name';

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/mailables/' . $model->id, $attributes);

        $this->assertDatabaseHas('activity_log', [
            'description' => "Updated mailable ({$attributes['name']})",
            'subject_id'  => $model->id,
        ]);
    }
}