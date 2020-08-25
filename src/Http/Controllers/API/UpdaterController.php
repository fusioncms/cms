<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Jobs\BackupRun;
use Fusion\Jobs\UpdateVersion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ChangelogResource;

class UpdaterController extends Controller
{
    /**
     * Show all "fusioncms/cms" changelog items.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Fusion\Http\Resources\ChangelogResource
     */
    public function index(Request $request)
    {
        return new ChangelogResource($this->changelog());
    }

    /**
     * Update to version.
     * 
     * @param  \Illuminate\Http\Request $request
     * @return void
     */
    public function store(Request $request)
    {
        // BackupRun::withChain([
        //     new UpdateVersion($request->input('version'))
        // ])->dispatch();
    }

    /**
     * Pull changelog from public feed.
     * 
     * @return json
     */
    private function changelog()
    {
        return Cache::remember('changelog', 60*60*24, function() {
            $response = (new \GuzzleHttp\Client)
                ->get('https://beta.getfusioncms.com/releases.json');

            return json_decode($response->getBody(), true);

        });
    }
}
