<?php

namespace Fusion\Providers;

use Fusion\Models\Disk;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

class ConfigServiceProvider extends ServiceProvider
{
    /**
     * Register the provided services.
     * Merges in `fusioncms` overridding configs.
     *
     * @return void
     */
    public function register()
    {
        $this->registerMacro();
    }

    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        /**
         * FusionCMS will now merge it's own
         * configurations on top of Laravel's.
         */
        $this->resetBackupConfigurations();
        $this->mergeFusionCMSConfigurations();
        $this->mergeFileSystemConfigurations();
        $this->registerMailServices();
    }

    /**
     * Register mail services
     *
     * @return void
     */
    protected function registerMailServices()
    {
        $this->app['config']['services'] = [

            // SparkPost service settings..
            'sparkpost' => [
                'secret' => setting('mail.mail_sparkpost_secret'),
            ],

            // Mailgun service settings..
            'mailgun' => [
                'domain' => setting('mail.mail_mailgun_domain'),
                'secret' => setting('mail.mail_mailgun_secret'),
            ],

            // Mandrill service settings..
            'mandrill' => [
                'secret' => setting('mail.mail_mandrill_secret'),
            ],
        ];
    }

    /**
     * Add `mergeDeep` macro to Arr Facade.
     *
     * @var array
     */
    protected function registerMacro()
    {
        Arr::macro('mergeDeep', function (array $arr1, array $arr2) {
            $output = array_merge($arr1, $arr2);

            foreach ($arr1 as $key => $value) {
                if (is_numeric($key) or !isset($arr2[$key])) {
                    continue;
                }

                if (is_array($value) && is_array($arr2[$key])) {
                    $output[$key] = Arr::mergeDeep($value, $arr2[$key]);
                    $output[$key] = array_unique($output[$key], SORT_REGULAR);
                }
            }

            return $output;
        });
    }

    /**
     * Reset backup configurations from `spatie/laravel-backup`
     * so we can use a fresh copy of our own.
     *
     * @return void
     */
    protected function resetBackupConfigurations()
    {
        $this->app['config']->set('backup', []);
    }

    /**
     * Merge in FusionCMS config file configurations.
     *
     * @return void
     */
    protected function mergeFusionCMSConfigurations()
    {
        $files = File::files(fusion_path('config'));

        foreach ($files as $file) {
            $path = $file->getPathname();
            $name = File::name($path);

            $this->app['config']->set(
                $name,
                Arr::mergeDeep(
                    $this->app['config']->get($name, []),
                    require $path,
                )
            );
        }
    }

    /**
     * Merge in FileSystem Disks configurations.
     *
     * @return void
     */
    protected function mergeFileSystemConfigurations()
    {
        if (app_installed()) {
            Disk::MergeConfigs();
        }
    }
}
