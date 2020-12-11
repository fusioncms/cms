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
        $viewID = setting('google_analytics.analytic_view_id');
        $credentials = setting('google_analytics.analytic_credentials');

        if (empty($viewID) or empty($credentials)) {
            return;
        }

        try {
            Analytics::fetchTotalVisitorsAndPageViews(Period::days(1));

            return response()->json(['status' => 'OK']);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'failed',
                'message' => $exception->getMessage(),
            ]);
        }
    }
}
