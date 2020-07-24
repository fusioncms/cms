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
        $sectionA = factory(Section::class)->make(['name' => 'RSA', 'handle' => 'rsa']);
        $sectionA->fields = [
            $fieldA1 = factory(Field::class)->make(['name' => 'RFA1', 'handle' => 'rfa1']),
            $fieldA2 = factory(Field::class)->make(['name' => 'RFA2', 'handle' => 'rfa2']),
        ];

        $sectionB = factory(Section::class)->make(['name' => 'RSB', 'handle' => 'rsb']);
        $sectionB->fields = [
            $fieldB1 = factory(Field::class)->make(['name' => 'RFB1', 'handle' => 'rfb1']),
            $fieldB2 = factory(Field::class)->make(['name' => 'RFB2', 'handle' => 'rfb2']),
        ];

        $replicator = $this->createReplicator([$sectionA, $sectionB]);

        $this->assertDatabaseHas('replicators', [
            'name'   => $replicator->name,
            'handle' => $replicator->handle,
            'uniqid' => $replicator->uniqid,
        ]);

        $replicator->sections->each(function($section) use ($replicator) {
            $tableName = $replicator->getBuilder($section)->getTable();

            $this->assertDatabaseHasTable($tableName);
            $this->assertDatabaseTableHasColumn($tableName, $section->fields->get(0)->handle);
            $this->assertDatabaseTableHasColumn($tableName, $section->fields->get(1)->handle);
        });

        $this->assertDatabaseHas('fieldsets', [
            'name'   => ($name = 'Replicator: ' . $replicator->name),
            'handle' => str_handle($name),
        ]);

        $this->assertDatabaseHas('fieldsettables', [
            'fieldset_id'        => $replicator->fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        // $section = $replicator->fieldset->sections()->first();

        // $this->assertDatabaseHas('sections', [
        //     'fieldset_id' => $replicator->fieldset->id,
        //     'name'        => $sectionA->name,
        //     'handle'      => $sectionA->handle,
        // ]);

        // $this->assertDatabaseHas('sections', [
        //     'fieldset_id' => $replicator->fieldset->id,
        //     'name'        => $sectionB->name,
        //     'handle'      => $sectionB->handle,
        // ]);
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
        $replicator = $this->createReplicator([
            factory(Field::class)->make(['name' => 'RF1', 'handle' => 'rf1']),
            factory(Field::class)->make(['name' => 'RF2', 'handle' => 'rf2']),
        ]);

        // update field..
        $fields  = $replicator->fieldset->fields;
        $removed = $fields->shift();
        $updated = $fields->first();
        $updated->update(['name' => 'R - Field Two', 'handle' => 'r_field_two']);

        // update replicator
        $replicator = $this->updateReplicator($replicator, [
            $updated,
            $added = factory(Field::class)->make(['name' => 'RF3', 'handle' => 'rf3']),
        ]);

        $this->assertDatabaseTableDoesNotHaveColumn($replicator->table, $removed->handle);
        $this->assertDatabaseTableHasColumn($replicator->table, $updated->handle);
        $this->assertDatabaseTableHasColumn($replicator->table, $added->handle);
    }


    //
    // ------------------------------------------------
    //

    /**
     * Create replicator helper.
     *
     * @param  array $sections
     * @return Replicator
     */
    private function createReplicator($sections)
    {
        // format fields..
        $sections = collect($sections)->transform(function($section) {
            $section->fields = collect($section->fields)->transform(function($field) {
                $field['type'] = ['handle' => $field['type']];

                return $field;
            });

            return $section;
        });

        // add new replicator field..
        $this->section->fields = [[
            'name'     => 'Complex',
            'handle'   => 'complex',
            'type'     => [ 'handle' => 'replicator' ],
            'help'     => 'purely for testing',
            'order'    => 1,
            'settings' => [
                'replicator' => null,
                'sections'   => $sections
            ]
        ]];

        // update fieldset..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [ 'sections' => $this->section ]
            ]);

        return Replicator::latest()->first();
    }

    /**
     * Returns updated replicator.
     * [Helper]
     *
     * @param  Replicator $replicator
     * @param  array      $fields
     * @return Replicator
     */
    private function updateReplicator(Replicator $replicator, $fields)
    {
        // format fields..
        $fields = collect($fields)->transform(function($field) {
            $field['type'] = ['handle' => $field['type']];
            return $field;
        })->toArray();

        // update replicator field..
        $field                       = $replicator->field->toArray();
        $field['type']               = [ 'handle' => 'replicator' ];
        $field['settings']['fields'] = $fields;

        // update section..
        $section = $this->fieldset->sections()->first();
        $section->fields = [ $field ];

        // update fieldset..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);

        return $replicator->fresh();
    }
}