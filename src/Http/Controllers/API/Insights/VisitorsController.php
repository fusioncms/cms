<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\InsightResource;
use Spatie\Analytics\Period;

class VisitorsController extends Controller
{
    public function index()
    {
        $data = Analytics::fetchTotalVisitorsAndPageViews(Period::days(30));

        return new InsightResource($data);
    }
}
