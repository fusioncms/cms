<?php

namespace Fusion\Http\Controllers\API\FileManager;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\FileRequest;
use Fusion\Http\Requests\UploadFileRequest;
use Fusion\Http\Resources\FileResource;
use Fusion\Models\Disk;
use Fusion\Models\File;
use Fusion\Services\FileUploader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Disk             $disk
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function index(Request $request, Disk $disk)
    {
        $this->authorize('files.viewAny');

        $files = QueryBuilder::for(File::class)
            ->where('disk_id', $disk->id)
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
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Disk      $disk
     * @param \Fusion\Models\File      $file
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function show(Request $request, Disk $disk, File $file)
    {
        $this->authorize('files.view');

        return new FileResource($file);
    }

    /**
     * Persist a new resource in storage.
     *
     * @param \Fusion\Http\Requests\UploadFileRequest $request
     * @param \Fusion\Models\Disk                     $disk
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function store(UploadFileRequest $request, Disk $disk)
    {
        $attributes = $request->validated();

        $extensions = setting('files.accepted_files');
        $file = new FileUploader($request->file('file'));

        $check = false;
        foreach($extensions as $extension) {
            if ($extension['value'] === $file->getExtension()) {
                $check = true; break;
            }
        }

        if ($check === false) {
            abort(500, 'File extension not allowed. Allow in settings before resubmitting');
        }

        $file = (new FileUploader($request->file('file')))
            ->setDisk($disk)
            ->setDirectory($attributes['directory_id'])
            ->persist();

        return new FileResource($file);
    }

    /**
     * Update an existing resource in storage.
     *
     * @param \Fusion\Http\Requests\FileRequest $request
     * @param \Fusion\Models\Disk               $disk
     * @param \Fusion\Models\File               $file
     *
     * @return \Fusion\Http\Resources\FileResource
     */
    public function update(FileRequest $request, Disk $disk, File $file)
    {
        $attributes = $request->validated();

        /**
         * Update location, if applicable.
         */
        if ($file->location !== $attributes['location']) {
            Storage::disk($disk->handle)->move($file->location, $attributes['location']);
        }

        $file->update($attributes);

        return new FileResource($file);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Disk      $disk
     * @param \Fusion\Models\File      $file
     *
     * @return void
     */
    public function destroy(Request $request, Disk $disk, File $file)
    {
        $this->authorize('files.delete');

        Storage::disk($disk->handle)->delete($file->location);

        $file->delete();
    }
}
