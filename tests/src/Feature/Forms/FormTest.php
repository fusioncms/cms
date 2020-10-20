<?php

namespace Fusion\Tests\Feature\Forms;

use Facades\FormFactory;
use Fusion\Models\Form;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FormTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_form()
    {
        $attributes = factory(Form::class)->make()->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/forms', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('forms', [
            'name'   => $attributes['name'],
            'handle' => $attributes['handle'],
            'slug'   => $attributes['slug'],
        ]);
    }

    /** @test */
    public function a_newly_created_form_should_create_associated_tables()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/forms', factory(Form::class)->make()->toArray())
            ->assertStatus(201);

        $form = Form::firstOrFail();

        // assert response table exists..
        $this->assertDatabaseHasTable($form->table);

        // assert associated blueprint exists..
        $this->assertDatabaseHas('blueprints', [
            'name'                => $form->name,
            'blueprintable_type'  => Form::class,
            'blueprintable_id'    => $form->id,
        ]);
    }

    /** @test */
    public function a_guest_cannot_create_new_forms()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/forms', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_any_forms()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/forms');
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_form()
    {
        $this->expectException(AuthorizationException::class);

        $form = factory(Form::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/forms/'.$form->id);
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_forms()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/forms', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_formss()
    {
        $this->expectException(AuthorizationException::class);

        $form = factory(Form::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/forms/'.$form->id, []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_forms()
    {
        $this->expectException(AuthorizationException::class);

        $form = factory(Form::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/forms/'.$form->id);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_form()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        // Update ----
        $attributes                = $form->toArray();
        $attributes['description'] = 'This is the new form description';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/forms/'.$form->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas('forms', [
            'id'          => $form->id,
            'description' => $attributes['description'],
        ]);
    }

    /** @test */
    public function an_updated_form_request_will_also_update_associated_blueprint_name()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        $oldName = $form->name;

        // Update ----
        $attributes         = $form->toArray();
        $attributes['name'] = 'New Name';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/forms/'.$form->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseMissing('blueprints', [
            'id'   => $form->blueprint->id,
            'name' => $oldName,
        ]);

        $this->assertDatabaseHas('blueprints', [
            'id'   => $form->blueprint->id,
            'name' => $attributes['name'],
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_form()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', '/api/forms/'.$form->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('forms', [
            'name' => $form->name,
        ]);
    }

    /** @test */
    public function a_deleted_form_request_will_also_delete_associated_tables()
    {
        $this->actingAs($this->owner, 'api');
        $form      = FormFactory::create();
        $blueprint = $form->blueprint;

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', '/api/forms/'.$form->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('blueprints', [
            'id'   => $blueprint->id,
            'name' => $form->name,
        ]);

        // assert response table exists..
        $this->assertDatabaseDoesNotHaveTable($form->table);
    }

    /** @test */
    public function a_form_response_will_be_recorded_in_the_activity_log()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::withName('Contact Us')->create();

        $this
            ->be($this->user)
            ->post($form->path(), []);

        $response = $form->responses()->latest()->first();

        $this->assertDatabaseHas('activity_log', [
            'description' => "Submitted response to {$form->name} (anonymous@example.com)",
            'subject_id'  => $response->id,
            'causer_type' => 'Fusion\Models\User',
            'causer_id'   => $this->user->id,
        ]);
    }

    /** @test */
    public function forms_do_not_collect_ips_on_default()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        // guest form request
        $this
            ->be($this->guest)
            ->post($form->path());

        $this->assertDatabaseMissing($form->table, [
            'form_id'                 => $form->id,
            'identifiable_ip_address' => '127.0.0.1',
        ]);
    }

    /** @test */
    public function a_form_can_be_set_to_collect_ips()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::thatCollectsIPs()->create();

        $this
            ->be($this->guest)
            ->post($form->path());

        $this->assertDatabaseHas($form->table, [
            'form_id'                 => $form->id,
            'identifiable_ip_address' => '127.0.0.1',
        ]);
    }

    /** @test */
    public function a_form_can_be_set_to_collect_emails()
    {
        $this->markTestIncomplete();

        $this->actingAs($this->owner, 'api');
        $form = FormFactory::thatCollectsEmails()->create();

        $this
            ->be($this->user)
            ->post($form->path(), ['identifiable_email_address' => $this->user->email]);

        $this->assertDatabaseHas($form->table, [
            'form_id'                    => $form->id,
            'identifiable_email_address' => $this->user->email,
        ]);
    }

    /** @test */
    public function forms_redirect_to_default_confirmation_page_on_default()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        $this
            ->be($this->user)
            ->post($form->path(), [])
            ->assertStatus(302)
            ->assertRedirect($form->redirect_url);
    }

    /** @test */
    public function a_form_can_be_set_to_redirect_to_custom_page()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::withCustomRedirect('thanks')->create();

        $this
            ->be($this->user)
            ->post($form->path(), [])
            ->assertStatus(302)
            ->assertRedirect($form->redirect_url);
    }

    /** @test */
    public function a_new_form_response_will_notify_all_subscribers()
    {
        $this->markTestIncomplete('This test has not been implemented yet.');
    }

    /** @test */
    public function each_form_must_have_a_unique_slug()
    {
        $this->actingAs($this->owner, 'api');

        $form           = factory(Form::class)->create()->toArray();
        $form['id']     = null;
        $form['handle'] = 'new_handle';

        $this
            ->json('POST', '/api/forms', $form)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /** @test */
    public function each_form_must_have_a_unique_handle()
    {
        $this->actingAs($this->owner, 'api');

        $form         = factory(Form::class)->create()->toArray();
        $form['id']   = null;
        $form['slug'] = 'new-slug';

        $this
            ->json('POST', '/api/forms', $form)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['handle']);
    }

    /** @test */
    public function form_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->owner, 'api');

        $this
            ->json('POST', '/api/forms', ['handle' => 'default'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/forms', ['handle' => 'for'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/forms', ['handle' => 'true'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);
    }

    /** @test */
    public function a_newly_created_form_should_be_logged_as_an_activity()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/forms', factory(Form::class)->make()->toArray());

        $form = Form::firstOrFail();

        $this->assertDatabaseHas('activity_log', [
            'description' => "Created form ({$form->name})",
            'subject_id'  => $form->id,
            'causer_type' => 'Fusion\Models\User',
            'causer_id'   => $this->owner->id,
        ]);
    }

    /** @test */
    public function an_updated_form_should_be_logged_as_an_activity()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        // Update ----
        $attributes         = $form->toArray();
        $attributes['name'] = 'New Name';

        $this->json('PATCH', '/api/forms/'.$form->id, $attributes);

        $this->assertDatabaseHas('activity_log', [
            'description' => "Updated form ({$attributes['name']})",
            'subject_id'  => $form->id,
            'causer_type' => 'Fusion\Models\User',
            'causer_id'   => $this->owner->id,
        ]);
    }

    /** @test */
    public function activities_will_be_cleaned_up_for_form_when_it_is_deleted()
    {
        $this->actingAs($this->owner, 'api');
        $form = FormFactory::create();

        $this->json('DELETE', '/api/forms/'.$form->id);

        $this->assertDatabaseMissing('activity_log', [
            'subject_id'   => $form->id,
            'subject_type' => 'Fusion\Models\Forms',
        ]);
    }
}
