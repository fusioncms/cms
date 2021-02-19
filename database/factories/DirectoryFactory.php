<?php

namespace Database\Factories;

use Fusion\Models\Disk;
use Fusion\Models\Directory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DirectoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Directory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'disk_id'   => Disk::first(),
            'name'      => ($name = $this->faker->unique()->word()),
            'slug'      => Str::slug($name),
            'parent_id' => 0,
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
            'slug' => Str::slug($name),
        ]);
    }

    /**
     * Set model name.
     *
     * @param  mixed
     *
     * @return $this
     */
    public function withParent($parent)
    {
        return $this->state([
            'parent_id' => is_a($parent, Directory::class) ? $parent->id : $parent,
        ]);
    }
}
