<?php

namespace Fusion\Http\Controllers\API\FileManager;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\FileResource;
use Fusion\Models\Disk;
use Fusion\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileReplaceController extends Controller
{
    /**
     * Replace file in storage with another.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Disk      $disk
     * @param \Fusion\Models\File      $file
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function store(Request $request, Disk $disk, File $file)
    {
        $this->authorize('files.update');

        $upload    = $request->file('file');
        $extension = $upload->extension();
        $bytes     = $upload->getSize();
        $mimetype  = $upload->getClientMimeType();
        $filetype  = strtok($mimetype, '/');

        switch ($filetype) {
            case 'image':
                list($width, $height) = getimagesize($upload);
            break;
            case 'audio':
            case 'video':
                // TODO: capture duration
            break;
        }

        if (Storage::disk($disk->handle)->putFileAs('', $upload, $file->location)) {
            $file->update([
                'extension' => $extension,
                'bytes'     => $bytes,
                'mimetype'  => $mimetype,
                'width'     => $width ?? null,
                'height'    => $height ?? null,
            ]);

            glide()->deleteCache($file->location);
        }

        return new FileResource($file);
    }
}
