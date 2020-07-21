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
        list($replicator, $attributes) = $this->newReplicator([
            'name'   => 'Complex',
            'handle' => 'complex',
        ]);

        $fieldset = $replicator->fieldset;
        $section  = $fieldset->sections()->first();

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
            'fieldset_id'        => $fieldset->id,
            'fieldsettable_type' => Replicator::class,
            'fieldsettable_id'   => $replicator->id,
        ]);

        // sections
        $this->assertDatabaseHas('sections', [
            'fieldset_id' => $fieldset->id,
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
        list($replicator, $attributes) = $this->newReplicator([
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
        list($replicator, $attributes) = $this->newReplicator([
            'name'   => 'Complex',
            'handle' => 'complex',
        ]);

        $fieldset = $replicator->fieldset;
        $section  = $fieldset->sections->first();
        $fields   = $section->fields;

        // remove field..
        $removed = $fields->shift();

        // add field
        $fields->push(factory(Field::class)->make()->toArray());

        // alter replicator field..
        $field = $replicator->field->toArray();
        $field['type'] = [ 'type' => 'replicator' ];
        $field['settings']['fields'] = $fields;

        $section->fields = [ $field ];

        // update
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);

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
        $section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $fieldset = \Facades\FieldsetFactory::withSections([$section])->create();

        // generate field attributes
        $attributes = array_merge([
            'name'     => 'Replicator',
            'handle'   => 'replicator',
            'type'     => 'replicator',
            'settings' => [
                'replicator' => null,
                'fields'     => factory(Field::class, 2)->make()
            ]
        ], $overrides);

        $section->fields = [ $attributes ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/fieldsets/{$fieldset->id}/sections", [
                'sections' => [ $section ]
            ]);

        $replicator = Replicator::latest()->first();

        return [$replicator, $attributes];
    }
}