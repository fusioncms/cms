<?php

namespace Fusion\Tests\Feature\Services;

use Fusion\Facades\Composer;
use Fusion\Facades\Version;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Process;

class ComposerTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        // init..
        (new Process(['composer', 'install'], $this->basePath()))->mustRun();

        // back up..
        File::copy($this->basePath('composer.json'), $this->basePath('composer.json.bak'));

        // interact w/ local `vendor`..
        Composer::swap(new \Fusion\Services\Composer($this->basePath()));
    }

    public function tearDown(): void
    {
        // clean up..
        File::deleteDirectory($this->basePath('vendor'));
        File::delete($this->basePath('composer.json'));
        File::delete($this->basePath('composer.lock'));

        // restore..
        File::move($this->basePath('composer.json.bak'), $this->basePath('composer.json'));

        parent::tearDown();
    }

    /** @test */
    public function composer_service_caches_list_of_installed_packages()
    {
        $this->assertCount(1, Composer::installed());

        $this->assertEquals(
            ['test/package-a'],
            array_keys(Composer::installed())
        );
    }

    /** @test */
    public function composer_service_can_check_for_installed_package_by_name()
    {
        $this->assertTrue(Composer::has('test/package-a'));
    }

    /** @test */
    public function composer_service_can_check_for_installed_package_version()
    {
        $this->assertEquals('1.1.0', Composer::version('test/package-a'));
    }

    /** @test */
    public function composer_service_can_get_installed_package_path()
    {
        $this->assertEquals(
            realpath($this->basePath('vendor/test/package-a')),
            realpath(Composer::path('test/package-a'))
        );
    }

    /** @test */
    public function composer_service_can_install_a_new_package()
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

    /** @test */
    public function composer_service_can_install_a_specific_package_version()
    {
        Composer::require('test/package-b:2.0.0');

        $this->assertEquals('2.0.0', Composer::version('test/package-b'));
    }

    /** @test */
    public function composer_service_can_update_package_to_latest_version()
    {
        $this->setPackageVersion('test/package-a', '1.2.0');

        Composer::update('test/package-a');

        $this->assertEquals('1.2.0', Composer::version('test/package-a'));
    }

    /** @test */
    public function composer_service_can_remove_a_package()
    {
        Composer::remove('test/package-a');

        $this->assertFalse(Composer::has('test/package-a'));
    }

    //
    // ------------------------------------------------
    //

    /**
     * Updates `composer.json` file w/ package & version.
     * [Helper].
     *
     * @param string $package
     * @param string $version
     *
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
     * [Helper].
     *
     * @param string $path
     *
     * @return string
     */
    private function basePath($path = '')
    {
        return $this->getBasePath('../composer').
               ($path ? DIRECTORY_SEPARATOR.ltrim($path, DIRECTORY_SEPARATOR) : $path);
    }
}
