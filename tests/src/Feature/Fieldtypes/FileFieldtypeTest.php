<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\File;
use Fusion\Models\Directory;
use Fusion\Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FilFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
		parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->section  = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $this->field    = \Facades\FieldFactory::withName('File')->withType('file')->withSection($this->section)->create();
        $this->fieldset = \Facades\FieldsetFactory::withName('General')->withSections(collect([$this->section]))->create();
        $this->matrix   = \Facades\MatrixFactory::withName('Simple Page')->asSingle()->withFieldset($this->fieldset)->create();
        $this->model    = (new \Fusion\Services\Builders\Single($this->matrix->handle))->make();
    
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function assigning_file_to_a_matrix_will_populate_its_pivot_table()
    {
    	Storage::fake('public');

        $attributes = [
            'name' => 'New Page',
            'slug' => 'new-page',
            'file' => [
            	UploadedFile::fake()->image('foobar.png'),
            ],
            'status' => true
        ];

		$this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/' . $this->matrix->id, $attributes)
           	->assertStatus(201);

        $file      = File::latest()->first();
        $directory = Directory::where('slug', 'uploads')->first();

        $this->assertDatabaseHas('files', [
        	'directory_id' => $directory->id,
            'name'         => 'foobar',
            'mimetype'     => 'image/png',
            'extension'    => 'png'
        ]);

        $this->assertDatabaseHas($this->matrix->table, [
            'name' => $attributes['name'],
            'slug' => $attributes['slug']
        ]);

        $this->assertDatabaseHas('files_pivot', [
            'file_id'    => $file->id,
            'field_id'   => $this->field->id,
            'pivot_type' => get_class($this->model),
            'pivot_id'   => $this->matrix->id
        ]);

        Storage::disk('public')->assertExists($file->location);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function user_can_access_assigned_file_as_a_relationship()
    {
        $attributes = [
            'name' => 'New Page',
            'slug' => 'new-page',
            'file' => [
            	UploadedFile::fake()->image('foo.png'),
            	UploadedFile::fake()->image('bar.png'),
            	UploadedFile::fake()->image('baz.png'),
            ],
            'status' => true
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/' . $this->matrix->id, $attributes)
           	->assertStatus(201);

        Cache::flush();
        $entry = $this->model->first();
        
        $this->assertInstanceOf(File::class, $entry->file->first());
        $this->assertCount(3, $entry->file);
    }

}