<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SignUpController extends Controller
{
    // Muestra la página de registro
    public function index(): Response
    {
        return Inertia::render('SignUpPage');
    }

    // Registra un nuevo usuario
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:8',
        ]);

        // Crear el nuevo usuario
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), // Encriptar la contraseña
        ]);

        Auth::login($user); // Iniciar sesión después de la creación

        return redirect()->route('home'); // Redirigir al home después de registrarse
    }
}
