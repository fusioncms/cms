<?php

namespace Database\Factories;

use Fusion\Models\Field;
use Illuminate\Database\Eloquent\Factories\Factory;

class FieldFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Field::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $reservedWords = ['id', 'name', 'handle', 'help', 'required', 'type', 'settings', 'order'];
        $name          = $this->faker->unique()->word();

        while (in_array($name, $reservedWords)) {
            $name = $this->faker->unique()->word();
        }

        return [
            'name'       => $name,
            'handle'     => str_handle($name),
            'help'       => $this->faker->sentence,
            'type'       => 'input',
            'validation' => [],
            'settings'   => [],
            'order'      => 99,
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

    /**
     * Set model type.
     *
     * @param string $type
     *
     * @return $this
     */
    public function withType($type)
    {
        return $this->state([
            'type' => $type,
        ]);
    }

    /**
     * Set model settings.
     *
     * @param array $settings
     *
     * @return $this
     */
    public function withSettings(array $settings)
    {
        return $this->state([
            'settings' => $settings,
        ]);
    }

    /**
     * Set model validation.
     *
     * @param array $validation
     *
     * @return $this
     */
    public function withValidation(array $validation)
    {
        return $this->state([
            'validation' => $validation,
        ]);
    }
}
