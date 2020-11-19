<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Facades\FieldsetFactory;
use Facades\MatrixFactory;
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

        $this->fieldset = FieldsetFactory::withName('Contacts')
            ->withFields([
                ['name' => 'Email', 'handle' => 'email', 'type' => 'email'],
                ['name' => 'Phone', 'handle' => 'phone', 'type' => 'phone', 'validation' => ['value' => 'required']],
            ])->create();

        $this->matrix = MatrixFactory::withName($this->faker->word)
            ->asCollection()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'       => 'Contacts',
                            'handle'     => 'contacts',
                            'type'       => 'fieldset',
                            'settings'   => ['fieldset' => $this->fieldset->id],
                            'validation' => ['value' => ''],
                        ],
                    ],
                ],
            ])
            ->create();

        $this->model = (new \Fusion\Services\Builders\Collection($this->matrix->handle))->make();
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

        $this->assertDatabaseHas($this->fieldset->builderName(), [
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
                "{$this->fieldset->handle}.email" => 'The Email must be a valid email address.',
                "{$this->fieldset->handle}.phone" => 'The Phone field is required.',
            ]);
    }
}
