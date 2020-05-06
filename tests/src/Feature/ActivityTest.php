<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Matrix;
use Fusion\Tests\TestCase;
use Illuminate\Support\Collection;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ActivityTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group activity
     */
    public function models_with_activity_logging_will_log_created_event()
    {
    	$attributes = factory(Matrix::class)->make()->toArray();

    	$this
    		->be($this->admin, 'api')
    		->json('POST', '/api/matrices', $attributes);

    	$matrix = Matrix::latest()->first();

    	$this->assertDatabaseHas('activity_log', [
    		'description'  => "Created matrix ({$attributes['name']})",
    		'subject_id'   => $matrix->id,
    		'subject_type' => 'Fusion\Models\Matrix',
    	]);
    }

    /**
     * @test
     * @group fusioncms
     * @group activity
     */
    public function models_with_activity_logging_will_log_updated_event()
    {
		$matrix = factory(Matrix::class)->create();

		$attributes         = $matrix->toArray();
		$attributes['name'] = 'New Name';
		$attributes['slug'] = 'new-name';

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/matrices/' . $matrix->id, $attributes);

		$this->assertDatabaseHas('activity_log', [
			'description'  => "Updated matrix ({$attributes['name']})",
			'subject_id'   => $attributes['id'],
			'subject_type' => 'Fusion\Models\Matrix',
		]);
    }

    /**
     * @test
     * @group fusioncms
     * @group activity
     */
    public function activity_log_will_store_pertenant_info_for_the_dashboard()
    {
    	$this->actingAs($this->admin, 'api');

    	$matrix   = factory(Matrix::class)->create();
    	$activity = Activity::latest('id')->first();

    	$this->assertDatabaseHas('activity_log', [
    		'id'           => $activity->id,
    		'log_name'     => 'default',
    		'description'  => "Created matrix ({$matrix->name})",
    		'subject_id'   => $matrix->id,
    		'subject_type' => 'Fusion\Models\Matrix',
    		'causer_id'    => $this->admin->id,
    		'causer_type'  => 'Fusion\Models\User'
    	]);

    	$this->assertEquals($activity->properties['icon'], 'hashtag');
    	$this->assertEquals($activity->properties['link'], "matrices/{$matrix->id}/edit");
    }

    /**
     * @test
     * @group fusioncms
     * @group activity
     */
    public function hosting_model_can_ask_for_all_activities_recorded_by_it()
    {
    	$matrix = factory(Matrix::class)->create();

    	$this->assertInstanceOf(Collection::class, $matrix->activities);
    	$this->assertInstanceOf(Activity::class, $matrix->activities->first());
    	$this->assertCount(1, $matrix->activities);
    }

    /**
     * @test
     * @group fusioncms
     * @group activity
     */
    public function a_deleted_model_will_delete_its_own_logged_activities()
    {
    	$matrix = factory(Matrix::class)->create();
    	$matrix->delete();

    	$this->assertInstanceOf(Collection::class, $matrix->activities);
    	$this->assertCount(0, $matrix->activities);

    	$this->assertDatabaseMissing('activity_log', [
			'subject_id'   => $matrix->id,
			'subject_type' => 'Fusion\Models\Matrix',
		]);
    }
}