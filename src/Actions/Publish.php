<?php

namespace Fusion\Actions;

class Publish extends BulkAction
{
    protected $success = 'Selected items successfully published.';

    /**
     * Execute the action and return a result.
     *
     * @return mixed
     */
    public function process($entries)
    {
        activity()->withoutLogs(function () use($entries) {
            $entries->each(function ($entry) {
                $entry->update(['status' => 1]);
            });
        });
    }
}
