<?php

use Fusion\Models\Blueprint;
use Faker\Generator as Faker;
use Fusion\Models\Section;

$factory->define(Section::class, function (Faker $faker) {
    return [
        'name'             => ($name = $faker->unique()->word),
        'handle'           => str_handle($name),
        'description'      => $faker->sentence,
        'placement'        => $faker->randomElement(['body', 'sidebar']),
        'order'            => 99,
        'blueprint_id'     => factory(Blueprint::class),
    ];
});
