<?php

namespace Fusion\Tests\Feature;

use ZipArchive;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Caffeinated\Modules\Facades\Module;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ModuleTest extends TestCase
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
     * @group module
     */
    public function a_user_with_permissions_can_upload_a_module()
    {
        list($modulePath, $moduleName) = $this->generateModule('Omega');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/upload', [
                'file-upload' => new UploadedFile($modulePath, $moduleName, 'application/zip', null, true)
            ])->assertStatus(200);

        $this->assertTrue(Module::where('slug', 'omega')->get('registered'));

        // Clean up..
        File::deleteDirectory(base_path('modules/Omega'));
        Module::optimize();
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function an_uploaded_module_can_be_installed()
    {
        list($modulePath, $moduleName) = $this->generateModule('Omega');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/upload', [
                'file-upload' => new UploadedFile($modulePath, $moduleName, 'application/zip', null, true)
            ]);

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/omega/install')
            ->assertStatus(200);

        $this->assertTrue(Module::where('slug', 'omega')->get('enabled'));
        $this->assertTrue(Module::where('slug', 'omega')->get('installed'));

        // Clean up..
        File::deleteDirectory(base_path('modules/Omega'));
        Module::optimize();
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function an_installed_module_can_be_uninstalled()
    {
        Bus::fake();

        list($modulePath, $moduleName) = $this->generateModule('Omega');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/upload', [
                'file-upload' => new UploadedFile($modulePath, $moduleName, 'application/zip', null, true)
            ]);

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/omega/install');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/omega/uninstall')
            ->assertStatus(200);

        $this->assertFalse(File::exists(base_path('modules/Omega')));
        $this->assertFalse(Module::exists('omega'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group auth
     */
    public function a_guest_cannot_upload_a_module()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/modules/upload', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_upload_a_module()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/upload', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_install_a_module()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/beta/install', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_uninstall_existing_modules()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/beta/uninstall', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_enable_existing_modules()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/beta/enable', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_disable_existing_modules()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/beta/disable', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_seed_existing_modules()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/beta/seed', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group module
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_modules()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/modules/beta/update', []);
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function a_newly_uploaded_module_has_file_requirements()
    {
        list($modulePath, $moduleName) = $this->generateModule('Invalid', false);

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/upload', [
                'file-upload' => new UploadedFile($modulePath, $moduleName, 'application/zip', null, true)
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file-upload' => 'A module requires the following files: module.json.'
            ]);
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function a_newly_uploaded_module_cannot_override_existing_module()
    {
        list($modulePath, $moduleName) = $this->generateModule('Beta');

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/modules/upload', [
                'file-upload' => new UploadedFile($modulePath, $moduleName, 'application/zip', null, true)
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'file-upload' => 'A module with matching name already exists.'
            ]);
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function an_enabled_module_can_be_disabled()
    {
        // Init..
        $module = Module::where('slug', 'beta');
        $slug   = $module->get('slug');

        Module::enable($slug);

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/modules/{$slug}/disable")
            ->assertStatus(200);

        $this->assertTrue(Module::isDisabled($slug));
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function a_disabled_module_can_be_enabled()
    {
        // Init..
        $module = Module::where('slug', 'beta');
        $slug   = $module->get('slug');

        Module::disable($slug);

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/modules/{$slug}/enable")
            ->assertStatus(200);

        $this->assertTrue(Module::isEnabled($slug));
    }

    /**
     * @test
     * @group feature
     * @group module
     */
    public function an_enabled_module_can_be_seeded()
    {
        // Init..
        $module = Module::where('slug', 'beta');
        $slug   = $module->get('slug');

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/modules/{$slug}/seed")
            ->assertStatus(200);

        $this->assertCount(10, \Modules\BetaModule\Models\Beta::all());
    }

    /**
     * Generate fake module zip for testing..
     * [helper]
     *
     * @param  string $moduleName
     * @return string
     */
    private function generateModule($moduleName = null, $includesRequirements = true)
    {
        Storage::fake();

        $zipArchive = new ZipArchive;
        $moduleName  = $moduleName ?? $this->faker->word;
        $modulePath  = Storage::path($moduleName . '.zip');

        $settings = [
            'name'        => $moduleName,
            'slug'        => Str::slug($moduleName),
            'version'     => '1.0.0',
            'description' => $this->faker->text,
        ];

        if ($zipArchive->open($modulePath, ZipArchive::CREATE) === TRUE) {
            $zipArchive->addEmptyDir($moduleName);
            $zipArchive->addEmptyDir("{$moduleName}/src");
            $zipArchive->addEmptyDir("{$moduleName}/src/Models");
            $zipArchive->addEmptyDir("{$moduleName}/public");
            $zipArchive->addEmptyDir("{$moduleName}/public/js");
            $zipArchive->addEmptyDir("{$moduleName}/public/css");

            if ($includesRequirements) {
                $zipArchive->addFromString($moduleName . '/module.json', collect($settings)->toJson());
            }

            $zipArchive->close();
        }

        return [$modulePath, $moduleName];
    }
}