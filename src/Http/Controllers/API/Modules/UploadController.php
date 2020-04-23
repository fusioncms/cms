<?php

namespace Fusion\Http\Controllers\API\Modules;

use Exception;
use ZipArchive;
use Fusion\Jobs\DumpAutoload;
use Illuminate\Support\Facades\Log;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ModuleUploadRequest;

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
     * @param  \Fusion\Http\Requests\ModuleUploadRequest $request
     * @return void
     */
    public function store(ModuleUploadRequest $request)
    {
        try {
            if ($this->zipArchive->open(request()->file('file-upload')) === true) {
                $index      = $this->zipArchive->locateName('module.json', ZipArchive::FL_NODIR);
                $filename   = $this->zipArchive->getNameIndex($index);
                $fileHandle = $this->zipArchive->getStream($filename);
                
                $settings   = stream_get_contents($fileHandle);
                $settings   = json_decode($settings);

                // --
                $this->zipArchive->extractTo(base_path('modules'));
                $this->zipArchive->close();

                Module::optimize();
                Module::set($settings->slug . '::enabled', false);
                Module::set($settings->slug . '::registered', false);

                dispatch(function() use ($settings) {
                    DumpAutoload::dispatchNow();
                    Module::set($settings->slug . '::registered', true);
                })->afterResponse();
            } else {
                throw new Exception('Unable to locate and unzip module file.');
            }
        } catch (Exception $exception) {
            Log::error('[Module Upload]: ' . $exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }
}
