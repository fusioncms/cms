<?php

namespace Fusion\Tests\Feature\Matrix;

use Facades\FieldsetFactory;
use Fusion\Models\Fieldset;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldsetTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->fieldset = FieldsetFactory::withName('Contacts')
            ->withFields([
                ['name' => 'Email', 'handle' => 'email', 'type' => 'email'],
                ['name' => 'Phone', 'handle' => 'phone', 'type' => 'phone']
            ])->create();
    }

    /** @test */
    public function a_guest_cannot_not_create_a_fieldset()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/fieldsets', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_any_fieldset()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/fieldsets');
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_fieldset()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/fieldsets/{$this->fieldset->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_fieldsets()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/fieldsets', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_fieldsets()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/fieldsets/{$this->fieldset->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_fieldsets()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/fieldsets/{$this->fieldset->id}");
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_fieldset()
    {
        $fieldset = factory(Fieldset::class)->make()->toArray();

        $this
            ->actingAs($this->owner, 'api')
            ->json('POST', '/api/fieldsets', $fieldset)
            ->assertStatus(201);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_fieldset()
    {
        $fieldset           = $this->fieldset->toArray();
        $fieldset['name']   = 'New Name';
        $fieldset['handle'] = 'new_name';

        $this
            ->actingAs($this->owner, 'api')
            ->json('PATCH', "/api/fieldsets/{$fieldset['id']}", $fieldset)
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_a_fieldset()
    {
        $table = $this->fieldset->builderName();

        $this
            ->actingAs($this->owner, 'api')
            ->json('DELETE', "/api/fieldsets/{$this->fieldset->id}")
            ->assertStatus(200);

        $this->assertDatabaseDoesNotHaveTable($table);
    }

    /** @test */
    public function each_fieldset_must_have_a_unique_handle()
    {
        $fieldset       = $this->fieldset->toArray();
        $fieldset['id'] = null;

        $this
            ->actingAs($this->owner, 'api')
            ->json('POST', '/api/fieldsets', $fieldset)
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'handle' => 'The handle has already been taken.'
            ]);
    }

    /** @test */
    public function fieldset_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->owner, 'api');

        $this
            ->json('POST', '/api/fieldsets', ['handle' => 'default'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/fieldsets', ['handle' => 'for'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/fieldsets', ['handle' => 'true'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);
    }

    /** @test */
    public function created_fieldset_should_generate_field_database_columns()
    {
        $this->fieldset->fields->each(function ($field) {
            $this->assertDatabaseTableHasColumn(
                $this->fieldset->builderName(), $field->handle);
        });
    }

    /** @test */
    public function renaming_field_from_fieldset_should_update_database_column()
    {
        $this->fieldset->fields()
            ->where('handle', 'email')->first()
            ->update([
                'name'   => 'E-mail',
                'handle' => 'e_mail',
            ]);

        $this->assertDatabaseTableHasColumn(
            $this->fieldset->builderName(), 'e_mail');

        $this->assertDatabaseTableDoesNotHaveColumn(
            $this->fieldset->builderName(), 'email');
    }

    /** @test */
    public function removing_field_from_fieldset_should_update_database_column()
    {
        $this->fieldset->fields()
            ->where('handle', 'phone')->first()
            ->delete();

        $this->assertDatabaseTableDoesNotHaveColumn(
            $this->fieldset->builderName(), 'phone');
    }
}
