<?php

namespace Fusion\Tests\Feature\Services;

use Fusion\Tests\TestCase;
use Fusion\Facades\Version;
use Fusion\Facades\Composer;
use Illuminate\Support\Facades\Queue;

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
    	Queue::fake();
    	Queue::assertPushed('Fusion\Jobs\Backups\BackupRun');

        // Composer::shouldReceive('update')
        //     ->with('fusioncms/cms', Version::latest())
        //     ->once()
        //     ->andReturnTrue();

        Version::update();
    }
}