<?php

namespace Fusion\Http\Controllers\API\FileManager;

use Fusion\Models\File;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\FileResource;
use Illuminate\Support\Facades\Storage;

class FileReplaceController extends Controller
{
	/**
     * Replace file in storage with another.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Fusion\Models\File          $file
     */
    public function store(Request $request, File $file)
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

        if (Storage::disk('public')->putFileAs('', $upload, $file->location)) {
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