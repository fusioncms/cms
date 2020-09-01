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
    	// package doesn't exist yet..
    	$this->assertFalse(Package::has('spatie/test-time'));

    	// install package..
    	Package::require('spatie/test-time');

    	// package should now exist..
    	$this->assertTrue(Package::has('spatie/test-time'));
    	$this->assertEquals(
    		$this->getBasePath('vendor/spatie/test-time'),
    		Package::path('spatie/test-time')
    	);
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group package
     */
    public function package_manager_can_install_a_specific_package_version()
    {
    	Package::require('spatie/test-time:1.0.0');

    	$this->assertEquals('1.0.0', Package::version('spatie/test-time'));
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group package
     */
    public function package_manager_can_update_to_a_specific_package_version()
    {
    	// install package..
    	Package::require('spatie/test-time:1.0.0');

    	// update package..
    	Package::update('spatie/test-time:1.2.0');

    	$this->assertEquals('1.2.0', Package::version('spatie/test-time'));
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group package
     */
    public function package_manager_can_remove_a_package()
    {
    	// install package..
    	Package::require('spatie/test-time');

    	// remove package..
    	Package::remove('spatie/test-time');

    	$this->assertFalse(Package::has('spatie/test-time'));
    }
}