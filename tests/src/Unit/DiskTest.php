<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Disk;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class DiskTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function each_disk_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: disks.handle');

        $disk       = Disk::factory()->create();
        $disk       = $disk->toArray();
        $disk['id'] = null;
        $disk['configurations'] = json_encode($disk['configurations']);

        DB::table('disks')->insert($disk);
    }
}
