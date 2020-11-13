<?php

use Faker\Generator as Faker;

$factory->define(Fusion\Models\Field::class, function (Faker $faker) {
    $reservedWords = ['id', 'name', 'handle', 'help', 'required', 'type', 'settings', 'order'];
    $name = $faker->unique()->word();

    while (in_array($name, $reservedWords)) {
        $name = $faker->unique()->word();
    }

    return [
        'name'       => $name,
        'handle'     => str_handle($name),
        'help'       => $faker->sentence,
        'type'       => 'input',
        'validation' => [],
        'settings'   => [],
        'order'      => 99,
    ];
});
