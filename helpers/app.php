<?php

function app_installed()
{
    try {
        return (DB::table('settings')->count() > 0);
    } catch (Exception $exception) { }

    return false;
}

/**
 * Returns the memory usage in a human readable format.
 *
 * @return string
 */
function app_memory_usage()
{
    $size = memory_get_usage(true);

    $unit = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'];

    return round($size / pow(1024, ($i = floor(log($size, 1024)))), 1) . $unit[$i];
}

/**
 * Returns the app loading time in human readable format.
 *
 * @return string
 */
function app_loading_time()
{
    $time = (microtime(true)) - (constant('LARAVEL_START'));

    return number_format($time, 2) . 's';
}

/**
 * Returns if the current process is running in the console or not.
 *
 * @return bool
 */
function running_in_console()
{
    return app()->runningInConsole();
}

function fusion()
{
    return app()->make(Fusion\Http\Dispatcher::class);
}

function glide()
{
    $request    = app('request');
    $filesystem = app('filesystem')->getDriver();

    return League\Glide\ServerFactory::create([
        'response'          => new League\Glide\Responses\LaravelResponseFactory($request),
        'source'            => $filesystem,
        'cache'             => $filesystem,
        'cache_path_prefix' => '.cache',
    ]);
}

function get_calling_class() {
    //get the trace
    $trace = debug_backtrace();

    // Get the class that is asking for who awoke it
    $class = $trace[1]['class'];

    // +1 to i cos we have to account for calling this function
    for ( $i=1; $i<count( $trace ); $i++ ) {
        if ( isset( $trace[$i] ) ) // is it set?
             if ( $class != $trace[$i]['class'] ) // is it a different class
                 return $trace[$i]['class'];
    }
}