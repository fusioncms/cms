<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

/**
 * Default definition
 */
$factory->define(Fusion\Models\File::class, function (Faker $faker) {
    return [
        'directory_id' => 0,
        'uuid'         => ($uuid = unique_id()),
        'name'         => ($name = $this->faker->word),
        'title'        => null,       
        'alt'          => null,       
        'caption'      => null,
        'extension'    => ($extn = 'png'),
        'mimetype'     => 'image/png',
        'location'     => "files/{$uuid}-{$name}.{$extn}",
        'width'        => $faker->randomNumber(2),
        'height'       => $faker->randomNumber(2),
        'bytes'        => $faker->randomNumber(3),
    ];
});

/**
 * Image definition
 */
$factory->state(Fusion\Models\File::class, 'image', function ($faker) {
    return [
        // See above..
    ];
});

/**
 * Audio definition
 */
$factory->state(Fusion\Models\File::class, 'audio', function ($faker) {
    return [
        'uuid'      => ($uuid = unique_id()),
        'name'      => ($name = $this->faker->word),
        'extension' => ($extn = 'ogg'),
        'mimetype'  => 'audio/ogg',
        'location'  => "files/{$uuid}-{$name}.{$extn}",
        'width'     => null,
        'height'    => null,
    ];
});

/**
 * Video definition
 */
$factory->state(Fusion\Models\File::class, 'video', function ($faker) {
    return [
        'uuid'      => ($uuid = unique_id()),
        'name'      => ($name = $this->faker->word),
        'extension' => ($extn = 'webm'),
        'mimetype'  => 'video/webm',
        'location'  => "files/{$uuid}-{$name}.{$extn}",
        'width'     => null,
        'height'    => null,
    ];
});

/**
 * Document definition
 */
$factory->state(Fusion\Models\File::class, 'document', function ($faker) {
    return [
        'uuid'      => ($uuid = unique_id()),
        'name'      => ($name = $this->faker->word),
        'extension' => ($extn = 'txt'),
        'mimetype'  => 'text/plain',
        'location'  => "files/{$uuid}-{$name}.{$extn}",
        'width'     => null,
        'height'    => null,
    ];
});

/**
 * Post create image - upload image
 */
$factory->afterCreatingState(Fusion\Models\File::class, 'image', function ($file, $faker) {
    $location = "{$file->uuid}-{$file->name}.{$file->extension}";
    $file     = UploadedFile::fake()->image($location);

    Storage::fake('public')->putFileAs('files', $file, $location);

});

/**
 * Post create document - upload file
 */
$factory->afterCreatingState(Fusion\Models\File::class, 'document', function ($file, $faker) {
    $location = "{$file->uuid}-{$file->name}.{$file->extension}";
    $file     = UploadedFile::fake()->createWithContent($location, $faker->paragraphs(3, true));

    Storage::fake('public')->putFileAs('files', $file, $location);
});