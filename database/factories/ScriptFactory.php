<?php

namespace Database\Factories;

use Fusion\Models\Script;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ScriptFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Script::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'            => ($name = $this->faker->words(2, true)),
            'description'     => $this->faker->sentence,
            'code'            => "<script>console.log('hello world');</script>",
            'location'        => $this->faker->randomElement(['head', 'body']),
            'trigger_on'      => 'all',
            'trigger_where'   => '',
            'type'            => $this->faker->randomElement(['user', 'addon']),
            'order'           => 0,
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
            'name' => $name,
        ]);
    }
}
