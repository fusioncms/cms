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
        $this->section  = factory(Section::class)->make(['name' => 'RP Section','handle' => 'rp_section']);
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
        $replicator = $this->createReplicator([
            $field1 = factory(Field::class)->make(['name' => 'RF1', 'handle' => 'rf1']),
            $field2 = factory(Field::class)->make(['name' => 'RF2', 'handle' => 'rf2']),
        ]);

        $this->assertDatabaseHas('replicators', [
            'name'   => $replicator->name,
            'handle' => $replicator->handle,
        ]);

        $this->assertDatabaseHasTable($replicator->table);
        $this->assertDatabaseTableHasColumn($replicator->table, $field1->handle);
        $this->assertDatabaseTableHasColumn($replicator->table, $field2->handle);

        $this->assertDatabaseHas('fieldsets', [
            'name'   => ($name = 'Replicator: ' . $replicator->name),
            'handle' => str_handle($name),
        ]);

        $this->assertDatabaseHas('fieldsettables', [
            'fieldset_id'        => $replicator->fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        $section = $replicator->fieldset->sections()->first();

        $this->assertDatabaseHas('sections', [
            'fieldset_id' => $replicator->fieldset->id,
            'name'        => $section->name,
            'handle'      => $section->handle,
        ]);
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
     * @param  array $fields
     * @return Replicator
     */
    private function createReplicator($fields)
    {
        // format fields..
        $fields = collect($fields)->transform(function($field) {
            $field['type'] = ['handle' => $field['type']];
            return $field;
        })->toArray();

        // add new replicator field..
        $this->section->fields = [[
            'name'     => 'Complex',
            'handle'   => 'complex',
            'type'     => [ 'handle' => 'replicator' ],
            'help'     => 'purely for testing',
            'order'    => 1,
            'settings' => [
                'replicator' => null,
                'fields'     => $fields
            ]
        ]];

        // update fieldset..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$this->fieldset->id}/sections", [
                'sections' => [ $this->section ]
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