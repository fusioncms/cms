<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Fusion\Models\Field;
use Fusion\Models\Replicator;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReplicatorFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function assigning_replicator_field_to_fieldset_will_auto_generate_tables()
    {
        list($replicator, $fieldset, $attributes) = $this->newReplicator([
            'name'   => 'Complex',
            'handle' => 'complex',
        ]);

        // replicators
        $this->assertDatabaseHas('replicators', [
            'name' => $attributes['name'],
        ]);

        $this->assertDatabaseHasTable($replicator->table);

        // fieldsets
        $this->assertDatabaseHas('fieldsets', [
            'name'   => ($name = 'Replicator: ' . $replicator->name),
            'handle' => str_handle($name),
        ]);

        // fieldsetables
        $this->assertDatabaseHas('fieldsettables', [
            'fieldset_id'        => $replicator->fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        // sections
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
    public function creating_replicator_fields_will_update_replicator_table()
    {
        list($replicator, $fieldset, $attributes) = $this->newReplicator([
            'name'   => 'Complex',
            'handle' => 'complex',
        ]);

        $fields = $replicator->fieldset->fields;

        $this->assertDatabaseTableHasColumn($replicator->table, $fields->get(0)->handle);
        $this->assertDatabaseTableHasColumn($replicator->table, $fields->get(1)->handle);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     * @group replicator
     */
    public function updating_replicator_fields_will_update_replicator_table()
    {
        list($replicator, $fieldset, $attributes) = $this->newReplicator([
            'name'   => 'Complex',
            'handle' => 'complex',
        ]);

        // get fields..
        $fields = $replicator->fieldset->fields;

        // remove field..
        $removed = $fields->shift();

        // add field..
        $fields->push(factory(Field::class)->make(['name'=>'R - Field 3','handle'=>'r_field_3'])->toArray());

        // format for save..
        $fields->transform(function($field) {
            $field['type'] = ['handle' => $field['type']];

            return $field;
        });

        // alter replicator fields..
        $field                       = $replicator->field->toArray();
        $field['type']               = [ 'handle' => 'replicator' ];
        $field['settings']['fields'] = $fields;

        // --
        // prepare save
        $section = $fieldset->sections()->first();
        $section->fields = [ $field ];
dump('--');
        // update
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);
dd('--');
        $fields = $replicator->fieldset->fields;

        $this->assertDatabaseTableDoesNotHaveColumn($replicator->table, $removed->handle);
        $this->assertDatabaseTableHasColumn($replicator->table, $fields->get(0)->handle);
        $this->assertDatabaseTableHasColumn($replicator->table, $fields->get(1)->handle);
    }


    //
    // ------------------------------------------------
    //

    /**
     * Returns new replicator w/ attributes
     * [Helper]
     *
     * @param  array  $overrides
     * @return array
     */
    private function newReplicator($overrides = [])
    {
        $fieldset = factory(\Fusion\Models\Fieldset::class)->create([
            'name'   => 'RP Fieldset',
            'handle' => 'rp_fieldset'
        ]);

        $section = factory(\Fusion\Models\Section::class)->make([
            'name'   => 'RP Section',
            'handle' => 'rp_section'
        ]);

        $field1 = factory(Field::class)->make([
            'name'   => 'R - Field 1',
            'handle' => 'r_field_1',
            'type'   => ['handle' => 'input']
        ]);

        $field2 = factory(Field::class)->make([
            'name'   => 'R - Field 2',
            'handle' => 'r_field_2',
            'type'   => ['handle' => 'input']
        ]);

        // generate field attributes
        $attributes = array_merge([
            'name'     => 'Replicator',
            'handle'   => 'replicator',
            'type'     => [ 'handle' => 'replicator' ],
            'help'     => '',
            'order'    => 1,
            'settings' => [
                'replicator' => null,
                'fields'     => [$field1, $field2]
            ]
        ], $overrides);

        $section->fields = [ $attributes ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);

        $replicator = Replicator::latest()->first();
        $fieldset   = $fieldset->fresh();

        return [$replicator, $fieldset, $attributes];
    }
}