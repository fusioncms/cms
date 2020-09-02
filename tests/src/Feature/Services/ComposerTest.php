<?php

namespace Fusion\Tests\Feature\Services;

use Fusion\Tests\TestCase;
use Fusion\Facades\Composer;
use Fusion\Facades\Version;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Process;

class ComposerTest extends TestCase
{
	public function setUp(): void
    {
    	parent::setUp();

    	// create mock vendor folder..
    	(new Process(['tar', '-xzvf', 'vendor.tar.gz'], $this->basePath()))->mustRun();

    	// back up composer files..
    	File::copy($this->basePath('composer.json'), $this->basePath('composer.json.bak'));
    	File::copy($this->basePath('composer.lock'), $this->basePath('composer.lock.bak'));
    
    	Composer::swap(new \Fusion\Services\Composer($this->basePath()));
    }

    public function tearDown(): void
    {
    	// remove move vendor directory..
    	// File::deleteDirectory($this->basePath('vendor'));

    	// remove temp composer files..
    	File::delete($this->basePath('composer.json'));
    	File::delete($this->basePath('composer.lock'));

    	// restore composer files..
    	File::move($this->basePath('composer.json.bak'), $this->basePath('composer.json'));
    	File::move($this->basePath('composer.lock.bak'), $this->basePath('composer.lock'));

    	parent::tearDown();
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group composer
     */
    public function package_manager_knows_about_installed_packages()
    {
    	$this->assertTrue(Composer::has('test/package-a'));
    	$this->assertEquals('1.1.0', Composer::version('test/package-a'));
    }

	/**
     * @test
     * @group fusioncms
     * @group services
     * @group composer
     */
    public function package_manager_can_install_a_new_package()
    {
    	// package doesn't exist yet..
    	$this->assertFalse(Composer::has('test/package-b'));

    	// install package..
    	Composer::require('test/package-b');

    	// package should now exist..
    	$this->assertTrue(Composer::has('test/package-b'));
    	$this->assertEquals('2.1.0', Composer::version('test/package-b'));
    	$this->assertEquals(
    		realpath($this->basePath('vendor/test/package-b')),
    		realpath(Composer::path('test/package-b'))
    	);
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group composer
     */
    public function package_manager_can_install_a_specific_package_version()
    {
    	Composer::require('test/package-b:2.1.0');

    	$this->assertEquals('2.1.0', Composer::version('test/package-b'));
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group composer
     */
    public function package_manager_can_update_package_to_latest_version()
    {
    	// set version
    	$this->setPackageVersion('test/package-a', '1.2.0');

    	// update package
    	Composer::update('test/package-a');

    	$this->assertEquals('1.2.0', Composer::version('test/package-a'));
    }

    /**
     * @test
     * @group fusioncms
     * @group services
     * @group composer
     */
    public function package_manager_can_remove_a_package()
    {
    	Composer::remove('test/package-a');

    	$this->assertFalse(Composer::has('test/package-a'));
    }

    /**
     * Updates `composer.json` file w/ package & version.
     *
     * @param  string $package
     * @param  string $version
     * @return string
     */
    private function setPackageVersion($package, $version)
    {
    	$content = file_get_contents($this->basePath('composer.json'));
		$content = json_decode($content);

		if (isset($content->require->{$package})) {
			$content->require->{$package} = $version;
	
			file_put_contents(
				$this->basePath('composer.json'),
				json_encode($content, JSON_PRETTY_PRINT)
			);
		}
    }

    /**
     * Returns base path for composer testing.
     *
     * @param  string $path
     * @return string
     */
    private function basePath($path = '')
    {
    	return $this->getBasePath('../composer') .
               ($path ? DIRECTORY_SEPARATOR . ltrim($path, DIRECTORY_SEPARATOR) : $path);
    }
}