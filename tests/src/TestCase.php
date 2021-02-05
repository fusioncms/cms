<?php

namespace Fusion\Tests;

use Fusion\Models\User;
use Fusion\Providers\FusionServiceProvider;
use Fusion\Tests\Concerns\InstallsFusion;
use Fusion\Tests\Concerns\MakesDatabaseAssertions;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
use Laravel\Sanctum\SanctumServiceProvider;
use Laravel\Ui\UiServiceProvider;
use Spatie\Activitylog\ActivitylogServiceProvider;
use Spatie\Backup\BackupServiceProvider;
use Spatie\QueryBuilder\QueryBuilderServiceProvider;

abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    use InstallsFusion;
    use MakesDatabaseAssertions;

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

        // Customize factory path
        Factory::guessFactoryNamesUsing(function (string $modelName) {
            return 'Database\Factories\\'.class_basename($modelName).'Factory';
        });

        Hash::driver('bcrypt')->setRounds(4);

        $this->install();

        User::withoutEvents(function () {
            $this->owner          = $this->createUser('Jane Doe', 'admin@example.com', 'secret', 'owner');
            $this->admin          = $this->createUser('Anthony Admin', 'admin-user@example.com', 'secret', 'admin');
            $this->user           = $this->createUser('Ducky Consumer', 'guest@example.com', 'secret', 'user');
            $this->unverifiedUser = $this->createUser('Unverified Consumer', 'unverified@example.com', 'secret', null, ['email_verified_at' => null]);
            $this->guest          = $this->createGuest();
        });
    }

    /**
     * Define database migrations.
     *
     * @return void
     */
    protected function defineDatabaseMigrations()
    {
        $this->loadLaravelMigrations();
        $this->loadMigrationsFrom(base_path('migrations'));
    }

    /**
     * Set the currently logged in user for the application.
     * [override].
     *
     * @param \Illuminate\Contracts\Auth\Authenticatable $user
     * @param string|null                                $driver
     *
     * @return $this
     */
    public function actingAs(Authenticatable $user, $driver = null)
    {
        return $this->be($user, $driver);
    }

    /**
     * Decorator for Sanctum::actingAs().
     *
     * @param \Illuminate\Contracts\Auth\Authenticatable $user
     * @param string|null                                $driver
     * @param array                                      $abilities
     *
     * @return $this
     */
    public function be(Authenticatable $user, $driver = null)
    {
        return parent::be(Sanctum::actingAs($user), $driver);
    }

    /**
     * Get base path.
     *
     * @param string $path = '' - suffix
     *
     * @return string
     */
    protected function getBasePath($path = '')
    {
        return fusion_path('/tests/stubs/laravel').
               ($path ? DIRECTORY_SEPARATOR.ltrim($path, DIRECTORY_SEPARATOR) : $path);
    }

    /**
     * Define environment setup.
     *
     * @param \Illuminate\Foundation\Application $app
     *
     * @return void
     */
    protected function getEnvironmentSetUp($app)
    {
        $app->loadEnvironmentFrom('.env.testing');

        $app['config']->set('auth.providers.users.model', \Fusion\Models\User::class);

        $app['config']->set('fusion.authenticate.middleware', \Orchestra\Testbench\Http\Middleware\Authenticate::class);

        $app['config']->set('database.default', 'sqlite');

        $app['config']->set('filesystems.default', 'public');

        $app['config']->set('database.connections.sqlite', [
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ]);


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
     * @param \Illuminate\Foundation\Application $app
     *
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

            // Spatie
            BackupServiceProvider::class,
            ActivitylogServiceProvider::class,
            QueryBuilderServiceProvider::class,
        ];
    }

    /**
     * Load the bundled FusionCMS aliases.
     *
     * @param \Illuminate\Foundation\Application $app
     *
     * @return array
     */
    protected function getPackageAliases($app)
    {
        return [
            'Fusion'  => 'Fusion\Facades\Fusion',
            'Theme'   => 'Fusion\Facades\Theme',
            'Addon'   => 'Fusion\Facades\Addon',
            'Setting' => 'Fusion\Facades\Setting',
        ];
    }
}
