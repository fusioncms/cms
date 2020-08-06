<?php

namespace Fusion\Tests\Feature;

use Facades\FieldFactory;
use Facades\FieldsetFactory;
use Facades\MatrixFactory;
use Facades\SectionFactory;
use Fusion\Models\Fieldset;
use Fusion\Services\Builders\Single;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FieldsetTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_attached_all_fields_should_generate_database_columns()
    {
        $fieldset = FieldsetFactory::create();
        $matrix   = MatrixFactory::withFieldset($fieldset)->create();
        $table    = $matrix->getBuilder()->getTable();

        $fieldset->fields->each(function ($field) use ($table) {
            $this->assertDatabaseTableHasColumn($table, $field->handle);
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_detached_all_fields_should_drop_database_columns()
    {
        $fieldset = FieldsetFactory::create();
        $matrix   = MatrixFactory::withFieldset($fieldset)->create();
        $table    = $matrix->getBuilder()->getTable();

        $matrix->detachFieldset();

        $fieldset->fields->each(function ($field) use ($table) {
            $this->assertDatabaseTableDoesNotHaveColumn($table, $field->handle);
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_replaced_database_columns_should_merge_if_compatible()
    {
        $redSection  = SectionFactory::times(1)->withoutFields()->create();
        $redFieldOne = FieldFactory::withName('Lorem')->withSection($redSection)->create();
        $redFieldTwo = FieldFactory::withName('Ipsum')->withSection($redSection)->create();
        $redFieldset = FieldsetFactory::withSections(collect([$redSection]))->create();

        $matrix = MatrixFactory::asSingle()->withFieldset($redFieldset)->create();
        $model  = (new Single($matrix->handle))->make();
        $single = $model->create([
            'matrix_id' => $matrix->id,
            'name'      => 'Renamed-single',
            'slug'      => 'renamed-single',
            'status'    => true,
            'lorem'     => 'test',
            'ipsum'     => 'test',
        ]);

        $this->assertDatabaseHas($single->getTable(), [
            'lorem' => 'test',
            'ipsum' => 'test',
        ]);

        $blueSection    = SectionFactory::times(1)->withoutFields()->create();
        $blueFieldOne   = FieldFactory::withName('Lorem')->withSection($blueSection)->create();
        $blueFieldTwo   = FieldFactory::withName('Ipsum')->withSection($blueSection)->create();
        $blueFieldThree = FieldFactory::withName('Dolor')->withSection($blueSection)->create();
        $blueFieldset   = FieldsetFactory::withSections(collect([$blueSection]))->create();

        $matrix->attachFieldset($blueFieldset);

        $this->assertDatabaseHas($single->getTable(), [
            'lorem' => 'test',
            'ipsum' => 'test',
            'dolor' => null,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_replaced_database_columns_should_drop_if_irrelevant()
    {
        $redSection  = SectionFactory::times(1)->withoutFields()->create();
        $redFieldOne = FieldFactory::withName('Lorem')->withSection($redSection)->create();
        $redFieldTwo = FieldFactory::withName('Ipsum')->withSection($redSection)->create();
        $redFieldset = FieldsetFactory::withSections(collect([$redSection]))->create();

        $matrix = MatrixFactory::asSingle()->withFieldset($redFieldset)->create();
        $model  = (new Single($matrix->handle))->make();
        $single = $model->create([
            'matrix_id' => $matrix->id,
            'name'      => 'Renamed-single',
            'slug'      => 'renamed-single',
            'status'    => true,
            'lorem'     => 'test',
            'ipsum'     => 'test',
        ]);

        $this->assertDatabaseHas($single->getTable(), [
            'lorem' => 'test',
            'ipsum' => 'test',
        ]);

        $blueSection    = SectionFactory::times(1)->withoutFields()->create();
        $blueFieldOne   = FieldFactory::withName('Lorem')->withSection($blueSection)->create();
        $blueFieldTwo   = FieldFactory::withName('Dolor')->withSection($blueSection)->create();
        $blueFieldThree = FieldFactory::withName('Sit')->withSection($blueSection)->create();
        $blueFieldset   = FieldsetFactory::withSections(collect([$blueSection]))->create();

        $matrix->attachFieldset($blueFieldset);

        $this->assertDatabaseTableDoesNotHaveColumn($single->getTable(), 'ipsum');
        $this->assertDatabaseTableHasColumn($single->getTable(), 'dolor');
        $this->assertDatabaseTableHasColumn($single->getTable(), 'sit');

        $this->assertDatabaseHas($single->getTable(), [
            'lorem' => 'test',
            'dolor' => null,
            'sit'   => null,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_a_field_is_added_a_database_column_should_be_generated_on_all_attached_tables()
    {
        $fieldset    = FieldsetFactory::create();
        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();

        $section = $fieldset->sections()->first();
        $field   = FieldFactory::withName('Example')->withSection($section)->create();

        $fieldset->sections()->first()->fields()->save($field);

        $this->assertDatabaseTableHasColumn($postsTable, $field->handle);
        $this->assertDatabaseTableHasColumn($newsTable, $field->handle);
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_a_field_is_removed_the_associated_database_column_should_be_removed_from_all_tables()
    {
        $fieldset = FieldsetFactory::create();
        $section  = $fieldset->sections()->first();
        $field    = FieldFactory::withName('Example')->withSection($section)->create();

        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();

        $fieldset->sections()->first()->fields()->save($field);
        $fieldset->sections()->first()->fields()->find($field->id)->delete();

        $this->assertDatabaseTableDoesNotHaveColumn($postsTable, $field->handle);
        $this->assertDatabaseTableDoesNotHaveColumn($newsTable, $field->handle);
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_a_field_is_renamed_the_associated_database_column_should_also_be_renamed()
    {
        $fieldset    = FieldsetFactory::create();
        $postsMatrix = MatrixFactory::withName('Posts')->withFieldset($fieldset)->create();
        $newsMatrix  = MatrixFactory::withName('News')->withFieldset($fieldset)->create();
        $postsTable  = $postsMatrix->getBuilder()->getTable();
        $newsTable   = $newsMatrix->getBuilder()->getTable();

        $section = $fieldset->sections()->first();
        $field   = FieldFactory::withName('Example')->withSection($section)->create();

        $section->fields()->save($field);

        $this->assertDatabaseTableHasColumn($postsTable, $field->handle);
        $this->assertDatabaseTableHasColumn($newsTable, $field->handle);

        $fieldInstance         = $fieldset->sections()->first()->fields()->first();
        $fieldInstance->name   = 'Renamed';
        $fieldInstance->handle = 'renamed';

        $fieldInstance->save();

        $this->assertDatabaseTableHasColumn($postsTable, $fieldInstance->handle);
        $this->assertDatabaseTableHasColumn($newsTable, $fieldInstance->handle);
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_a_fields_fieldtype_is_changed_the_associated_database_columns_type_should_also_change()
    {
        $fieldset = FieldsetFactory::create();
        $section  = $fieldset->sections()->first();
        $field    = FieldFactory::withSection($section)->create();

        $section->fields()->save($field);

        $matrix = MatrixFactory::withFieldset($fieldset)->create();
        $table  = $matrix->getBuilder()->getTable();

        $this->assertDatabaseTableColumnHasType($table, $field->handle, 'string');

        $field->type = 'textarea';
        $field->save();

        $this->assertDatabaseTableColumnHasType($table, $field->handle, 'text');
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_a_field_is_retyped_the_associated_database_column_should_also_be_retyped()
    {
        $section  = SectionFactory::times(1)->withoutFields()->create();
        $fieldOne = FieldFactory::withName('Foo')->withSection($section)->create();
        $fieldset = FieldsetFactory::withSections(collect([$section]))->create();

        $matrix = MatrixFactory::asSingle()->withFieldset($fieldset)->create();
        $table  = $matrix->getBuilder()->getTable();

        // Assert column & type are correct..
        $this->assertDatabaseTableColumnHasType(
            $table,
            $fieldOne->handle,
            $fieldOne->type()->cast
        );

        // Remove old field..
        $section->fields()->find($fieldOne->id)->delete();

        // Create new field in it's place..
        $fieldTwo = FieldFactory::withName('Foo')->withType('number')->create();
        $section->fields()->save($fieldTwo);

        // Assert column & type are correct..
        $this->assertDatabaseTableColumnHasType(
            $table,
            $fieldTwo->handle,
            $fieldTwo->type()->cast
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function when_a_field_is_renamed_and_new_field_created_in_its_name_database_should_have_both_columns()
    {
        // Create fieldset..
        $section  = SectionFactory::times(1)->withoutFields()->create();
        $fieldA   = FieldFactory::withName('Foo')->withSection($section)->create();
        $fieldset = FieldsetFactory::withSections([$section])->create();

        // Assign to matrix..
        $matrix = MatrixFactory::asSingle()->withFieldset($fieldset)->create();
        $table  = $matrix->getBuilder()->getTable();

        // old field - updated
        $fieldA->name   = 'Bar';
        $fieldA->handle = 'bar';
        $fieldA->type   = ['handle' => 'textarea'];

        // new field - w/ previous name
        $fieldB = factory(\Fusion\Models\Field::class)->make(['name' => 'Foo', 'handle' => 'foo']);

        $section         = $section->fresh();
        $section->fields = [$fieldA, $fieldB];

        // Save fieldset through API..
        $this
            ->be($this->owner, 'api')
            ->json(
                'POST',
                '/api/fieldsets/'.$fieldset->id.'/sections',
                ['sections' => [$section]]
            );

        // original field - updated
        $this->assertDatabaseTableHasColumn($table, 'bar');
        $this->assertDatabaseTableColumnHasType($table, 'bar', 'text');
        $this->assertDatabaseTableHasColumn($table, 'foo');
        $this->assertDatabaseTableColumnHasType($table, 'foo', 'string');
    }

    /**
     * @test
     * @group fusioncms
     * @group fieldset
     */
    public function each_fieldset_must_have_a_unique_handle()
    {
        $this->actingAs($this->owner, 'api');

        $fieldset       = FieldsetFactory::withName('Foo')->create();
        $fieldset       = $fieldset->toArray();
        $fieldset['id'] = null;

        $response = $this
            ->json('POST', 'api/fieldsets', $fieldset)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['handle']);
    }
}
