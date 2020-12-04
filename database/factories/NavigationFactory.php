<?php

namespace Database\Factories;

use Fusion\Models\Navigation;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NavigationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Navigation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'        => ($name = $this->faker->words(2, true)),
            'handle'      => Str::slug($name, '_'),
            'description' => $this->faker->sentence,
        ];
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
            'handle' => str_handle($name),
        ]);
    }
}
