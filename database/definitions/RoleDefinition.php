<?php

use Faker\Generator as Faker;
use Spatie\Permission\Models\Role;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'name'        => $faker->word,
        'guard_name'  => config('auth.defaults.guard'),
        'description' => $faker->sentence,
    ];
});
