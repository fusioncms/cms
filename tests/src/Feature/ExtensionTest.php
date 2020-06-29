<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Fusion\Models\Fieldset;
use Fusion\Models\Extension;
use Addons\Foobar\Models\Foobar;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExtensionTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $fieldOne = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($section)->create();
        $fieldTwo = \Facades\FieldFactory::withName('Profiles')->withType('user')->withSection($section)->create();
        $fieldset = \Facades\FieldsetFactory::withName('General')->withSections(collect([$section]))->create();

        $this->extension = Extension::where('handle', 'foobars')->first();
        $this->extension->attachFieldset($fieldset);

        $this->model = factory(Foobar::class)->create();
        $this->model = $this->model->fresh();
    }

    /**
     * @test
     * @group fusioncms
     * @group extension
     * @group auth
     */
    public function a_guest_cannot_not_create_an_extension()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/extensions', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group extension
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_extensions()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/extensions');
    }

    /**
     * @test
     * @group fusioncms
     * @group extension
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_an_extension()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/extensions/' . $this->extension->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group extenion
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_extenions()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/extensions/' . $this->extension->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group extension
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_extensions()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/extensions/' . $this->extension->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group extension
     * @group permissions
     */
    public function a_user_without_permissions_cannot_create_new_extension()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/extensions', []);
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function model_with_has_extension_trait_will_be_linked_to_extensions_table()
    {
        $this->assertDatabaseHasTable('ext_foobars');
        $this->assertDatabaseHas('extensions', [
            'name'   => 'Foobars',
            'handle' => 'foobars'
        ]);
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_attached()
    {
        $this->assertInstanceOf(Fieldset::class, $this->model->fieldset);
    	$this->assertCount(2, $this->model->fields);
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function an_extended_model_can_have_a_fieldset_detached()
    {
        $this->extension->detachFieldset();

        $this->assertNull($this->model->fieldset);
        $this->assertInstanceOf(Collection::class, $this->model->fields);
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function creating_extended_model_will_also_update_extending_fields()
    {
        $attributes = factory(Foobar::class)->make()->toArray();

        // extending fields..
        $attributes['content']  = $this->faker->sentence;
        $attributes['profiles'] = factory('Fusion\Models\User', 2)->create()->toArray();

        $this
            ->be($this->owner, 'api')
            ->post('/api/foobar', $attributes)
            ->assertStatus(201);

        $model = Foobar::where('handle', $attributes['handle'])->first();

        $this->assertDataBaseHas('foobars', [
            'name'        => $attributes['name'],
            'handle'      => $attributes['handle'],
            'description' => $attributes['description'],
        ]);

        $this->assertDatabaseHas('ext_foobars', [
            'content' => $attributes['content']
        ]);

        $this->assertDatabaseHas('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\Foobars',
            'pivot_id'   => $model->id,
            'user_id'    => $attributes['profiles'][0]['id']
        ]);

        $this->assertDatabaseHas('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\Foobars',
            'pivot_id'   => $model->id,
            'user_id'    => $attributes['profiles'][1]['id']
        ]);
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function updating_extended_model_will_also_update_extending_fields()
    {
        $attributes = $this->model->toArray();

        // updates..
        $attributes['name']   = 'New Name';
        $attributes['handle'] = 'new_handle';

        // extending fields..
        $attributes['content']  = 'New Content';
        $attributes['profiles'] = factory('Fusion\Models\User', 2)->create()->toArray();

        $this
            ->be($this->owner, 'api')
            ->patch('/api/foobar/' . $this->model->id, $attributes)
            ->assertStatus(200);

        $this->assertDataBaseHas('foobars', [
            'name'        => $attributes['name'],
            'handle'      => $attributes['handle'],
            'description' => $attributes['description'],
        ]);

        $this->assertDatabaseHas('ext_foobars', [
            'content' => $attributes['content']
        ]);

        $this->assertDatabaseHas('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\Foobars',
            'pivot_id'   => $this->model->id,
            'user_id'    => $attributes['profiles'][0]['id']
        ]);

        $this->assertDatabaseHas('users_pivot', [
            'pivot_type' => 'Fusion\Models\Extensions\Foobars',
            'pivot_id'   => $this->model->id,
            'user_id'    => $attributes['profiles'][1]['id']
        ]);
    }

    /**
     * @test
     * @group feature
     * @group extension
     */
    public function extending_fields_can_be_accessed_like_any_other_attribute()
    {
        $attributes = $this->model->toArray();

        // updates..
        $attributes = [
            'name'     => ($name = $this->faker->word),
            'handle'   => str_handle($name),
            'content'  => $this->faker->sentence,
            'profiles' => factory('Fusion\Models\User', 2)->create()->toArray(),
        ];

        $this
            ->be($this->owner, 'api')
            ->patch('/api/foobar/' . $this->model->id, $attributes);

        $this->assertEquals($this->model->content, $attributes['content']);
        $this->assertEquals($this->model->profiles->pluck('id'), collect($attributes['profiles'])->pluck('id'));
    }
}