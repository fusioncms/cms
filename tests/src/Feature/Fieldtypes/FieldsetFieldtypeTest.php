<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Fieldset;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Services\Builders;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;

class FieldsetFieldtypeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        /**
         * Create Fieldset w/ 2 fields.
         */
        $this->fieldset = Fieldset::factory()
            ->withName('Contacts')
            ->afterCreating(function (Fieldset $fieldset) {
                $fieldset->fields()->create(Field::factory()->withName('email')->withType('email')->make()->toArray());
                $fieldset->fields()->create(Field::factory()->withName('phone')->withType('phone')->withValidation(['value'=>'required'])->make()->toArray());
            })
            ->create();

        /**
         * Create matrix to house Fieldset.
         */
        $this->matrix = Matrix::factory()
            ->asCollection()
            ->withName('Fieldsets')
            ->afterCreating(function (Matrix $matrix) {
                $section = Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create();

                $section->fields()->create(
                    Field::factory()
                            ->withName('Contacts')
                            ->withType('fieldset')
                            ->withSettings(['fieldset' => $this->fieldset->id])
                            ->make()
                            ->toArray()
                );
            })
            ->create();

        $this->field = $this->matrix->blueprint->sections->first()->fields()->first();
        $this->model = Builders\Matrix::resolve($this->matrix->handle);
    }

    /** @test */
    public function persisting_entry_with_fieldset_field_will_persist_to_database()
    {
        $fields = [
            'email' => $this->faker->email,
            'phone' => $this->faker->phoneNumber,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->handle}", [
                'name'                  => ($name = $this->faker->word),
                'slug'                  => Str::slug($name),
                'status'                => true,
                $this->fieldset->handle => $fields,
            ])
            ->assertStatus(201);

        $this->assertDatabaseHas($this->fieldset->getBuilderTable(), [
            'field_id'          => $this->field->id,
            'fieldset_id'       => $this->fieldset->id,
            'fieldsetable_id'   => $this->model->first()->id,
            'fieldsetable_type' => 'Fusion\Models\Collections\\'.Str::studly($this->matrix->handle),
            'email'             => $fields['email'],
            'phone'             => $fields['phone'],
        ]);
    }

    /** @test */
    public function fieldset_fields_will_undergo_validation_checks()
    {
        $fields = [
            'email' => 'invalid-email',
            'phone' => null,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->handle}", [
                'name'                  => ($name = $this->faker->word),
                'slug'                  => Str::slug($name),
                'status'                => true,
                $this->fieldset->handle => $fields,
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                "{$this->fieldset->handle}.email" => 'The email must be a valid email address.',
                "{$this->fieldset->handle}.phone" => 'The phone field is required.',
            ]);
    }
}
