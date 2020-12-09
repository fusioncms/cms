<?php

namespace Database\Factories;

use Fusion\Models\Blueprint;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlueprintFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blueprint::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'      => $this->faker->unique()->word,
            'structure' => $this->faker->unique()->word,
        ];
    }
}
