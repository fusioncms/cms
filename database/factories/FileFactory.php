<?php

namespace Database\Factories;

use Fusion\Models\File;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class FileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = File::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
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
            'width'        => $this->faker->randomNumber(2),
            'height'       => $this->faker->randomNumber(2),
            'bytes'        => $this->faker->randomNumber(3),
        ];
    }

    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function(File $file) {
            $type = Str::before($file->mimetype, '/');

            switch($type) {
                case 'image':
                    $location = "{$file->uuid}-{$file->name}.{$file->extension}";
                    $fakeFile = UploadedFile::fake()->image($location);

                    Storage::fake('public')->putFileAs('files', $fakeFile, $location);
                    break;

                case 'text':
                    $location = "{$file->uuid}-{$file->name}.{$file->extension}";
                    $fakeFile = UploadedFile::fake()->createWithContent($location, $this->faker->paragraphs(3, true));

                    Storage::fake('public')->putFileAs('files', $fakeFile, $location);
                    break;
            }
        });
    }

    /**
     * Set model as name.
     *
     * @param  string $name
     * 
     * @return $this
     */
    public function withName($name)
    {
        return $this->state([
            'name' => $name
        ]);
    }

    /**
     * Set model as audio type.
     * 
     * @return $this
     */
    public function asAudio()
    {
        return $this->state([
            'uuid'      => ($uuid = unique_id()),
            'name'      => ($name = $this->faker->word),
            'extension' => ($extn = 'ogg'),
            'mimetype'  => 'audio/ogg',
            'location'  => "files/{$uuid}-{$name}.{$extn}",
            'width'     => null,
            'height'    => null,
        ]);
    }

    /**
     * Set model as video type.
     *
     * @param  string $name
     * 
     * @return $this
     */
    public function asVideo()
    {
        return $this->state([
            'uuid'      => ($uuid = unique_id()),
            'name'      => ($name = $this->faker->word),
            'extension' => ($extn = 'webm'),
            'mimetype'  => 'video/webm',
            'location'  => "files/{$uuid}-{$name}.{$extn}",
            'width'     => null,
            'height'    => null,
        ]);
    }

    /**
     * Set model as document type.
     *
     * @param  string $name
     * 
     * @return $this
     */
    public function asDocument()
    {
        return $this->state([
            'uuid'      => ($uuid = unique_id()),
            'name'      => ($name = $this->faker->word),
            'extension' => ($extn = 'txt'),
            'mimetype'  => 'text/plain',
            'location'  => "files/{$uuid}-{$name}.{$extn}",
            'width'     => null,
            'height'    => null,
        ]);
    }
}
