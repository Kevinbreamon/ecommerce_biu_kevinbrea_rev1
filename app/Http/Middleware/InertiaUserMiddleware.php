<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InertiaUserMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        dd(auth()->user());
        // Pasar el usuario autenticado a todas las respuestas de Inertia
        Inertia::share('user', fn () => auth()->user());

        return $next($request);
    }
}
