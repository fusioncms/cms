<?php

namespace Fusion\Tests\Feature\Services;

use Fusion\Facades\Version;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\Bus;

class VersionTest extends TestCase
{
    /**
     * @test
     * @group fusioncms
     * @group services
     * @group version
     */
    public function version_service_can_update_to_latest()
    {
        Bus::fake();

        Version::swap(new \Fusion\Services\Version([['title' => '9999']]));
        Version::update();

        Bus::assertDispatched('Fusion\Jobs\Update', function ($job) {
            return $job->version == Version::latest();
        });
    }
}
