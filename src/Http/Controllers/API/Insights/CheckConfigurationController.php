<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Exception;
use Fusion\Http\Controllers\Controller;
use Spatie\Analytics\Period;

class CheckConfigurationController extends Controller
{
    public function index()
    {
        try {
            if (!empty(setting('google_analytics.analytic_view_id')) and !empty(setting('google_analytics.analytic_credentials'))) {
                Analytics::fetchTotalVisitorsAndPageViews(Period::days(1));

                return response()->json(['status' => 'OK']);
            }
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'failed',
                'message' => $exception->getMessage(),
            ]);
        }
    }
}
