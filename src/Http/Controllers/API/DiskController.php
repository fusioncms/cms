<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\DiskRequest;
use Fusion\Http\Resources\DiskResource;
use Fusion\Models\Disk;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DiskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\DiskResource
     */
    public function index(Request $request)
    {
        $this->authorize('disks.viewAny');

        $disks = Disk::orderBy('name')->get();

        return DiskResource::collection($disks);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Disk $disk
     *
     * @return \Fusion\Http\Resources\DiskResource
     */
    public function show(Disk $disk)
    {
        $this->authorize('disks.view');

        return new DiskResource($disk);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Fusion\Http\Requests\DiskRequest $request
     *
     * @return \Fusion\Http\Resources\DiskResource
     */
    public function store(DiskRequest $request)
    {
        $disk = Disk::create($request->validated());

        return new DiskResource($disk);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\DiskRequest $request
     * @param \Fusion\Models\Disk               $disk
     *
     * @return \Fusion\Http\Resources\DiskResource
     */
    public function update(DiskRequest $request, Disk $disk)
    {
        $disk->update($request->validated());

        return new DiskResource($disk);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Fusion\Models\Disk $disk
     *
     * @return void
     */
    public function destroy(Disk $disk)
    {
        $this->authorize('disks.delete');

        if ($disk->is_default) {
            throw ValidationException::withMessages(['handle' => 'Cannot delete default disk.']);
        }

        $disk->delete();
    }

    /**
     * Set default disk.
     * 
     * @param \Fusion\Models\Disk $disk
     * 
     * @return void
     */
    public function setDefault(Disk $disk)
    {
        if ($default = Disk::where('is_default', true)->first()) {
            $default->forceFill(['is_default' => false])->save();
        }

        $disk->forceFill(['is_default' => true])->save();

        config(['filesystems.default' => $disk->handle]);
    }
}
