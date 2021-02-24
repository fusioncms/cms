<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Directory;
use Fusion\Models\Disk;
use Fusion\Models\Field;
use Fusion\Models\File;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Services\Builders;
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

        // --
        Storage::fake('public');
        Storage::fake('local');

        $disks = Disk::all();
        $this->publicDisk = $disks->get(0);
        $this->localDisk = $disks->get(1);

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
                            ->withSettings([
                                'directory' => [
                                    $this->publicDisk->id => [
                                        'status' => true,
                                        'path'   => 'uploads'
                                    ]
                                ]
                            ])
                            ->make()
                            ->toArray()
                    );
            })
            ->create();

        $this->field = $this->matrix->blueprint->fields->first();
        $this->model = Builders\Matrix::resolve($this->matrix->handle);
    }

    /** @test */
    public function assigning_file_to_a_matrix_will_populate_its_pivot_table()
    {
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

        $file = File::latest()->first();

        $this->assertDatabaseHas('files', [
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
