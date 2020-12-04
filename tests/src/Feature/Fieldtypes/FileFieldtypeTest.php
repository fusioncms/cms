<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Directory;
use Fusion\Models\Field;
use Fusion\Models\File;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Services\Builders\Single;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class FileFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->asSingle()
            ->withName('File Field')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create()
                    ->fields()
                    ->create(
                        Field::factory()
                            ->withName('File')
                            ->withType('file')
                            ->make()
                            ->toArray()
                );
            })
            ->create();

        $this->model = (new Single($this->matrix->handle))->make();
    }

    /** @test */
    public function assigning_file_to_a_matrix_will_populate_its_pivot_table()
    {
        Storage::fake('public');

        $attributes = [
            'name' => 'New Page',
            'slug' => 'new-page',
            'file' => [
                UploadedFile::fake()->image('foobar.png'),
            ],
            'status' => true,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", $attributes)
            ->assertStatus(201);

        $file      = File::latest()->first();
        $directory = Directory::where('slug', 'uploads')->first();

        $this->assertDatabaseHas('files', [
            'directory_id' => $directory->id,
            'name'         => 'foobar',
            'mimetype'     => 'image/png',
            'extension'    => 'png',
        ]);

        $this->assertDatabaseHas($this->matrix->getBuilderTable(), [
            'name' => $attributes['name'],
            'slug' => $attributes['slug'],
        ]);

        $this->assertDatabaseHas('files_pivot', [
            'file_id'    => $file->id,
            'pivot_type' => get_class($this->model),
            'pivot_id'   => $this->matrix->id,
        ]);

        Storage::disk('public')->assertExists($file->location);
    }

    /** @test */
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
            'status' => true,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", $attributes)
            ->assertStatus(201);

        Cache::flush();
        $entry = $this->model->first();

        $this->assertInstanceOf(File::class, $entry->file->first());
        $this->assertCount(3, $entry->file);
    }
}
