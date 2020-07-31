<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Models\Replicator;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReplicatorFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->fieldset = factory(Fieldset::class)->create(['name' => 'RP Fieldset', 'handle' => 'rp_fieldset']);
        $this->section  = factory(Section::class)->make(['name' => 'RS', 'handle' => 'rs_section']);
        $this->field    = factory(Field::class)->make(['name' => 'RF', 'handle' => 'rf', 'type' => ['handle' => 'replicator']]);
    
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
        $replicator = $this->createReplicator([ $this->sectionA, $this->sectionB ]);

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
        $replicator->sections->each(function($section) use ($replicator) {
            $tableName = $replicator->getBuilder($section)->getTable();

            // replicant table..
            $this->assertDatabaseHasTable($tableName);

            // replicant columns..
            $section->fields->each(function($field) use ($tableName) {
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
        $replicator = $this->createReplicator([ $this->sectionA, $this->sectionB ]);
        
        // --
        // set sections for update..
        $updSection = $replicator->sections->get(0);
        $delSection = $replicator->sections->get(1);
        $newSection = $this->sectionC;

        $updSection->name   = 'RSA_UPD';
        $updSection->handle = 'rsa_upd';

        // update field..
        $updField         = $updSection->fields->first();
        $updField->name   = 'RFA_UPD';
        $updField->handle = 'rfa_upd';

        // update section..
        $updSection->name   = 'RSA_UPD';
        $updSection->handle = 'rsa_UPD';
        $updSection->fields = [
            $updField,
            $newField = factory(Field::class)->make(['name' => 'RFA3_NEW', 'handle' => 'rfa3_new']),
        ];

        // --
        // update replicator..
        $replicator = $this->updateReplicator($replicator, [ $updSection, $newSection ]);

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
        $replicator->sections->each(function($section) use ($replicator) {
            $tableName = str_handle("rp_{$replicator->handle}_{$section->handle}_{$replicator->uniqid}");

            $this->assertDatabaseHasTable($tableName);
            
            $section->fields->each(function($field) use ($tableName) {
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
        $replicator = $this->createReplicator([ $this->sectionA, $this->sectionB ]);
        $fieldset   = $replicator->fieldset;
        $sections   = $replicator->sections;

        // update existing section..
        $section = $this->fieldset->sections()->first();
        $section->fields = [];

        // update request..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);

        $this->assertDatabaseMissing('replicators', [
            'id' => $replicator->id
        ]);
        
        $this->assertDatabaseMissing('fieldsets', [
            'id' => $fieldset->id
        ]);
        
        $this->assertDatabaseHas('fieldsettables', [
            'fieldset_id'        => $fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        $sections->each(function($section) use ($replicator) {
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
    public function persisting_replicator_field_will_persist_its_own_fields()
    {
        // create replicator..
        $replicator = $this->createReplicator([ $this->sectionA, $this->sectionB ]);
        $matrix     = \Facades\MatrixFactory::withName('Collectibles')->asCollection()->withFieldset($this->fieldset)->create();
        $model      = (new \Fusion\Services\Builders\Collection($matrix->handle))->make();

        $sectionA = $replicator->sections->get(0);
        $sectionB = $replicator->sections->get(1);

        // new single attributes..
        $attributes = [
            'name'   => 'Test Page',
            'slug'   => 'test-page',
            'status' => true
        ];

        // relicator field..
        $attributes[$replicator->handle] = [
            [
                'section' => $sectionA->toArray(),
                'fields'  => [ 'rfa1' => 'Foo1', 'rfa2' => 'Bar1' ]
            ],
            [
                'section' => $sectionB->toArray(),
                'fields'  => [ 'rfb1' => 'Baz', 'rfb2' => 'Boz' ]
            ],
            [
                'section' => $sectionA->toArray(),
                'fields'  => [ 'rfa1' => 'Foo2', 'rfa2' => 'Bar2' ]
            ],
        ];

        // persist..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$matrix->handle}", $attributes)
            ->assertStatus(201);
        
        // --
        $instance = $model->first();

        // pivot..
        $replicator->sections->each(function($section) use ($instance) {
            $instance
                ->{"rp_{$section->handle}"}
                ->pluck('id')
                ->each(function($id) use ($instance) {
                    $this->assertDatabaseHas('replicators_pivot', [
                        'replicant_id' => $id,
                        'pivot_type'   => get_class($instance),
                        'pivot_id'     => $instance->id
                    ]);
                });

        });

        foreach ($attributes[$replicator->handle] as $replicant) {
            $section = Section::find($replicant['section']['id']);
            $builder = $replicator->getBuilder($section);

            foreach($replicant['fields'] as $key => $value) {
                $this->assertDatabaseHas($builder->getTable(), [ $key => $value ]);
            }
        }
    }

    //
    // ------------------------------------------------
    //

    /**
     * Create replicator helper.
     *
     * @param  array  $data
     * @return Replicator
     */
    private function createReplicator($data)
    {
        // set new field..
        $this->field->settings = [
            'replicator' => null,
            'sections'   => $data,
        ];

        // set new section..
        $this->section->fields = [
            $this->field
        ];

        // update request..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [ $this->section ]
            ]);

        return Replicator::latest()->first();
    }

    /**
     * Create replicator helper.
     *
     * @param  Replicator $replicator
     * @param  array      $data
     * @return Replicator
     */
    private function updateReplicator(Replicator $replicator, $data)
    {
        // update existing field..
        $field                         = $replicator->field->toArray();
        $field['type']                 = [ 'handle' => 'replicator' ];
        $field['settings']['sections'] = $data;

        // update existing section..
        $section = $this->fieldset->sections()->first();
        $section->fields = [ $field ];

        // update request..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);

        return $replicator->fresh();
    }
}