<?php

namespace Fusion\Logging;

use Illuminate\Log\Logger;
use Monolog\Formatter\LineFormatter;

class ComposerFormatter
{
    /**
     * Customize logger instance.
     *
     * @param Logger $logger
     *
     * @return void
     */
    public function __invoke(Logger $logger)
    {
        foreach ($logger->getHandlers() as $handler) {
            $handler->setFormatter(new LineFormatter("%message%\n"));
        }
    }
}
