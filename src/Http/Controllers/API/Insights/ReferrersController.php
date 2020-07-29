<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\InsightResource;
use Spatie\Analytics\Period;

class ReferrersController extends Controller
{
    public function index()
    {
        $data = Analytics::fetchTopReferrers(Period::days(30));

        return InsightResource::collection($data);
    }
}
