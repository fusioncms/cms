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
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileFieldtypeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        Storage::fake('public');

        $this->disk      = Disk::where('handle', 'public')->first();
        $this->directory = Directory::factory()->create(['disk_id' => $this->disk->id, 'name' => 'uploads']);
        // --

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
                                    [
                                        '_id'  => '1234',
                                        'disk' => $this->disk->id,
                                        'path' => $this->directory->slug,
                                    ],
                                ],
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
    public function uploading_file_to_matrix_entry_will_create_new_file_record()
    {
        list($entry, $attributes) = $this->generateNewEntry();

        $this->assertDatabaseHas('files', [
            'disk_id'      => $this->disk->id,
            'directory_id' => $this->directory->id,
            'name'         => $attributes['name'],
        ]);
    }

    /** @test */
    public function uploading_file_to_matrix_entry_will_save_to_the_correct_storage()
    {
        list($entry, $attributes) = $this->generateNewEntry();

        $file = $entry->file->first();

        Storage::disk($this->disk->handle)->assertExists($file->location);
    }

    /** @test */
    public function assigning_file_to_a_matrix_will_populate_its_pivot_table()
    {
        list($entry, $attributes) = $this->generateNewEntry();

        $file = $entry->file->first();

        $this->assertDatabaseHas('files_pivot', [
            'file_id'    => $file->id,
            'pivot_type' => get_class($this->model),
            'pivot_id'   => $this->matrix->id,
        ]);
    }

    /** @test */
    public function user_can_access_assigned_file_as_a_relationship()
    {
        list($entry, $attributes) = $this->generateNewEntry([
            'file' => [
                UploadedFile::fake()->image('foo.png'),
                UploadedFile::fake()->image('bar.png'),
                UploadedFile::fake()->image('baz.png'),
            ],
        ]);

        Cache::flush();

        $this->assertInstanceOf(File::class, $entry->file->first());
        $this->assertCount(3, $entry->file);
    }

    /** @test */
    public function additional_directories_will_be_created_if_necessary()
    {
        // Alter disk/directory path..
        $this->field->update([
            'settings' => array_merge($this->field->settings->toArray(), [
                'directory' => [
                    ['_id' => '1234', 'disk' => $this->disk->id, 'path' => 'another'],
                ],
            ]),
        ]);

        list($entry, $attributes) = $this->generateNewEntry();

        $file      = $entry->file->first();
        $directory = Directory::where('slug', 'another')->first();

        $this->assertDatabaseHas('directories', [
            'disk_id' => $this->disk->id,
            'name'    => 'Another',
            'slug'    => 'another',
        ]);

        $this->assertDatabaseHas('files', [
            'id'           => $file->id,
            'disk_id'      => $this->disk->id,
            'directory_id' => $directory->id,
        ]);
    }

    /**
     * Generates new entry with attribute overrides.
     * [Helper].
     *
     * @param array $overrides
     *
     * @return \Fusion\Models\Singles\{...}
     */
    private function generateNewEntry(array $overrides = [])
    {
        $attributes = array_merge([
            'name' => ($name = $this->faker->word),
            'slug' => ($slug = Str::slug($name)),
            'file' => [
                UploadedFile::fake()->image("{$slug}.png"),
            ],
            'status' => true,
        ], $overrides);

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", $attributes);

        return [$this->model->latest()->first(), $attributes];
    }
}
