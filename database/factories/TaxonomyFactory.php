<?php

namespace Database\Factories;

use Fusion\Models\Taxonomy;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TaxonomyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Taxonomy::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'        => ($name = $this->faker->words(2, true)),
            'slug'        => Str::slug($name, '-'),
            'handle'      => Str::slug($name, '_'),
            'description' => $this->faker->sentence,
            'sidebar'     => $this->faker->boolean(50),
            'icon'        => $this->faker->randomElement(['tag', 'swatchbook', 'map-marker-alt', 'feather-alt']),
            'route'       => 'taxonomy/{slug}',
            'template'    => 'taxonomy.'.Str::slug($name, '_'),
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
            'slug'   => Str::slug($name),
        ]);
    }
}
