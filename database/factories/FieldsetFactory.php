<?php

namespace Database\Factories;

use Fusion\Models\Fieldset;
use Illuminate\Database\Eloquent\Factories\Factory;

class FieldsetFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Fieldset::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'   => ($name = $this->faker->unique()->word),
            'handle' => str_handle($name),
        ];
    }

    /**
     * Set model name.
     *
     * @param  string $name
     * 
     * @return $this
     */
    public function withName($name)
    {
        return $this->state([
            'name'   => $name,
            'handle' => str_handle($name),
        ]);
    }
}
