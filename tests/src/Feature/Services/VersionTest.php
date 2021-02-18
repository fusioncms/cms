<?php

namespace Fusion\Tests\Feature\Services;

use Fusion\Facades\Version;
use Fusion\Jobs\Updates\Update;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Bus;

class VersionTest extends TestCase
{
    /** @test */
    public function version_service_can_update_to_latest()
    {
        Bus::fake([Update::class]);

        Version::swap(new \Fusion\Services\Version([['title' => '9999']]));
        Version::update(['--no-backup' => true]);

        Bus::assertDispatched(Update::class, function ($job) {
            return $job->version == Version::latest();
        });
    }
}
