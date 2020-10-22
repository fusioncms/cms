<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Concerns\HasCustomLogger;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\Backups\UploadRequest;
use Fusion\Models\Backup;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    use HasCustomLogger;

    /**
     * Handle the incoming request.
     *
     * @param \Fusion\Http\Requests\Backups\UploadRequest $request
     *
     * @return JsonResponse
     */
    public function index(UploadRequest $request)
    {
        $attributes = $request->validated();
        $file       = $attributes['file-upload'];

        foreach (config('backup.backup.destination.disks') as $disk) {
            $name = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $size = $file->getSize();
            $path = preg_replace('/[^a-zA-Z0-9.]/', '-', config('backup.backup.name'));

            if ($location = Storage::disk($disk)->putFileAs($path, $file, $name)) {
                $backup = Backup::create([
                    'name'     => $name,
                    'disk'     => $disk,
                    'size'     => $size,
                    'location' => $location,
                    'state'    => Backup::IN_PROGRESS,
                    'log_path' => ($path = "logs/backups/{$name}.log"),
                ]);

                $this
                    ->logToFile($path, $disk)
                    ->info('Backup Uploaded.', $backup->toArray());
            }
        }

        return response()->json([], 201);
    }
}
