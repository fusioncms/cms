<?php

namespace Fusion\Http\Controllers\API\FileManager;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Disk;
use Fusion\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileDownloadController extends Controller
{
	/**
     * Download the specific resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Disk      $disk
     * @param \Fusion\Models\File      $file
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function index(Request $request, Disk $disk, File $file)
    {
        $this->authorize('files.download');

        $path = Storage::disk($disk->handle)->path($file->location);

        return response()->download($path, "{$file->name}.{$file->extension}");
    }
}
