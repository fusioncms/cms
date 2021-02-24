<?php

namespace Fusion\Http\Controllers\API\FileManager;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\DirectoryRequest;
use Fusion\Http\Resources\DirectoryResource;
use Fusion\Models\Directory;
use Fusion\Models\Disk;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class DirectoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Fusion\Http\Requests\Request $request
     * @param \Fusion\Models\Disk           $disk
     *
     * @return \Fusion\Http\Resources\DirectoryResource
     */
    public function index(Request $request, Disk $disk)
    {
        $this->authorize('directories.viewAny');

        if ($request->recursive) {
            $directories = Directory::hierarchy()->get();
        } else {
            $directories = QueryBuilder::for(Directory::class)
                ->where('disk_id', $disk->id)
                ->withCount('files')
                ->allowedFilters([
                    AllowedFilter::exact('parent_id')->default(0),
                    AllowedFilter::callback('search', function (Builder $query, $value) {
                        $query->where('name', 'like', "%{$value}%");
                    }),
                ])
                ->allowedSorts('name')
                ->defaultSort('name')
                ->get();
        }

        return DirectoryResource::collection($directories);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Http\Requests\Request $request
     * @param \Fusion\Models\Disk           $disk
     * @param \Fusion\Models\File           $file
     *
     * @return \Fusion\Http\Resources\DirectoryResource
     */
    public function show(Request $request, Disk $disk, Directory $directory)
    {
        $this->authorize('directories.view');

        return new DirectoryResource($directory);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Fusion\Http\Requests\DirectoryRequest $request
     * @param \Fusion\Models\Disk                    $disk
     *
     * @return \Fusion\Http\Resources\DirectoryResource
     */
    public function store(DirectoryRequest $request, Disk $disk)
    {
        $directory = Directory::create($request->validated());

        return new DirectoryResource($directory);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\DirectoryRequest $request
     * @param \Fusion\Models\Disk                    $disk
     * @param \Fusion\Models\Directory               $directory
     *
     * @return \Fusion\Http\Resources\DirectoryResource
     */
    public function update(DirectoryRequest $request, Disk $disk, Directory $directory)
    {
        $directory->update($request->validated());

        return new DirectoryResource($directory);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Disk      $disk
     * @param \Fusion\Models\Directory $directory
     *
     * @return void
     */
    public function destroy(Request $request, Disk $disk, Directory $directory)
    {
        $this->authorize('directories.delete');

        $directory->delete();
    }
}
