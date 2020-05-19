<?php

namespace Fusion\Tests;

use Illuminate\Support\Facades\Hash;
use Spatie\Backup\BackupServiceProvider;
use Fusion\Tests\Concerns\InstallsFusion;
use Fusion\Providers\FusionServiceProvider;
use Caffeinated\Flash\FlashServiceProvider;
use Caffeinated\Menus\MenusServiceProvider;
use Caffeinated\Themes\ThemesServiceProvider;
use Caffeinated\Modules\ModulesServiceProvider;
use Fusion\Tests\Concerns\MakesDatabaseAssertions;
use Spatie\Activitylog\ActivitylogServiceProvider;
use Spatie\QueryBuilder\QueryBuilderServiceProvider;
use Laravel\Ui\UiServiceProvider;

abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    use InstallsFusion, MakesDatabaseAssertions;

    /**
     * @var \Fusion\Models\User
     */
    protected $admin;

    /**
     * @var \Fusion\Models\User
     */
    protected $user;

    /**
     * @var \Fusion\Models\User
     */
    protected $guest;

    /**
     * Set up the test environment.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        Hash::driver('bcrypt')->setRounds(4);

        $this->withFactories(fusion_path('/database/definitions'));

        $this->install();

        $this->owner          = $this->createUser('Jane Doe', 'admin@example.com', 'secret', 'owner');
        $this->user           = $this->createUser('Ducky Consumer', 'guest@example.com', 'secret', 'user');
        $this->unverifiedUser = $this->createUser('Unverified Consumer', 'unverified@example.com', 'secret', null, ['email_verified_at' => null]);
        $this->guest          = $this->createGuest();
    }

    /**
     * Get base path.
     *
     * @return string
     */
    protected function getBasePath()
    {
        return fusion_path('/tests/stubs/laravel');
    }

    /**
     * Define environment setup.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return void
     */
    protected function getEnvironmentSetUp($app)
    {
        $app->loadEnvironmentFrom('.env.testing');

        $app['config']->set('auth.providers.users.model', \Fusion\Models\User::class);

        $app['config']->set('fusion.authenticate.middleware', \Orchestra\Testbench\Http\Middleware\Authenticate::class);

        $app['config']->set('database.default', 'sqlite');

        $app['config']->set('database.connections.sqlite', [
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ]);

        $app['config']->set('modules.locations.app.path', base_path('modules/'));
        $app['config']->set('modules.locations.app.namespace', "Modules\\");
    }

    /**
     * Tear down the test environment.
     *
     * @return void
     */
    public function tearDown(): void
    {
        $this->uninstall();

        parent::tearDown();
    }

    /**
     * Load the bundled FusionCMS service providers.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function getPackageProviders($app)
    {
        return [
            // Fusion
            FusionServiceProvider::class,

            // Laravel
            UiServiceProvider::class,

            // Caffeinated
            FlashServiceProvider::class,
            MenusServiceProvider::class,
            ThemesServiceProvider::class,
            ModulesServiceProvider::class,

            // Spatie
            BackupServiceProvider::class,
            ActivitylogServiceProvider::class,
            QueryBuilderServiceProvider::class,
        ];
    }

    /**
     * Load the bundled FusionCMS aliases.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function getPackageAliases($app)
    {
        return [
            'Fusion' => 'Fusion\Facades\Fusion',
            'Theme'  => 'Caffeinated\Themes\Facades\Theme',
            'Module' => 'Caffeinated\Modules\Facades\Module',
        ];
    }
}