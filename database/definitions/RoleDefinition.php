<?php

use Faker\Generator as Faker;
use Fusion\Models\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name'        => ($name = $faker->word),
        'label'       => ucfirst($name),
        'guard_name'  => '*',
        'description' => $faker->sentence,
    ];
});
