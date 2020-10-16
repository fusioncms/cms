<?php

namespace Fusion\Tests\Unit\Services;

use Fusion\Facades\Version;
use Fusion\Tests\TestCase;

class VersionTest extends TestCase
{
    /** @test */
    public function can_detect_if_new_version_is_available()
    {
        Version::swap(new \Fusion\Services\Version([['title' => FUSION_VERSION]]));

        $this->assertFalse(Version::hasUpdate());

        Version::swap(new \Fusion\Services\Version([['title' => '9999']]));

        $this->assertTrue(Version::hasUpdate());
    }

    /** @test */
    public function can_detect_if_auto_update_is_enabled()
    {
        // disabled
        setting(['updates.auto_update' => 'disabled']);

        $this->assertFalse(Version::isAutoUpdateEnabled());

        // enabled
        setting(['updates.auto_update' => 'enabled']);

        $this->assertTrue(Version::isAutoUpdateEnabled());
    }

    /** @test */
    public function can_standardize_for_semantic_versioning()
    {
        $this->assertEquals('1.0.0', Version::standardize('v1'));
        $this->assertEquals('1.3.0', Version::standardize('v1.3'));
        $this->assertEquals('1.2.1-beta.10', Version::standardize('v1.2.1-beta.10'));
        $this->assertEquals('1.0.0+rc.1', Version::standardize('v1.0+rc.1'));
    }
}
