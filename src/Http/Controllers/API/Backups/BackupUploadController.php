<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\BackupUploadRequest;
use Fusion\Models\Backup;
use Illuminate\Support\Carbon;

class BackupUploadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return void
     */
    public function index(BackupUploadRequest $request)
    {
        $attributes = $request->validated();
        $upload     = $attributes['file-upload'];

        foreach (config('backup.backup.destination.disks') as $disk) {
            $name  = Carbon::now()->format('Y-m-d-H-i-s');
            $bytes = $upload->getSize();

            if ($upload->storeAs('backups', "{$name}.zip", [$disk])) {
                Backup::create([
                    'name' => $name,
                    'disk' => $disk,
                    'size' => $bytes,
                ]);
            }
        }

        return response()->json([], 201);
    }
}
