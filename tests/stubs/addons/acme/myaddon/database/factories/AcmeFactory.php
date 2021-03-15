<?php

namespace Database\Factories;

use Acme\Myaddon\Models\Acme;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class AcmeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Acme::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'        => ($name = $this->faker->unique()->word),
            'slug'        => Str::slug($name),
            'handle'      => Str::slug($name, '_'),
            'description' => $this->faker->paragraphs(3, true),
            'status'      => true
        ];
    }
}
