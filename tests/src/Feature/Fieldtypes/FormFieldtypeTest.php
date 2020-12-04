<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Form;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Services\Builders\Collection;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;

class FormFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->asCollection()
            ->withName('Form Field')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create()
                    ->fields()
                    ->create(
                        Field::factory()
                            ->withName('Form')
                            ->withType('form')
                            ->make()
                            ->toArray()
                    );
            })
            ->create();

        $this->field = $this->matrix->blueprint->fields->first();
        $this->model = (new Collection($this->matrix->handle))->make();
        $this->forms = Form::factory()->count(3)->create();
    }

    /** @test */
    public function assigning_forms_to_a_matrix_will_populate_its_pivot_table()
    {
        $attributes = [
            'name' => 'New Post',
            'slug' => 'new post',
            'form' => [
                $this->forms->get(0)->id,
                $this->forms->get(1)->id,
            ],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->slug}", $attributes);

        $entry = $this->model->first();

        $this->assertDatabaseHas($this->matrix->getBuilderTable(), [
            'name' => $attributes['name'],
            'slug' => $attributes['slug'],
        ]);

        $this->assertDatabaseHas('forms_pivot', [
            'form_id'    => $this->forms->first()->id,
            'field_id'   => $this->field->id,
            'pivot_type' => get_class($this->model),
            'pivot_id'   => $entry->id,
        ]);

        $this->assertDatabaseHas('forms_pivot', [
            'form_id'    => $this->forms->get(1)->id,
            'field_id'   => $this->field->id,
            'pivot_type' => get_class($this->model),
            'pivot_id'   => $entry->id,
        ]);
    }

    /** @test */
    public function number_of_forms_assigned_to_matrix_can_be_limited_through_validation()
    {
        // add validation
        $this->field->validation = ['value' => 'array|size:2'];
        $this->field->save();

        $attributes = [
            'name' => 'New Post',
            'slug' => 'new post',
            'form' => [
                $this->forms->get(0)->id,
                $this->forms->get(1)->id,
                $this->forms->get(2)->id,
            ],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->slug}", $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'form' => 'The Form must contain 2 items.',
            ]);
    }

    /** @test */
    public function user_can_access_assigned_form_as_a_relationship()
    {
        $attributes = [
            'name' => 'New Post',
            'slug' => 'new post',
            'form' => [
                $this->forms->get(0)->id,
                $this->forms->get(1)->id,
                $this->forms->get(2)->id,
            ],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->slug}", $attributes);

        Cache::flush();
        $entry = $this->model->first();

        $this->assertInstanceOf(Form::class, $entry->form->first());
        $this->assertCount(3, $entry->form);
    }
}
