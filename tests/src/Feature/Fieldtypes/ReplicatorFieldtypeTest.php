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
        $fields   = $section->fields;

        // replicators
        $this->assertDatabaseHas('replicators', [
            'name'   => $attributes['name'],
            'handle' => $attributes['handle'],
        ]);

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

        // fields
        $this->assertDatabaseHas('fields', [
            'section_id' => $section->id,
            'name'       => $fields->first()->name,
            'handle'     => $fields->first()->handle,
        ]);
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
        $section = factory(\Fusion\Models\Section::class)->make();
        dd($section);
        // $section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $fieldset = \Facades\FieldsetFactory::withSections([$section])->create();

        // generate field attributes
        $attributes = array_merge([
            'name'     => 'Replicator',
            'handle'   => 'replicator',
            'type'     => 'replicator',
            'settings' => [
                'replicator' => null,
                'fields'     => factory(Field::class, 3)->make()
            ]
        ], $overrides);

        // assign fields
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