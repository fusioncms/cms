<?php

use Faker\Generator as Faker;
use Fusion\Models\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'handle'      => ($handle = $faker->word),
        'name'        => ucfirst($handle),
        'guard_name'  => '*',
        'description' => $faker->sentence,
    ];
});
