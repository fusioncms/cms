<?php

namespace Fusion\Console\Installer;

use File;
use Config;
use Artisan;
use Illuminate\Support\Str;

class CreateEnvironmentConfig
{
    /**
     * @var array
     */
    protected $container;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $container)
    {
        $this->container = [
            'APP_NAME'   => $container['app_name'],
            'APP_ENV'    => $container['app_env'],
            'APP_DEBUG'  => $container['app_debug'] ? 'true' : 'false',
            'APP_KEY'    => $this->generateRandomKey(),
            'APP_URL'    => $container['app_url'],
            
            'DB_HOST'     => $container['db_host'],
            'DB_DATABASE' => $container['db_name'],
            'DB_USERNAME' => $container['db_user'],
            'DB_PASSWORD' => $container['db_pass'],

            'CACHE_ENABLED' => 'true',
            'CACHE_DRIVER'  => 'memcached',

            'SESSION_DRIVER' => 'cookie',
            'SESSION_DOMAIN' => '.'.parse_url($container['app_url'], PHP_URL_HOST),

            'SANCTUM_STATEFUL_DOMAINS' => parse_url($container['app_url'], PHP_URL_HOST),
        ];
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        if (! app()->environment('testing')) {
            $this->createConfigFile();
        }

        Artisan::call('cache:clear');
        Artisan::call('config:clear');
    }

    /**
     * Creates and populates the database config file.
     *
     * @return null
     */
    protected function createConfigFile()
    {
        $env = $this->getEnv();

        foreach ($this->container as $key => $value) {
            $pattern = "/^{$key}\=.*/m";
            $setting = "{$key}={$value}";
            $matches = [];

            if (preg_match($pattern, $env, $matches)) {
                $env = preg_replace($pattern, $setting, $env);
            } else {
                $env .= "\n{$setting}";
            }
        }

        file_put_contents(app()->environmentFilePath(), $env);
    }

    /**
     * Generate a random key for the application.
     *
     * @return string
     */
    private function generateRandomKey()
    {
        Artisan::call('key:generate', ['--show' => true]);

        return Artisan::output();
    }

    /**
     * Returns contents of `.env` file.
     * Will create an `.env` file, if one doesn't exist.
     * 
     * @return string
     */
    private function getEnv()
    {
        if (! file_exists(app()->environmentFilePath())) {
            copy(base_path('.env.example'), app()->environmentFilePath());
        }

        return file_get_contents(app()->environmentFilePath());
    }
}
