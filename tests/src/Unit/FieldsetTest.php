<?php

namespace Fusion\Tests\Unit;

use Facades\FieldFactory;
use Facades\FieldsetFactory;
use Facades\SectionFactory;
use Fusion\Models\Fieldset;
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

        $this->sectionContacts = SectionFactory::times(1)->withFields(
            factory(Field::class)->create(['name' => 'Email', 'handle' => 'email', 'type' => 'email']),
            factory(Field::class)->create(['name' => 'Phone', 'handle' => 'phone', 'type' => 'phone']),
        )->create();
    }

    /** @test */
    public function a_fieldset_can_have_multiple_fields()
    {
        $fieldset = FieldsetFactory::withName('Contact')
            ->withSection($this->sectionContacts);

        $this->assertInstanceOf(Field::class, $fieldset->fields->first());
    }

    public function a_database_table_is_created_with_a_fieldset()
    {
        $fieldset = FieldsetFactory::withName('Contacts')->create();

        $this->assertDatabaseHasTable("fx_{$fieldset->handle}");
    }

    public function the_database_table_is_renamed_when_renaming_a_fieldset()
    {
        $fieldset = FieldsetFactory::withName('Contacts')->create();

        $this->assertDatabaseHasTable('fx_contacts');

        $fieldset->name   = 'Address';
        $fieldset->handle = 'address';
        $fieldset->save();

        $this->assertDatabaseHasTable('fx_address');
    }

    public function each_fieldset_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: fieldsets.handle');

        $fieldset       = factory(Fieldset::class)->create();
        $fieldset       = $fieldset->toArray();
        $fieldset['id'] = null;

        DB::table('fieldsets')->insert($fieldset);
    }
}
