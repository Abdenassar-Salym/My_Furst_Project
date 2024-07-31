<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data=Produit::all();
    
        return response()->json($data,200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // Produit::create($request->all());
        // return response()->json([
        //     "produit"=>$request->all()
        // ]);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'prix' => 'required|numeric',
            'description' => 'nullable|string',
            'etoil' => 'required|numeric|max:5',
        ]);

        try {
            $produit = Produit::create($validatedData);
            return response()->json(['message' => 'Product created successfully', 'produit' => $produit], 201);
        } catch (\Exception $e) {
            \Log::error('Failed to create product: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to create product'], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Produit $produit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produit $produit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produit $produit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produit $produit)
    {
        //
    }
}
