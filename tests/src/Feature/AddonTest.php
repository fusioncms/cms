<?php

namespace Fusion\Tests\Feature;

use ZipArchive;
use Fusion\Facades\Addon;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AddonTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group feature
     * @group addon
     */
    public function addons_are_registered_with_fusion()
    {
        $addons = Addon::all();

        $this->assertCount(1, $addons);
    }

    /**
     * @test
     * @group feature
     * @group addon
     */
    public function a_user_with_permissions_can_upload_an_addon()
    {
        list($addonPath, $addonName) = $this->generateAddon('Omega');

        $response = $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/addons/upload', [
                'file-upload' => new UploadedFile($addonPath, $addonName, 'application/zip', null, true)
            ])->assertStatus(200);

        $addon = Addon::where('namespace', 'Omega')->first();

        $this->assertFalse($addon['enabled']);

        // Clean up..
        File::deleteDirectory(addon_path('Omega'));
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function an_uploaded_addon_can_be_installed()
    {
        list($addonPath, $addonName) = $this->generateAddon('Omega');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/addons/upload', [
                'file-upload' => new UploadedFile($addonPath, $addonName, 'application/zip', null, true)
            ])->assertStatus(200);

        $addon = Addon::where('namespace', 'Omega')->first();

        $this->assertFalse($addon['enabled']);
        $this->assertFalse($addon['installed']);

        $addon = Addon::install('Omega');

        $this->assertTrue($addon['enabled']);
        $this->assertTrue($addon['installed']);

        // Clean up..
        File::deleteDirectory(addon_path('Omega'));
    }

    /**
     * @test
     * @group feature
     * @group addon
     */
    public function an_installed_addon_can_be_uninstalled()
    {
        Bus::fake();

        list($addonPath, $addonName) = $this->generateAddon('Omega');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/addons/upload', [
                'file-upload' => new UploadedFile($addonPath, $addonName, 'application/zip', null, true)
            ]);

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/addons/omega/install');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/addons/omega/uninstall')
            ->assertStatus(200);

        $addon = Addon::get('Omega');

        $this->assertFalse($addon['installed']);

        // Clean up..
        File::deleteDirectory(addon_path('Omega'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group addon
     * @group auth
     */
    public function a_guest_cannot_upload_an_addon()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/addons/upload', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group addon
     * @group permissions
     */
    public function a_user_without_permissions_cannot_upload_an_addon()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/addons/upload', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group addon
     * @group permissions
     */
    public function a_user_without_permissions_cannot_install_an_addon()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/addons/foobar/install', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group addon
     * @group permissions
     */
    public function a_user_without_permissions_cannot_uninstall_existing_addons()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/addons/foobar/uninstall', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group addon
     * @group permissions
     */
    public function a_user_without_permissions_cannot_enable_existing_addons()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/addons/foobar/enable', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group addon
     * @group permissions
     */
    public function a_user_without_permissions_cannot_disable_existing_addons()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/addons/foobar/disable', []);
    }

    /**
     * @test
     * @group feature
     * @group addon
     */
    public function a_newly_uploaded_addon_has_file_requirements()
    {
        list($addonPath, $addonName) = $this->generateAddon('Invalid', false);

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/addons/upload', [
                'file-upload' => new UploadedFile($addonPath, $addonName, 'application/zip', null, true)
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file-upload' => 'An addon requires the following files: addon.json.'
            ]);
    }

    /**
     * @test
     * @group feature
     * @group addon
     */
    public function an_enabled_addon_can_be_disabled()
    {
        Addon::enable('Foobar');

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/addons/foobar/disable")
            ->assertStatus(200);

        $this->assertTrue(Addon::isNotEnabled('Foobar'));
    }

    /**
     * @test
     * @group feature
     * @group addon
     */
    public function a_disabled_addon_can_be_enabled()
    {
        Addon::disable('Foobar');

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/addons/foobar/enable")
            ->assertStatus(200);

        $this->assertTrue(Addon::isEnabled('Foobar'));
    }

    /**
     * Generate fake addon zip for testing.
     *
     * @param  string $addonName
     * @return string
     */
    private function generateAddon($addonNamespace = null, $includesRequirements = true)
    {
        Storage::fake();

        $zipArchive     = new ZipArchive;
        $addonNamespace = $addonNamespace ?? $this->faker->word;
        $addonPath      = Storage::path($addonNamespace . '.zip');

        $settings = [
            'name'        => $addonNamespace,
            'namespace'   => $addonNamespace,
            'version'     => '1.0.0',
            'description' => $this->faker->text,
        ];

        if ($zipArchive->open($addonPath, ZipArchive::CREATE) === TRUE) {
            $zipArchive->addEmptyDir($addonNamespace);
            $zipArchive->addEmptyDir("{$addonNamespace}/src");
            $zipArchive->addEmptyDir("{$addonNamespace}/src/Models");
            $zipArchive->addEmptyDir("{$addonNamespace}/src/Providers");
            $zipArchive->addEmptyDir("{$addonNamespace}/public");
            $zipArchive->addEmptyDir("{$addonNamespace}/public/js");
            $zipArchive->addEmptyDir("{$addonNamespace}/public/css");

            if ($includesRequirements) {
                $zipArchive->addFromString($addonNamespace . '/addon.json', collect($settings)->toJson());
            }

            $zipArchive->close();
        }

        return [$addonPath, $addonNamespace];
    }
}