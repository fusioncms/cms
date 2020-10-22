<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Events\Backups\Backup\WasUpdated;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\Backups\UpdateRequest;
use Fusion\Http\Resources\BackupResource;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Models\Backup;
use Illuminate\Http\Request;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\BackupResource
     */
    public function index(Request $request)
    {
        $this->authorize('backups.viewAny');

        $backups = Backup::all();

        return BackupResource::collection($backups);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Backup $backup
     *
     * @return \Fusion\Http\Resources\BackupResource
     */
    public function show(Backup $backup)
    {
        $this->authorize('backups.view');

        return new BackupResource($backup);
    }

    /**
     * Create new backup to be saved on disk.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        $this->authorize('backups.create');

        BackupRun::dispatch();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\Backups\UpdateRequest $request
     * @param \Fusion\Models\Backup                       $backup
     *
     * @return \Fusion\Http\Resources\BackupResource
     */
    public function update(UpdateRequest $request, Backup $backup)
    {
        $backup->update($request->validated());

        event(new WasUpdated($backup));

        return new BackupResource($backup);
    }

    /**
     * Remove the specified backup from disk.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Backup    $backup
     *
     * @return void
     */
    public function destroy(Request $request, Backup $backup)
    {
        $this->authorize('backups.delete');

        $backup->delete();
    }
}
