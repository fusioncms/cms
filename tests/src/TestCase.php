<?php

namespace Fusion\Tests;

use Illuminate\Support\Facades\Hash;
use Spatie\Backup\BackupServiceProvider;
use Fusion\Tests\Concerns\InstallsFusion;
use Fusion\Providers\FusionServiceProvider;
use Caffeinated\Flash\FlashServiceProvider;
use Caffeinated\Menus\MenusServiceProvider;
use Caffeinated\Modules\ModulesServiceProvider;
use Fusion\Tests\Concerns\MakesDatabaseAssertions;
use Spatie\Activitylog\ActivitylogServiceProvider;
use Spatie\QueryBuilder\QueryBuilderServiceProvider;
use Laravel\Ui\UiServiceProvider;
use Laravel\Sanctum\Sanctum;
use Laravel\Sanctum\SanctumServiceProvider;
use Illuminate\Contracts\Auth\Authenticatable;

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
     * Set the currently logged in user for the application.
     * [override]
     * 
     * @param \Illuminate\Contracts\Auth\Authenticatable $user 
     * @param string|null  $driver
     * @return $this
     */
    public function actingAs(Authenticatable $user, $driver = null)
    {
        return $this->be($user, $driver);
    }

    /**
     * Decorator for Sanctum::actingAs()
     *
     * @param \Illuminate\Contracts\Auth\Authenticatable $user 
     * @param string|null  $driver
     * @param array        $abilities
     * @return $this
     */
    public function be(Authenticatable $user, $driver = null)
    {
        return parent::be(Sanctum::actingAs($user), $driver);
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
            SanctumServiceProvider::class,

            // Caffeinated
            FlashServiceProvider::class,
            MenusServiceProvider::class,
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
            'Theme'  => 'Fusion\Facades\Theme',
            'Module' => 'Caffeinated\Modules\Facades\Module',
        ];
    }
}