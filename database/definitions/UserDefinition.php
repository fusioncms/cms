<?php

use Fusion\Models\User;
use Fusion\Models\Role;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    static $password;

    return [
        'name'              => $faker->name,
        'email'             => $faker->unique()->safeEmail,
        'password'          => $password ?: $password = bcrypt('secret'),
        'status'            => true,
        'remember_token'    => Str::random(10),
        'email_verified_at' => now(),
    ];
});

$factory->afterCreatingState(User::class, 'guest', function ($user, $faker) {
    $role = Role::firstOrCreate(['name' => 'Guest']);

    $user->assignRole($role->name);
});

$factory->afterCreatingState(User::class, 'user', function ($user, $faker) {
    $role = Role::firstOrCreate(['name' => 'User']);

    $user->assignRole($role->name);
});

$factory->afterCreatingState(User::class, 'admin', function ($user, $faker) {
    $role = Role::firstOrCreate(['name' => 'Administrator']);

    $user->assignRole($role->name);
});
