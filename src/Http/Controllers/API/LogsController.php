<?php

namespace Fusion\Http\Controllers\API;

use Illuminate\Http\Request;
use Fusion\Services\Logs\Repository;
use Fusion\Http\Controllers\Controller;

class LogsController extends Controller
{

    /**
     * Return a JSON object of available log files
     * and error information in current log file
     *
     * @return String
     */
    public function index(Request $request)
    {
        $log     = new Repository;

        if ($request->input('l')) {
            $log->setFile($request->input('l'));
        }

        $logs        = $log->all();
        $files       = $log->getFiles(true);
        $currentFile = $log->getFileName();

        return json_encode(['logs' => $logs, 'files' => $files, 'currentFile' => $currentFile]);
    }
}
