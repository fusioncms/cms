<?php

namespace Fusion\Http\Controllers\API\Fields;

use Fusion\Http\Requests\FieldRequest;
use Fusion\Http\Requests\FileUploadRequest;
use Fusion\Http\Controllers\Controller;

class FieldController extends Controller
{
    /**
     * Validate field, but don't persist to storage.
     *
     * @param  FileUploadRequest $request
     * @return JsonResponse
     */
    public function valid(FieldRequest $request)
    {
        return response()->json($request->all());
    }

    /**
     * Handle the incoming file field requests.
     *
     * @param  FileUploadRequest  $request
     * @return JsonResponse
     */
    public function file(FileUploadRequest $request)
    {
        $valid = $request->validated();
        $files = is_array($valid['file']) ? $valid['file'] : [ $valid['file'] ];
        $temp  = [];

        foreach ($files as $file) {
            $uuid = unique_id();
            $name = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $extn = $file->guessClientExtension();

            // temp storage..
            $temp[] = $file->storeAs(sys_get_temp_dir(), "{$uuid}-{$name}.{$extn}");
        }

        return response()->json([ 'files' => $temp ]);
    }
}
