<?php

use Fusion\Models\Role;
use Faker\Generator as Faker;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name'        => ($name = $faker->word),
        'label'       => ucfirst($name),
        'guard_name'  => '*',
        'description' => $faker->sentence,
    ];
});
