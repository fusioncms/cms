<?php

namespace Fusion\Tests\Unit;

use Facades\FieldsetFactory;
use Fusion\Models\Field;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class FieldsetTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->fieldset = FieldsetFactory::withName('Contacts')
            ->withFields([
                ['name' => 'Email', 'handle' => 'email', 'type' => 'email'],
                ['name' => 'Phone', 'handle' => 'phone', 'type' => 'phone'],
            ])->create();
    }

    /** @test */
    public function a_fieldset_can_have_multiple_fields()
    {
        $this->assertInstanceOf(Field::class, $this->fieldset->fields->first());
    }

    /** @test */
    public function a_database_table_is_created_with_a_fieldset()
    {
        $this->assertDatabaseHasTable("fx_{$this->fieldset->handle}");
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_fieldset()
    {
        $this->fieldset->name   = 'Address';
        $this->fieldset->handle = 'address';
        $this->fieldset->save();

        $this->assertDatabaseHasTable('fx_address');
    }

    /** @test */
    public function each_fieldset_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: fieldsets.handle');

        $fieldset       = $this->fieldset->toArray();
        $fieldset['id'] = null;

        DB::table('fieldsets')->insert($fieldset);
    }
}
