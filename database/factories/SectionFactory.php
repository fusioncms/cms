<?php

namespace Database\Factories;

use Fusion\Models\Blueprint;
use Fusion\Models\Section;
use Illuminate\Database\Eloquent\Factories\Factory;

class SectionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Section::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'         => ($name = $this->faker->unique()->word),
            'handle'       => str_handle($name),
            'description'  => $this->faker->sentence,
            'placement'    => $this->faker->randomElement(['body', 'sidebar']),
            'order'        => 99,
            'blueprint_id' => Blueprint::factory()->create(),
        ];
    }

    /**
     * Set model blueprint.
     *
     * @param  \Fusion\Models\Blueprint $name
     * 
     * @return $this
     */
    public function withBlueprint(Blueprint $blueprint)
    {
        return $this->state([
            'blueprint_id' => $blueprint->id,
        ]);
    }
}
