<?php

namespace Fusion;

use Fusion\Models\Script;
use Fusion\Concerns\RegistersAssets;

class Fusion
{
    use RegistersAssets;

    public function scripts($location)
    {
        $scripts = Script::select(['code', 'trigger_on', 'trigger_where'])
            ->where('location', $location)
            ->where('status', true)
            ->get()
            ->filter(function($script) {
                if ($script->trigger_on == 'all') {
                    return true;
                }

                $requestMatches = request()->is($script->trigger_where);

                if ($script->trigger_on == 'except') {
                    return !$requestMatches;
                }

                return $requestMatches;
            })
            ->implode('code', "\n");

        return $scripts;
    }
}
