<?php

use Fusion\Models\Permission;
use Faker\Generator as Faker;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name'        => $faker->word . '.' . $faker->randomElement(['show', 'create', 'update', 'delete']),
        'guard_name'  => '*',
        'description' => $faker->sentence,
    ];
});
