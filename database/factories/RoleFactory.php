<?php

namespace Database\Factories;

use Fusion\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Role::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'handle'      => ($handle = $this->faker->word),
            'name'        => ucfirst($handle),
            'guard_name'  => '*',
            'description' => $this->faker->sentence,
        ];
    }
}
