<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Fusion\Models\Field;
use Fusion\Models\Replicator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReplicatorFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->field    = \Facades\FieldFactory::withName('Replicator')->withType('replicator')->withSection($this->section)->create();
        $this->fieldset = \Facades\FieldsetFactory::withSections(collect([$this->section]))->create();
    
        DB::table('replicators')->insert([
            'field_id' => $this->field->id,
            'name'     => 'Content',
            'handle'   => 'content_12345',
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

    /**
     * @test
     * @group unit
     * @group fieldtypes
     * @group replicator
     */
    public function each_replicator_has_many_replicants()
    {
        $this->assertInstanceOf(
            'Illuminate\Support\Collection',
            $this->replicator->replicants
        );

        $this->assertInstanceOf(
            'Illuminate\Database\Eloquent\Relations\HasMany',
            $this->replicator->replicants()
        );
    }
}