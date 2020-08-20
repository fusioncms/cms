<?php

namespace Fusion\Http\Controllers\API;

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
     * Pull changelog from public feed.
     * 
     * @return json
     */
    private function changelog()
    {
        return Cache::rememberForever('changelog', function() {
            $response = (new \GuzzleHttp\Client)
                ->get('https://beta.getfusioncms.com/releases.json');

            return json_decode($response->getBody(), true);

        });
    }
}
