<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validación de los datos recibidos
        $validated = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',
            'name' => 'required|string|max:255',
        ]);

        // Crear el usuario en la base de datos
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        // Retornar respuesta de creación exitosa
        return response()->json($user, 201); // Código 201 para creación exitosa
    }

    public function login(Request $request)
    {
        // Validar las credenciales
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Intentar autenticar al usuario
        if (Auth::attempt($credentials)) {
            // Regenerar la sesión para proteger contra ataques de fijación de sesión
            $request->session()->regenerate();

            // Retornar el usuario autenticado
            return response()->json(Auth::user());
        }

        // Si las credenciales no son válidas, retornar un mensaje de error
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request)
    {
        // Cerrar sesión
        Auth::logout();

        // Invalidar la sesión y regenerar el token para mayor seguridad
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Respuesta confirmando que el usuario ha sido desconectado
        return back();
    }

    public function user(Request $request)
    {
        // Retornar los datos del usuario autenticado
        return response()->json(Auth::user());
    }
}
