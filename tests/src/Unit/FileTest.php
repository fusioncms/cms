<?php

namespace Fusion\Tests\Unit;

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

        $file       = factory(File::class)->create();
        $file       = $file->toArray();
        $file['id'] = null;

        unset($file['isFile'], $file['type'], $file['url']);

        DB::table('files')->insert($file);
    }
}
