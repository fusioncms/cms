<?php

namespace Database\Factories;

use Fusion\Models\Disk;
use Illuminate\Database\Eloquent\Factories\Factory;

class DiskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Disk::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'           => ($name = $this->faker->word),
            'handle'         => str_handle($name),
            'driver'         => ($driver = 'local'),
            'is_default'     => false,
            'configurations' => $this->generateConfigurations($driver)
        ];
    }

    /**
     * Set as default.
     *
     * @return $this
     */
    public function isDefault()
    {
        return $this->state([
            'is_default' => true,
        ]);
    }

    /**
     * Set model name.
     *
     * @param string $name
     *
     * @return $this
     */
    public function withName($name)
    {
        return $this->state([
            'name'   => $name,
            'handle' => str_handle($name)
        ]);
    }

    /**
     * Set model driver (w/ default configurations).
     *
     * @param string $name
     *
     * @return $this
     */
    public function withDriver($driver)
    {
        return $this->state([
            'driver'         => $driver,
            'configurations' => $this->generateConfigurations($driver)
        ]);
    }

    /**
     * Generates disk configurations for specified driver.
     * [Helper]
     * 
     * @param  string $driver
     * @return array
     */
    private function generateConfigurations($driver)
    {
        switch ($driver) {
            case 's3':
                return [
                    'key'        => $this->faker->md5,
                    'secret'     => $this->faker->sha1,
                    'region'     => 'us-west-1',
                    'bucket'     => $this->faker->word,
                    'url'        => $this->faker->url,
                    'visibility' => $this->faker->randomElement(['public','private']),
                ];

            case 'sftp':
                return [
                    'host'     => $this->faker->ipv4,
                    'username' => $this->faker->userName,
                    'password' => $this->faker->password,
                    'port'     => 22,
                    'root'     => env('SFTP_ROOTPATH'),
                ];
        }

        // Local driver..
        return [
            'root'       => storage_path('app/public'),
            'url'        => $this->faker->domainName . '/storage',
            'visibility' => $this->faker->randomElement(['public','private']),
        ];
    }
}
