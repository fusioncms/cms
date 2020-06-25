<?php

namespace Fusion\Http\Controllers\API\Addons;

use Exception;
use ZipArchive;
use Fusion\Facades\Addon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\AddonUploadRequest;

class UploadController extends Controller
{
    /**
     * @var \ZipArchive
     */
    protected $zipArchive;

    /**
     * Constructor.
     *
     * @param  \ZipArchive $zipArchive
     * @return void
     */
    public function __construct(ZipArchive $zipArchive)
    {
        $this->zipArchive = $zipArchive;
    }

    /**
     * Request for new module installation.
     *
     * @param  \Fusion\Http\Requests\AddonUploadRequest $request
     * @return void
     */
    public function store(AddonUploadRequest $request)
    {
        $this->authorize('addons.create');

        $upload   = $request->file('file-upload');
        $origName = pathinfo($upload->getClientOriginalName(), PATHINFO_FILENAME);

        try {
            if ($this->zipArchive->open($upload) === true) {
                $index      = $this->zipArchive->locateName('addon.json', ZipArchive::FL_NODIR);
                $filename   = $this->zipArchive->getNameIndex($index);
                $fileHandle = $this->zipArchive->getStream($filename);

                $settings   = stream_get_contents($fileHandle);
                $settings   = json_decode($settings);

                $files = [];
                for ($i = 0; $i < $this->zipArchive->numFiles; ++$i) {
                    $this->zipArchive->renameIndex($i, str_replace($origName, $settings->namespace, $this->zipArchive->getNameIndex($i)));
                    $files[] = $this->zipArchive->getNameIndex($i);
                }

                $this->zipArchive->extractTo(addon_path(), $files);
                $this->zipArchive->close();

                // Artisan::call('addon:discover');
                Addon::discover();
            } else {
                throw new Exception('Unable to locate an addon manifest file.');
            }
        } catch (Exception $exception) {
            Log::error('[Addon Upload]: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }
}
