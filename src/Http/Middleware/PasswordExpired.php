<?php

namespace Fusion\Http\Middleware;

use Closure;

class PasswordExpired
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure                  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        $acceptedRoutes = [
            route('logout'),
            route('password.expiredForm')
        ];

        if ($request->user() && $request->user()->passwordHasExpired()) {
            if (! in_array(url()->current(), $acceptedRoutes)) {
                return redirect()->route('password.expiredForm');
            }
        }

        return $next($request);
    }
}
