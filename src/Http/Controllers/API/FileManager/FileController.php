<?php

namespace Fusion\Http\Controllers\API\FileManager;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\FileUpdateRequest;
use Fusion\Http\Requests\FileUploadRequest;
use Fusion\Http\Resources\FileResource;
use Fusion\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class FileController extends Controller
{
    public function index(Request $request)
    {
        $this->authorize('files.viewAny');

        $files = QueryBuilder::for(File::class)
            ->allowedFilters([
                AllowedFilter::exact('directory_id')->default(0),
                AllowedFilter::scope('search', 'searchQuery'),
                AllowedFilter::scope('display', 'displayQuery'),
            ])
            ->allowedSorts(['name', 'bytes', 'updated_at'])
            ->defaultSort('name')
            ->paginate(
                request()->query('perPage', 50),
                ['*'],
                'page',
                request()->query('page', 1)
            );

        return FileResource::collection($files);
    }

    /**
     * Show the specific resource.
     *
     * @param string $uuid
     *
     * @return
     */
    public function show(Request $request, $uuid)
    {
        $this->authorize('files.view');

        $file = File::where('uuid', $uuid)->firstOrFail();

        return new FileResource($file);
    }

    /**
     * Persist a new resource in storage.
     *
     * @param \Fusion\Http\Requests\FileUploadRequest $request
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function store(FileUploadRequest $request)
    {
        $upload    = $request->file('file');
        $directory = $request->input('directory_id', 0);
        $uuid      = unique_id();
        $name      = pathinfo($upload->getClientOriginalName(), PATHINFO_FILENAME);
        $extension = $upload->extension();
        $bytes     = $upload->getSize();
        $mimetype  = $upload->getClientMimeType();
        $filetype  = strtok($mimetype, '/');
        $location  = "files/{$uuid}-{$name}.{$extension}";

        Storage::disk('public')->putFileAs('', $upload, $location);

        switch ($filetype) {
            case 'image':
                list($width, $height) = getimagesize($upload);
            break;
            case 'audio':
            case 'video':
                // TODO: capture duration
            break;
        }

        $file = File::create([
            'directory_id' => $directory,
            'uuid'         => $uuid,
            'name'         => $name,
            'extension'    => $extension,
            'bytes'        => $bytes,
            'mimetype'     => $mimetype,
            'location'     => $location,
            'width'        => $width ?? null,
            'height'       => $height ?? null,

        ]);

        return new FileResource($file);
    }

    /**
     * Update an existing resource in storage.
     *
     * @param \Fusion\Http\Requests\FileUpdateRequest $request
     * @param \Fusion\Models\File                     $file
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function update(FileUpdateRequest $request, File $file)
    {
        $file->update($request->validated());

        return new FileResource($file);
    }

    public function destroy(Request $request, File $file)
    {
        $this->authorize('files.delete');

        Storage::delete($file->location);

        $file->delete();
    }
}
