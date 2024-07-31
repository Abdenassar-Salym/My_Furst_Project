<?php

use App\Http\Controllers\API\ApiController;
use App\Http\Controllers\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::post('rejester',[ApiController::class,'rejester']);
Route::get('produit',[ProduitController::class,'index']);
Route::post('produit',[ProduitController::class,'store']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
