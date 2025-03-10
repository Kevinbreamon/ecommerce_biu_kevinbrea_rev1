<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ShareInertiaData extends Middleware
{
    public function handle($request, \Closure $next)
    {
        // Verifica si el usuario está siendo correctamente identificado
        dd(auth()->user()); // Muestra la información del usuario

        // Añadir el usuario al contexto global de Inertia
        Inertia::share([
            'user' => auth()->user(),
        ]);

        return $next($request);
    }
}
