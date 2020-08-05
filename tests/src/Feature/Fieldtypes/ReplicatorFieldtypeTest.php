<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Replicator;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReplicatorFieldtypeTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->fieldset = factory(Fieldset::class)->create(['name' => 'RP Fieldset', 'handle' => 'rp_fieldset']);
        $this->section  = factory(Section::class)->make(['name' => 'RS', 'handle' => 'rs_section']);
        $this->field    = factory(Field::class)->make(['name' => 'RF', 'handle' => 'rf', 'type' => ['handle' => 'replicator']]);

        // some sections to test with..
        $this->sectionA = factory(Section::class)->make(['name' => 'RSA', 'handle' => 'rsa', 'fields' => [
            factory(Field::class)->make(['name' => 'RFA1', 'handle' => 'rfa1']),
            factory(Field::class)->make(['name' => 'RFA2', 'handle' => 'rfa2']),
        ]]);

        $this->sectionB = factory(Section::class)->make(['name' => 'RSB', 'handle' => 'rsb', 'fields' => [
            factory(Field::class)->make(['name' => 'RFB1', 'handle' => 'rfb1']),
            factory(Field::class)->make(['name' => 'RFB2', 'handle' => 'rfb2']),
        ]]);

        $this->sectionC = factory(Section::class)->make(['name' => 'RSC_NEW', 'handle' => 'rsc_new', 'fields' => [
            factory(Field::class)->make(['name' => 'RFC1', 'handle' => 'rfc1']),
            factory(Field::class)->make(['name' => 'RFC2', 'handle' => 'rfc2']),
        ]]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function creating_a_replicator_field_will_auto_generate_tables()
    {
        // create replicator..
        $replicator = $this->createReplicator([$this->sectionA, $this->sectionB]);

        // fieldset
        $this->assertDatabaseHas('fieldsets', [
            'name'   => ($name = 'Replicator: ' . $replicator->name),
            'handle' => str_handle("{$replicator->name}_{$replicator->uniqid}"),
        ]);

        // associated field..
        $this->assertDatabaseHas('fields', [
            'id'       => $replicator->field->id,
            'settings' => json_encode([ 'replicator' => $replicator->id ])
        ]);

        // fieldsettables (not necessary)
        $this->assertDatabaseHas('fieldsettables', [
            'fieldset_id'        => $replicator->fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        // sections
        $replicator->sections->each(function ($section) use ($replicator) {
            $tableName = $replicator->getBuilder($section)->getTable();

            // replicant table..
            $this->assertDatabaseHasTable($tableName);

            // replicant columns..
            $section->fields->each(function ($field) use ($tableName) {
                $this->assertDatabaseTableHasColumn($tableName, $field->handle);
            });
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function updating_a_replicator_field_will_auto_update_tables()
    {
        // create replicator..
        $replicator = $this->createReplicator([$this->sectionA, $this->sectionB]);

        // --
        // set sections for update..
        $updSection = $replicator->sections->get(0);
        $delSection = $replicator->sections->get(1);
        $newSection = $this->sectionC;

        $updSection->name = 'RSA_UPD';
        $updSection->handle = 'rsa_upd';

        // update field..
        $updField = $updSection->fields->first();
        $updField->name = 'RFA_UPD';
        $updField->handle = 'rfa_upd';

        // update section..
        $updSection->name = 'RSA_UPD';
        $updSection->handle = 'rsa_UPD';
        $updSection->fields = [
            $updField,
            $newField = factory(Field::class)->make(['name' => 'RFA3_NEW', 'handle' => 'rfa3_new']),
        ];

        // --
        // update replicator..
        $replicator = $this->updateReplicator($replicator, [$updSection, $newSection]);

        // associated field..
        $this->assertDatabaseHas('fields', [
            'id'       => $replicator->field->id,
            'settings' => json_encode([ 'replicator' => $replicator->id ])
        ]);

        // --
        // replicants..

        // removed section..
        $this->assertDatabaseDoesNotHaveTable(
            str_handle("rp_{$replicator->handle}_{$delSection->handle}_{$replicator->uniqid}")
        );

        // added/updated sections..
        $replicator->sections->each(function ($section) use ($replicator) {
            $tableName = str_handle("rp_{$replicator->handle}_{$section->handle}_{$replicator->uniqid}");

            $this->assertDatabaseHasTable($tableName);

            $section->fields->each(function ($field) use ($tableName) {
                $this->assertDatabaseTableHasColumn($tableName, $field->handle);
            });
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function deleting_a_replicator_field_will_auto_update_tables()
    {
        // create replicator..
        $replicator = $this->createReplicator([$this->sectionA, $this->sectionB]);
        $fieldset = $replicator->fieldset;
        $sections = $replicator->sections;

        // update existing section..
        $section = $this->fieldset->sections()->first();
        $section->fields = [];

        // update request..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [$section],
            ]);

        $this->assertDatabaseMissing('replicators', [
            'id' => $replicator->id,
        ]);

        $this->assertDatabaseMissing('fieldsets', [
            'id' => $fieldset->id,
        ]);

        $this->assertDatabaseHas('fieldsettables', [
            'fieldset_id'        => $fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        $sections->each(function ($section) use ($replicator) {
            $this->assertDatabaseDoesNotHaveTable(
                str_handle("rp_{$replicator->handle}_{$section->handle}_{$replicator->uniqid}")
            );
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function persisting_entry_with_replicator_field_will_persist_to_database()
    {
        // new entry..
        $replicator = $this->createReplicator([$this->sectionA, $this->sectionB]);
        list($entry, $replicants) = $this->createEntryWithReplicant($replicator);

        // --
        // make assertions..
        foreach ($replicator->sections as $section) {
            $builder = $replicator->getBuilder($section);

            foreach ($entry->{"rp_{$section->handle}"} as $replicant) {
                $this->assertDatabaseHas('replicators_pivot', [
                    'replicant_id' => $replicant->id,
                    'section_id'   => $section->id,
                    'pivot_type'   => get_class($entry),
                    'pivot_id'     => $entry->id,
                ]);

                // replicant fields..
                foreach ($section->fields as $field) {
                    $this->assertDatabaseHas($builder->getTable(), [
                        $field->handle => $replicant[$field->handle]
                    ]);
                }
            }
        }
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function updating_replicants_for_replicator_field_will_persist_to_database()
    {
        // new entry..
        $replicator               = $this->createReplicator([$this->sectionA, $this->sectionB]);
        list($entry, $replicants) = $this->createEntryWithReplicant($replicator);
        list($entry, $upd, $del)  = $this->updateEntryWithReplicant($entry, $replicator);

        // --
        // make assertions..
        $del->each(function($removed) use ($replicator, $entry) {
            $section = $removed->section;
            $builder = $replicator->getBuilder($section);

            $this->assertDatabaseMissing('replicators_pivot', [
                'replicant_id' => $removed->id,
                'section_id'   => $section->id,
                'pivot_type'   => get_class($entry),
                'pivot_id'     => $entry->id,
            ]);

            $this->assertDatabaseMissing($builder->getTable(), ['id' => $removed->id]);
        });

        // check for existing records..
        $upd->each(function($updated) use ($replicator, $entry) {
            $section = $updated['section'];
            $builder = $replicator->getBuilder($section);

            $this->assertDatabaseHas('replicators_pivot', [
                'replicant_id' => $updated['id'],
                'section_id'   => $section->id,
                'pivot_type'   => get_class($entry),
                'pivot_id'     => $entry->id,
            ]);

            $this->assertDatabaseHas($builder->getTable(), ['id' => $updated['id']]);
        });
    }

    //
    // ------------------------------------------------
    //

    /**
     * Create replicator helper.
     *
     * @param array $sections
     *
     * @return \Fusion\Models\Replicator
     */
    private function createReplicator($sections)
    {
        // set new field..
        $this->field->settings = [
            'replicator' => null,
            'sections'   => $sections,
        ];

        // set new section..
        $this->section->fields = [
            $this->field,
        ];

        // update request..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [$this->section],
            ]);

        return Replicator::latest()->first();
    }

    /**
     * Create replicator helper.
     *
     * @param Replicator $replicator
     * @param array      $sections
     *
     * @return \Fusion\Models\Replicator
     */
    private function updateReplicator(Replicator $replicator, $sections)
    {
        // update existing field..
        $field = $replicator->field->toArray();
        $field['type'] = ['handle' => 'replicator'];
        $field['settings']['sections'] = $sections;

        // update existing section..
        $section = $this->fieldset->sections()->first();
        $section->fields = [$field];

        // update request..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [$section],
            ]);

        return $replicator->fresh();
    }

    /**
     * POST Entry w/ Replicator Field.
     * [helper]
     * 
     * @param  Replicator $replicator
     * @return array
     */
    private function createEntryWithReplicant(Replicator $replicator)
    {
        $matrix     = \Facades\MatrixFactory::withName($this->faker->word)->asCollection()->withFieldset($this->fieldset)->create();
        $model      = (new \Fusion\Services\Builders\Collection($matrix->handle))->make();
        $replicants = [];

        // generate replicants..
        foreach ($replicator->sections as $section) {
            for ($i = 0; $i < 2; ++$i) {
                $replicant = [
                    'section' => $section,
                    'fields'  => []
                ];

                foreach ($section->fields as $field) {
                    $replicant['fields'][$field->handle] = $this->faker->sentence();
                }

                array_push($replicants, $replicant);
            }
        }

        // --
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$matrix->handle}", [
                'name'              => ($name = $this->faker->word),
                'slug'              => Str::slug($name),
                'status'            => true,
                $replicator->handle => $replicants
            ])
            ->assertStatus(201);
        
        return [$model->first(), $replicants];
    }

    /**
     * PATCH Entry w/ Replicator Field.
     * [helper]
     *
     * @param  Model      $entry
     * @param  Replicator $replicator
     * @param  array      $replicants = []
     *
     * @return array
     */
    private function updateEntryWithReplicant($entry, Replicator $replicator)
    {
        $removed = collect([]);
        $updated = collect([]);

        foreach ($replicator->sections as $section) {
            foreach ($entry->{"rp_{$section->handle}"} as $key => $replicant) {
                if ($key == 0) {
                    $removed->push($replicant);
                } else {
                    $replicant = [
                        'id'      => $replicant->id,
                        'section' => $section,
                        'fields'  => []
                    ];

                    foreach ($section->fields as $field) {
                        $replicant['fields'][$field->handle] = $this->faker->sentence();
                    }

                    $updated->push($replicant);
                }
            }
        }

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/collections/{$entry->matrix->handle}/{$entry->id}", [
                'name'              => $entry->name,
                'slug'              => $entry->slug,
                'status'            => $entry->status,
                $replicator->handle => $updated
            ])
            ->assertStatus(200);

        return [$entry->refresh(), $updated, $removed];
    }
}
