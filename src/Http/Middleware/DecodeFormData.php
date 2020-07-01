<?php

namespace Fusion\Http\Middleware;

use Closure;

class DecodeFormData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($request->has('_json')) {
            $request->merge(json_decode($request->input('_json'), true));
        }

        return $next($request);
    }
}