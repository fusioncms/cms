<?php

namespace Database\Factories;

use Fusion\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $password;

        return [
            'name'              => $this->faker->name,
            'email'             => $this->faker->unique()->safeEmail,
            'password'          => $password ?: $password = bcrypt('secret'),
            'status'            => true,
            'remember_token'    => Str::random(10),
            'email_verified_at' => now(),
        ];
    }
}
