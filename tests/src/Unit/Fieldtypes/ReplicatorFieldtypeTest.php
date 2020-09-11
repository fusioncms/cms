<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Field;
use Fusion\Models\Replicator;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class ReplicatorFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->markTestIncomplete();

        // --
        $this->section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->field    = \Facades\FieldFactory::withName('Replicator')->withType('replicator')->withSection($this->section)->withSettings(['replicator'=>null, 'sections'=>[]])->create();
        $this->fieldset = \Facades\FieldsetFactory::withSections(collect([$this->section]))->create();

        DB::table('replicators')->insert([
            'field_id' => $this->field->id,
            'name'     => 'Content',
            'handle'   => 'content',
            'uniqid'   => unique_id(5),
        ]);

        $this->replicator = Replicator::first();
    }

    /**
     * @test
     * @group unit
     * @group fieldtypes
     * @group replicator
     */
    public function each_replicator_belongs_to_a_field()
    {
        $this->assertInstanceOf(Field::class, $this->replicator->field);
        $this->assertTrue($this->replicator->field->id == $this->field->id);
    }
}
