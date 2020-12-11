<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\InsightResource;
use Fusion\Models\Matrix;
use Fusion\Services\Builders;
use Spatie\Analytics\Period;

class SingleController extends Controller
{
    public function index($matrix)
    {
        $matrix   = Matrix::where('slug', $matrix)->firstOrFail();
        $single   = Builders\Single::resolve($matrix->handle);
        $pagePath = compile_blade_template($matrix->route, $single->first()) ?: '/';

        $stats = Analytics::performQuery(
            Period::days(30),
            'ga:users,ga:pageviews,ga:avgSessionDuration,ga:bounceRate',
            ['filters' => "ga:pagePath=~{$pagePath}"]
        );

        $overview = collect($stats['rows'] ?? [])->map(function (array $row) {
            return [
                'totalVisitors'          => $row[0] ?: 0,
                'totalPageViews'         => $row[1] ?: 0,
                'averageSessionDuration' => $row[2] ?: 0,
                'bounceRate'             => $row[3] ?: 0,
            ];
        })->first();

        return new InsightResource($overview);
    }
}
