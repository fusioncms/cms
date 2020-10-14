<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\BackupResource;
use Fusion\Jobs\Backups\Backup\BackupRun;
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
     * @param \Illuminate\Http\Request  $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        $this->authorize('backups.create');

        BackupRun::dispatch()
            ->onConnection('database')
            ->onQueue('backups');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\Backup     $backup
     *
     * @return \Fusion\Http\Resources\BackupResource
     */
    public function update(Request $request, Backup $backup)
    {
        $this->authorize('backups.update');

        $attributes = $request->validate($request->all(), [
            'name' => 'required|string'
        ]);

        $backup->update($attributes);

        return new BackupResource($backup);
    }

    /**
     * Remove the specified backup from disk.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\Backup     $backup
     *
     * @return void
     */
    public function destroy(Request $request, Backup $backup)
    {
        $this->authorize('backups.delete');

        $backup->delete();
    }
}
