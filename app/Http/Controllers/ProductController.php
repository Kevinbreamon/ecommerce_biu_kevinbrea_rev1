<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();
        $products = Product::query()
        ->get();

        return Inertia::render('ShopPage', [
            'products' => $products,
            'user' => $user,

        ]);
    }

    public function store(StoreProductRequest $request): RedirectResponse
    {
        $product = Product::create($request->all());
        return back();
    }
    public function update(StoreProductRequest $request, Product $product): RedirectResponse
    {
        // el $product es una variable que llega automatico de la ruta, no se puede llamar de cualquier forma, debe de ser del singular de tu ruta
        // si tu ruta se llama products debe llamarse product, si se llama promotions debe llamarse promotion, y asi sucesivamente
        // puedes ver el parametro de la ruta de update haciendo php artisan route:list y te dice como es que llega
        $product->update($request->all());

        return back();
    }

    public function destroy(Product $product): RedirectResponse
    {
        $product->delete();
        return back();
    }

    public function exportCSV()
    {
        $fileName = 'productos.csv';
        $products = Product::all();

        $headers = [
            "Content-Type"        => "text/csv",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma"              => "no-cache",
            "Expires"             => "0"
        ];

        $columns = ['ID', 'Nombre', 'Estado', 'Stock', 'Precio'];

        $callback = function() use ($products, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns); // Encabezados

            foreach ($products as $product) {
                fputcsv($file, [
                    $product->id,
                    $product->name,
                    $product->status,
                    $product->stock,
                    $product->price
                ]);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    public function exportJSON()
{
    // Obtener todos los productos
    $products = Product::all();

    // Definir el nombre del archivo
    $fileName = 'productos.json';

    // Configurar encabezados para la descarga del archivo
    $headers = [
        "Content-Type"        => "application/json",
        "Content-Disposition" => "attachment; filename=$fileName",
        "Pragma"              => "no-cache",
        "Expires"             => "0"
    ];

    // Convertir los productos a formato JSON
    $jsonData = $products->toJson(JSON_PRETTY_PRINT);

    // Devolver el archivo como una descarga
    return response()->stream(function() use ($jsonData) {
        echo $jsonData;
    }, 200, $headers);
}
}
