<?php

namespace Fusion\Tests\Feature\Services;

use Fusion\Tests\TestCase;
use Fusion\Facades\Package;
use Fusion\Facades\Version;
use Illuminate\Support\Facades\File;
use Fusion\Concerns\CleansDirectories;
use Symfony\Component\Process\Process;

class PackageTest extends TestCase
{
	use CleansDirectories;

	public function setUp(): void
    {
    	parent::setUp();

    	// back up composer files..
    	File::copy($this->getBasePath('composer.json'), $this->getBasePath('composer.json.bak'));
    	File::copy($this->getBasePath('composer.lock'), $this->getBasePath('composer.lock.bak'));
    }

    public function tearDown(): void
    {
    	// remove temp composer files..
    	File::delete($this->getBasePath('composer.json'));
    	File::delete($this->getBasePath('composer.lock'));

    	// restore composer files..
    	File::move($this->getBasePath('composer.json.bak'), $this->getBasePath('composer.json'));
    	File::move($this->getBasePath('composer.lock.bak'), $this->getBasePath('composer.lock'));
    	
    	// restore from `composer.lock` file..
    	Process::fromShellCommandline('composer install', $this->getBasePath())
    		->setTimeout(null)
    		->mustRun();

    	parent::tearDown();
    }

	/**
     * @test
     * @group fusioncms
     * @group services
     * @group package
     */
    public function package_manager_can_install_a_package()
    {
    	Package::install('predis/predis');

    	$this->assertTrue(Package::has('predis/predis'));
    	$this->assertEquals(
    		$this->getBasePath('vendor/predis/predis'),
    		Package::path('predis/predis')
    	);
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group package
     */
    public function package_manager_can_install_a_package_with_specific_version()
    {
    	Package::install('predis/predis:1.0.0');

    	$this->assertEquals('1.0.0', Package::version('predis/predis'));
    }
}