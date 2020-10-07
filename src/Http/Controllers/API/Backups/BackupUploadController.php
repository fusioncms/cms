<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\BackupUploadRequest;
use Fusion\Models\Backup;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

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
        $file       = $attributes['file-upload'];

        foreach (config('backup.backup.destination.disks') as $disk) {
            $name = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);            
            $size = $file->getSize();
            $path = preg_replace('/[^a-zA-Z0-9.]/', '-', config('backup.backup.name'));
            
            if ($location = Storage::disk($disk)->putFileAs($path, $file, $name)) {
                Backup::create([
                    'name'     => $name,
                    'disk'     => $disk,
                    'size'     => $size,
                    'location' => $location,
                ]);
            }
        }

        return response()->json([], 201);
    }
}
