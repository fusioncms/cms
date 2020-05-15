<?php

use Faker\Generator as Faker;
use Spatie\Permission\Models\Permission;

$factory->define(Permission::class, function (Faker $faker) {
    return [
        'name'        => $faker->word . '.' . $faker->randomElement(['show', 'create', 'update', 'delete']),
        'guard_name'  => config('auth.defaults.guard'),
        'description' => $faker->sentence,
    ];
});
