<?php

namespace Database\Factories;

use Fusion\Models\Matrix;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class MatrixFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Matrix::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'            => ($name = $this->faker->words(2, true)),
            'handle'          => Str::slug($name, '_'),
            'slug'            => Str::slug($name, '-'),
            'description'     => $this->faker->sentence,
            'type'            => $this->faker->randomElement(['single', 'collection']),
            'sidebar'         => $this->faker->boolean(50),
            'quicklink'       => $this->faker->boolean(50),
            'icon'            => $this->faker->randomElement(['pencil-alt', 'plane', 'book', 'brain']),
            'show_name_field' => true,
            'name_label'      => '',
            'name_format'     => '',
            'route'           => 'test/{slug}',
            'template'        => 'test.'.Str::slug($name),
            'status'          => $this->faker->boolean(50),
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

    /**
     * Set model SEO.
     *
     * @param string $route
     * @param string $template
     *
     * @return $this
     */
    public function withSEO($route, $template)
    {
        return $this->state([
            'route'    => $route,
            'template' => $template,
        ]);
    }

    /**
     * Set model to collection.
     *
     * @return $this
     */
    public function asCollection()
    {
        return $this->state([
            'type' => 'collection',
        ]);
    }

    /**
     * Set model to single.
     *
     * @return $this
     */
    public function asSingle()
    {
        return $this->state([
            'type' => 'single',
        ]);
    }
}
