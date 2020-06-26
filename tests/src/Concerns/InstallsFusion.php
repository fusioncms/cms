<?php

namespace Fusion\Tests\Concerns;

use Fusion\Models\User;
use Fusion\Facades\Theme;
use Fusion\Facades\Addon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Fusion\Console\Installer\CreateDefaultRoles;
use Fusion\Console\Installer\CreateDatabaseTables;
use Fusion\Console\Installer\PublishFusionResources;
use Fusion\Console\Installer\CreateDefaultPermissions;

trait InstallsFusion
{
    /**
     * @var string
     */
    protected $name = 'Jane Doe';

    /**
     * @var string
     */
    protected $email = 'admin@example.com';

    /**
     * @var string
     */
    protected $password = 'secret';

    /**
     * Install FusionCMS.
     *
     * @return void
     */
    protected function install()
    {
        dispatch_now(new CreateDatabaseTables);
        dispatch_now(new CreateDefaultPermissions);
        dispatch_now(new CreateDefaultRoles);

        Theme::activate('Hello');
        Addon::discover();
        Addon::register();

        Addon::install('Foobar');

        Artisan::call('fusion:flush');
        Artisan::call('fusion:sync');
    }

    /**
     * Uninstall FusionCMS.
     *
     * @return void
     */
    protected function uninstall()
    {
        File::deleteDirectory(storage_path('backups'));
        File::deleteDirectory(storage_path('uploads'));

        File::delete(storage_path('app/addons.json'));

        dispatch_now(new \Fusion\Console\Uninstaller\DeleteModelFiles);
    }

    /**
     * Create a new user account.
     *
     * @param  String  $name
     * @param  String  $email
     * @param  String  $password
     * @param  String|Array|Null  $role
     * @param  Array  $overrides
     *
     * @return Fusion\Models\User
     */
    protected function createUser($name, $email, $password, $role = null, $overrides = [])
    {
        $attributes = [
            'name'     => $name,
            'email'    => $email,
            'password' => bcrypt($password),
        ] + $overrides;

        $user = factory(User::class)->create($attributes);

        if (! is_null($role)) {
            $user->assignRole($role);
        }

        return $user;
    }

    /**
     * Create a new guest account.
     *
     * @return Fusion\Models\User
     */
    protected function createGuest()
    {
        return app()->make(User::class);
    }
}