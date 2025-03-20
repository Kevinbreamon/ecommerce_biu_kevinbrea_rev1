<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SignUpController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AuthController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::middleware(['web'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome');
    });
});


Route::get('/', function () {
    // Obtener el usuario autenticado
    $user = Auth::user();

    // Pasar el usuario a la vista de Inertia
    return Inertia::render('Home', [
        'user' => $user,  // Pasa los datos del usuario autenticado al frontend
    ]);
})->name('home');

Route::get('/aboutUs', function () {
    // Obtener el usuario autenticado
    $user = Auth::user();

    // Pasar el usuario a la vista de Inertia
    return Inertia::render('AboutUsPage', [
        'user' => $user,  // Pasa los datos del usuario autenticado al frontend
    ]);
})->name('AboutUsPage');

Route::get('/brands', function () {
    // Obtener el usuario autenticado
    $user = Auth::user();

    // Pasar el usuario a la vista de Inertia
    return Inertia::render('BrandsPage', [
        'user' => $user,  // Pasa los datos del usuario autenticado al frontend
    ]);
})->name('BrandsPage');

Route::resource('/products', ProductController::class)
    ->only(['index', 'store', 'update', 'destroy']);

//Route::resource('/admin', AdminController::class)
//->only(['index', 'store','update']);

// Route::resource('/signup', SignUpController::class)
// ->only(['index','store']);

Route::get('/signup', [SignUpController::class, 'index'])->name('signup');
Route::post('/signup', [AuthController::class, 'register']);;

Route::post('/register', [AuthController::class, 'register']);;
//Route::resource('/login', LoginController::class)
//->only(['index','store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::get('/user', [AuthController::class, 'user']);

Route::middleware(['auth'])->group(function () {
    Route::get('/admin', function () {

        $user = Auth::user();
        // Validación para el correo específico
        if (Auth::user()->email !== 'kevinbreamon@gmail.com') {
            abort(403, 'Unauthorized');
        }

        // Obtener los productos utilizando query() (como en tu controlador)
        $products = Product::query()->get();

        // Pasar los productos a la vista ProductEdit
        return Inertia::render('ProductEdit', [
            'products' => $products,
            'user' => $user,  // Pasa los datos del usuario autenticado al frontend
        ]);
    })->name('admin');
});


return Inertia::render('Navbar', [
    'user' => auth()->user(), // Pasamos el usuario autenticado a la vista
]);

Route::get('/products/export', [ProductController::class, 'exportCSV'])->name('products.export');