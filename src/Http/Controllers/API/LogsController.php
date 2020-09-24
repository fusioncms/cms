<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Services\Parsers\Logs\Repository;
use Illuminate\Http\Request;

class LogsController extends Controller
{
    /**
     * Return a JSON object of available log files
     * and error information in current log file.
     *
     * @return string
     */
    public function index(Request $request)
    {
        $this->authorize('access.controlPanel');

        $log = new Repository();

        if ($request->input('l')) {
            $log->setFile($request->input('l'));
        }

        $logs        = $log->all();
        $files       = $log->getFiles(true);
        $currentFile = $log->getFileName();

        return json_encode(['logs' => $logs, 'files' => $files, 'currentFile' => $currentFile]);
    }
}
