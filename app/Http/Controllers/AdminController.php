<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        $products = Product::query()
        ->get();

        return Inertia::render('ProductEdit', [
            'products' => $products,
        ]);
    }

    public function store()
    {

    }

    public function update()
    {

    }
}
