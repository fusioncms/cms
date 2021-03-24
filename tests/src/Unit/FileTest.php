<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Directory;
use Fusion\Models\Disk;
use Fusion\Models\File;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class FileTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function each_file_must_have_a_unique_uuid()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: files.uuid');

        $file       = File::factory()->create();
        $file       = $file->toArray();
        $file['id'] = null;

        unset($file['isFile'], $file['type'], $file['url'], $file['disk']);

        DB::table('files')->insert($file);
    }

    /** @test */
    public function a_file_can_belong_to_a_directory()
    {
        $directory = Directory::factory()->create();
        $file      = File::factory()->withDirectory($directory)->create();

        $this->assertInstanceOf(Directory::class, $file->directory);
    }

    /** @test */
    public function a_file_belongs_to_a_disk()
    {
        $file = File::factory()->create();

        $this->assertInstanceOf(Disk::class, $file->disk);
    }
}
