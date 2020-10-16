<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Form;
use Fusion\Services\Builders\Collection;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FormFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = \Facades\MatrixFactory::withName('FooBar')
            ->asCollection()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'   => 'Form',
                            'handle' => 'form',
                            'type'   => 'form',
                        ],
                    ],
                ],
            ])
            ->create();

        $this->fieldForm = $this->matrix->blueprint->sections->first()->fields()->first();
        $this->model     = (new Collection($this->matrix->handle))->make();
        $this->forms     = factory(Form::class, 3)->create();
    }

    /** @test */
    public function assigning_forms_to_a_matrix_will_populate_its_pivot_table()
    {
        $attributes = [
            'name' => 'New Post',
            'slug' => 'new post',
            'form' => [
                $this->forms->get(0)->toArray(),
                $this->forms->get(1)->toArray(),
            ],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/collections/foobar', $attributes);

        $entry = $this->model->first();

        $this->assertDatabaseHas($this->matrix->table, [
            'name' => $attributes['name'],
            'slug' => $attributes['slug'],
        ]);

        $this->assertDatabaseHas('forms_pivot', [
            'form_id'    => $this->forms->first()->id,
            'field_id'   => $this->fieldForm->id,
            'pivot_type' => 'Fusion\Models\Collections\Foobar',
            'pivot_id'   => $entry->id,
        ]);

        $this->assertDatabaseHas('forms_pivot', [
            'form_id'    => $this->forms->get(1)->id,
            'field_id'   => $this->fieldForm->id,
            'pivot_type' => 'Fusion\Models\Collections\Foobar',
            'pivot_id'   => $entry->id,
        ]);
    }

    /** @test */
    public function number_of_forms_assigned_to_matrix_can_be_limited_through_validation()
    {
        // add validation
        $this->fieldForm->validation = 'array|size:2';
        $this->fieldForm->save();

        $attributes = [
            'name' => 'New Post',
            'slug' => 'new post',
            'form' => [
                $this->forms->get(0)->toArray(),
                $this->forms->get(1)->toArray(),
                $this->forms->get(2)->toArray(),
            ],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/collections/foobar', $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['form' => 'The Form must contain 2 items.']);
    }

    /** @test */
    public function user_can_access_assigned_form_as_a_relationship()
    {
        $attributes = [
            'name' => 'New Post',
            'slug' => 'new post',
            'form' => [
                $this->forms->get(0)->toArray(),
                $this->forms->get(1)->toArray(),
                $this->forms->get(2)->toArray(),
            ],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/collections/foobar', $attributes);

        \Cache::flush();
        $entry = $this->model->first();

        $this->assertInstanceOf('Fusion\Models\Form', $entry->form->first());
        $this->assertCount(3, $entry->form);
    }
}
