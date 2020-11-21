<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Carbon\Carbon;
use Fusion\Models\Matrix;
use Spatie\Analytics\Period;
use Fusion\Services\Builders\Single;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\InsightResource;

class SingleController extends Controller
{
    public function index($matrix)
    {
        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $single = (new Single($matrix->handle))->make();

        $page = '/docs';

        $stats         = Analytics::performQuery(Period::days(30), 'ga:users,ga:pageviews,ga:avgSessionDuration,ga:bounceRate', [
            'filters' => "ga:pagePath=~{$page}"]);
        $dailyResponse = Analytics::performQuery(Period::days(30), 'ga:users,ga:pageviews,ga:bouncerate', ['dimensions' => 'ga:date', 'filters' => "ga:pagePath=~{$page}"]);
        $daily         = collect($dailyResponse['rows'] ?? [])->map(function (array $row) {
            return [
                'date'       => Carbon::createFromFormat('Ymd', $row[0]),
                'visitors'   => (int) $row[1],
                'pageViews'  => (int) $row[2],
                'bounceRate' => (int) $row[3],
            ];
        });

        $overview = collect($stats['rows'] ?? [])->map(function (array $row) use ($daily) {
            return [
                'totalVisitors'          => $row[0] ?: 0,
                'totalPageViews'         => $row[1] ?: 0,
                'averageSessionDuration' => $row[2] ?: 0,
                'bounceRate'             => $row[3] ?: 0,
                'daily'                  => $daily,
            ];
        })->first();

        return new InsightResource($overview);
    }
}