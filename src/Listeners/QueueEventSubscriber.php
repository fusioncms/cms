<?php

namespace Fusion\Listeners;

use Illuminate\Queue\Events\JobExceptionOccurred;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\Looping;
use Illuminate\Queue\Events\WorkerStopping;

class QueueEventSubscriber
{
    /**
     * @param \Illuminate\Queue\Events\JobExceptionOccurred $event
     *
     * @return void
     */
    public function handleJobExceptionOccurred($event)
    {
        // $event->job
        // $event->exception
        // $event->connectionName
    }

    /**
     * @param \Illuminate\Queue\Events\JobProcessed $event
     *
     * @return void
     */
    public function handleJobProcessed($event)
    {
        // $event->job
        // $event->connectionName
    }

    /**
     * @param \Illuminate\Queue\Events\JobProcessing $event
     *
     * @return void
     */
    public function handleJobProcessing($event)
    {
        // $event->job
        // $event->exception
        // $event->connectionName
    }
    
    /**
     * @param \Illuminate\Queue\Events\JobFailed $event
     *
     * @return void
     */
    public function handleJobFailed($event)
    {
        // $event->job
        // $event->exception
        // $event->connectionName
    }

    /**
     * @param \Illuminate\Queue\Events\Looping $event
     *
     * @return void
     */
    public function handleLooping($event)
    {
        // $event->queue
        // $event->connectionName
    }

    /**
     * @param \Illuminate\Queue\Events\WorkerStopping $event
     *
     * @return void
     */
    public function handleWorkerStopping($event)
    {
        // $event->status
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     *
     * @return void
     */
    public function subscribe($events)
    {
        $events->listen('Illuminate\Queue\Events\JobExceptionOccurred',
            [QueueEventSubscriber::class, 'handleJobExceptionOccurred']);

        $events->listen('Illuminate\Queue\Events\JobProcessed',
            [QueueEventSubscriber::class, 'handleJobProcessed']);

        $events->listen('Illuminate\Queue\Events\JobProcessing',
            [QueueEventSubscriber::class, 'handleJobProcessing']);

        $events->listen('Illuminate\Queue\Events\JobFailed',
            [QueueEventSubscriber::class, 'handleJobFailed']);

        $events->listen('Illuminate\Queue\Events\Looping',
            [QueueEventSubscriber::class, 'handleLooping']);

        $events->listen('Illuminate\Queue\Events\WorkerStopping',
            [QueueEventSubscriber::class, 'handleWorkerStopping']);
    }
}
