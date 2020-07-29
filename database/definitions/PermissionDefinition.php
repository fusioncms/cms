<?php

use Faker\Generator as Faker;
use Fusion\Models\Permission;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name'        => $faker->word.'.'.$faker->randomElement(['show', 'create', 'update', 'delete']),
        'guard_name'  => '*',
        'description' => $faker->sentence,
    ];
});
