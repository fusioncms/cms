<?php

namespace Fusion\Tests\Feature\Taxonomy;

use Fusion\Models\Section;
use Fusion\Models\Taxonomy;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;

class TermTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->taxonomy = Taxonomy::factory()
            ->withName('Tags')
            ->afterCreating(function (Taxonomy $taxonomy) {
                Section::factory()
                    ->withBlueprint($taxonomy->blueprint)
                    ->hasFields(2)
                    ->create();
            })
            ->create();

        $this->field1 = $this->taxonomy->blueprint->fields->get(0);
        $this->field2 = $this->taxonomy->blueprint->fields->get(1);
        $this->model  = (new \Fusion\Services\Builders\Taxonomy($this->taxonomy->handle))->make();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_new_term()
    {
        $attributes = [
            'name'   => ($name = $this->faker->word),
            'slug'   => Str::slug($name),
            'status' => true,
        ];

        $attributes[$this->field1->handle] = $this->faker->word();
        $attributes[$this->field2->handle] = $this->faker->word();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/taxonomies/{$this->taxonomy->id}/terms", $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /** @test */
    public function a_guest_cannot_create_new_terms()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', "/api/taxonomies/{$this->taxonomy->id}/terms", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_any_terms()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/taxonomies/{$this->taxonomy->id}/terms");
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_term()
    {
        $this->expectException(AuthorizationException::class);

        list($term, $attributes) = $this->newTerm();

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/taxonomies/{$this->taxonomy->id}/terms/{$term->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_terms()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/taxonomies/{$this->taxonomy->id}/terms", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_terms()
    {
        $this->expectException(AuthorizationException::class);

        list($term, $attributes) = $this->newTerm();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/taxonomies/{$this->taxonomy->id}/terms/{$term->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_terms()
    {
        $this->expectException(AuthorizationException::class);

        list($term, $attributes) = $this->newTerm();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/taxonomies/{$this->taxonomy->id}/terms/{$term->id}");
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_term()
    {
        list($term, $attributes) = $this->newTerm([
            'name' => 'New Term Name',
            'slug' => 'new-term-name',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Term Name';
        $attributes['slug'] = 'updated-term-name';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/taxonomies/{$this->taxonomy->id}/terms/{$term->id}", $attributes)
            ->assertStatus(200);

        $this->assertDatabaseMissing($this->model->getTable(), [
            'name' => 'New Term Name',
            'slug' => 'new-term-name',
        ]);

        $this->assertDatabaseHas($this->model->getTable(), [
            'name' => 'Updated Term Name',
            'slug' => 'updated-term-name',
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_term()
    {
        list($term, $attributes) = $this->newTerm();

        // Delete ----
        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/taxonomies/{$this->taxonomy->id}/terms/{$term->id}");

        $this->assertDatabaseMissing($this->model->getTable(), ['id' => $term->id]);
    }

    /** @test */
    public function each_term_must_have_a_unique_slug()
    {
        list($term, $attributes) = $this->newTerm();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/taxonomies/{$this->taxonomy->id}/terms", $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new term w/ attributes
     * [Helper].
     *
     * @param array $overrides
     *
     * @return array
     */
    protected function newTerm($overrides = []): array
    {
        $attributes = array_merge([
            'name'   => ($name = $this->faker->word),
            'slug'   => Str::slug($name),
            'status' => $this->faker->boolean,
        ], $overrides);

        $attributes[$this->field1->handle] = $this->faker->word();
        $attributes[$this->field2->handle] = $this->faker->word();

        $term = $this->taxonomy->terms()->create($attributes);

        return [$term, $attributes];
    }
}
