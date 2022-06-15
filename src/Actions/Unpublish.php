<?php

namespace Fusion\Actions;

class Unpublish extends BulkAction
{
    protected $success = 'Selected items successfully unpublished.';

    /**
     * Execute the action and return a result.
     *
     * @return mixed
     */
    public function process($entries)
    {
        activity()->withoutLogs(function () use($entries) {
            $entries->each(function ($entry) {
                $entry->update(['status' => 0]);
            });
        });
    }
}
