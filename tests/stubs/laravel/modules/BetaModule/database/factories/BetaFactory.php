<?php

use Faker\Generator as Faker;
use Modules\BetaModule\Models\Beta;

$factory->define(Beta::class, function (Faker $faker) {
    return [
        'name'        => ($name = $faker->unique()->word),
        'handle'      => str_handle($name),
        'description' => $faker->sentence,
        'status'      => true
    ];
});