<?php

namespace Fusion\Tests\Unit;

use Fusion\Facades\Version;
use Fusion\Tests\TestCase;

class VersionTest extends TestCase
{
    /**
     * @test
     * @group unit
     * @group services
     * @group version
     */
    public function can_standardize_for_semantic_versioning()
    {
        $this->assertEquals('1.0.0', Version::standardize('v1'));
        $this->assertEquals('1.3.0', Version::standardize('v1.3'));
        $this->assertEquals('1.2.1-beta.10', Version::standardize('v1.2.1-beta.10'));
        $this->assertEquals('1.0.0+rc.1', Version::standardize('v1.0+rc.1'));
    }
}
