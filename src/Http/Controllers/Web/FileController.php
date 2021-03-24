<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Streamers\Video\LaravelStreamer as LaravelVideoStreamer;
use Fusion\Models\File;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileController extends Controller
{
    public function index($uuid, $name)
    {
        $file = File::where('uuid', $uuid)->firstOrFail();

        // Append last modified date
        $params      = request()->all();
        $params['t'] = $file->updated_at->format('U');

        if ($name !== $file->name) {
            return redirect()->to('/file/'.$uuid.'/'.$file->name.'?'.http_build_query($params));
        }

        if (in_array($file->mimetype, ['image/jpeg', 'image/gif', 'image/png'])) {
            return $this->imageResponse($file, $params);
        }

        if (Str::startsWith($file->mimetype, 'video')) {
            return $this->videoResponse($file->location, $file->mimetype);
        }

        return Storage::disk($file->disk->handle)->response(
            $file->location,
            $file->name,
            [
                'Content-Type' => $file->mimetype,
            ]
        );
    }

    protected function imageResponse($file, $params)
    {
        return glide($file->disk->handle)->getImageResponse($file->location, $params);
    }

    protected function videoResponse($path, $mimetype)
    {
        $path = storage_path('app/public/'.$path);

        return (new LaravelVideoStreamer($path, $mimetype))->stream();
    }
}
