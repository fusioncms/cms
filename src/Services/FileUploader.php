<?php

namespace Fusion\Services;

use Fusion\Models\Directory;
use Fusion\Models\Disk;
use Fusion\Models\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploader
{
    /**
     * @var \Fusion\Models\Disk
     */
    protected $disk;

    /**
     * @var \Illuminate\Http\UploadedFile
     */
    protected $file;

    /**
     * @var \Fusion\Models\Directory
     */
    protected $directory;

    /**
     * @var array
     */
    protected $info = [];

    /**
     * @var string
     */
    protected $prefix = 'files';

    /**
     * Create new instance.
     *
     * @param \Illuminate\Http\UploadedFile $file
     * @param array                         $overrides
     */
    public function __construct(UploadedFile $file, array $overrides = [])
    {
        $this->file = $file;
        $this->info = array_merge([
            'uuid'      => ($uuid = unique_id()),
            'name'      => ($name = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)),
            'extension' => ($extn = $file->extension()),
            'bytes'     => $file->getSize(),
            'mimetype'  => ($mimetype = $file->getClientMimeType()),
            'filetype'  => strtok($mimetype, '/'),
            'location'  => "{$this->prefix}/{$uuid}-{$name}.{$extn}",
        ], $overrides);

        $this->setDefaultDisk();
        $this->setDimensions();
    }

    public function getExtension() {
        return $this->info['extension'];
    }

    /**
     * Set Disk for File to Upload.
     *
     * @param \Fusion\Models\Disk|int $disk
     *
     * @return $this
     */
    public function setDisk($disk)
    {
        if (is_a($disk, Disk::class)) {
            $this->disk = $disk;
        } elseif (is_numeric($disk) and $disk > 0) {
            $this->disk = Disk::findOrFail($disk);
        }

        return $this;
    }

    /**
     * Set Directory for File to Upload.
     *
     * @param \Fusion\Models\Directory|int $disk
     *
     * @return $this
     */
    public function setDirectory($directory)
    {
        if (is_a($directory, Directory::class)) {
            $this->directory = $directory;
        } elseif (is_numeric($directory) and $directory > 0) {
            $this->directory = Directory::findOrFail($directory);
        }

        return $this;
    }

    /**
     * Set directory vis path.
     * Creates directory path if it doesn't exist.
     *
     * @param string $directoryPath
     *
     * @return $this
     */
    public function setDirectoryByPath($directoryPath)
    {
        $fullpath = explode('/', trim($directoryPath, '/'));

        foreach ($fullpath as $path) {
            $path = trim($path);

            if (!empty($path)) {
                $this->directory = Directory::firstOrCreate([
                    'disk_id'   => $this->disk->id,
                    'slug'      => str_handle($path),
                ], [
                    'parent_id' => $this->directory ? $this->directory->id : 0,
                    'name'      => ucwords($path),
                ]);
            }
        }

        return $this;
    }

    /**
     * Persist file upload.
     *
     * @return \Fusion\Models\File
     */
    public function persist()
    {
        $this->info['disk_id']      = $this->disk->id;
        $this->info['directory_id'] = $this->directory ? $this->directory->id : 0;

        Storage::disk($this->disk->handle)
            ->putFileAs('', $this->file, $this->info['location']);

        return File::create($this->info);
    }

    /**
     * Sets default disk for file uploads.
     *
     * @return void
     */
    protected function setDefaultDisk()
    {
        $this->disk = Disk::where('handle', 'public')->firstOrFail();
    }

    /**
     * Sets file dimension (if applicable).
     *
     * @return void
     */
    protected function setDimensions()
    {
        if ($this->info['filetype'] == 'image') {
            list($width, $height) = getimagesize($this->file);

            $this->info['width']  = $width;
            $this->info['height'] = $height;
        } else {
            $this->info['width']  = null;
            $this->info['height'] = null;
        }
    }
}
