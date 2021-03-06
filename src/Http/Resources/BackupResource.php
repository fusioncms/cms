<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use LimitIterator;
use SplFileObject;

class BackupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        $response         = parent::toArray($request);
        $response['logs'] = $this->packageLogs();

        return $response;
    }

    /**
     * Package log messages.
     *
     * @return arrray
     */
    private function packageLogs()
    {
        // Open log file..
        $logFile = Storage::disk($this->disk)->path($this->log_path);
        $logFile = new SplFileObject($logFile);
        $logFile->seek($logFile->getSize());  // Move cursor to EOF

        // Settings..
        $total = $logFile->key();
        $page  = (int) Arr::get(request()->query(), 'page', 1);
        $limit = (int) Arr::get(request()->query(), 'limit', 25);
        $pages = ceil($total / $limit);

        // Iterate through lines, starting from end..
        // $lines = new LimitIterator($logFile, $total - $page * $limit, $limit);
        $lines = new LimitIterator($logFile, ($page - 1) * $limit, $limit);
        $lines = iterator_to_array($lines);
        $lines = array_reverse($lines);
        $lines = array_filter($lines);

        $logs = [
            'data'  => [],
            'page'  => $page,
            'limit' => $limit,
            'total' => $total,
            'pages' => $pages,
        ];

        foreach ($lines as $line) {
            $log             = json_decode($line, true);
            $log['happened'] = Carbon::parse($log['datetime'])->diffForHumans();

            $logs['data'][] = $log;
        }

        return $logs;
    }
}
