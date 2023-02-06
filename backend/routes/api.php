<?php

use App\Http\Controllers\Api\ArticuloController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\DiseñoController;
use App\Http\Controllers\Api\LogoController;
use App\Http\Controllers\Api\PedidoController;
use App\Http\Controllers\Api\TrabajoController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ["auth:sanctum"]], function () {
    //rutas
    Route::get('user-profile', [AuthController::class, 'userProfile']);
    Route::get('logout', [AuthController::class, 'logout']);
});

Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::post('/user', 'store');
    Route::get('/user/{id}', 'show');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ArticuloController::class)->group(function () {
    Route::get('/articulos', 'index');
    Route::post('/articulo', 'store');
    Route::get('/articulo/{id}', 'show');
    Route::put('/articulo/{id}', 'update');
    Route::delete('/articulo/{id}', 'destroy');

    Route::get("json", 'indexPdf');  //Reports
});

Route::controller(ClienteController::class)->group(function () {
    Route::get('/clientes', 'index');
    Route::post('/cliente', 'store');
    Route::get('/cliente/{id}', 'show');
    Route::put('/cliente/{id}', 'update');
    Route::delete('/cliente/{id}', 'destroy');
});

Route::controller(DiseñoController::class)->group(function () {
    Route::get('/diseños', 'index');
    Route::get('/diseños/user/{id}', 'showByUserId');
    Route::get('/diseños/count/{id}', 'countByUserId');
    Route::post('/diseño', 'store');
    Route::get('/diseño/{id}', 'show');
    Route::put('/diseño/{id}', 'update');
    Route::delete('/diseño/{id}', 'destroy');
});

Route::controller(LogoController::class)->group(function () {
    Route::get('/logos', 'index');
    Route::get('/logos/user/{id}', 'showByUserId');
    Route::post('/logo', 'store');
    Route::get('/logo/{id}', 'show');
    Route::put('/logo/{id}', 'update'); //FALTA POR HACER
    Route::delete('/logo/{id}', 'destroy');
});

Route::controller(PedidoController::class)->group(function () {
    Route::get('/pedidos', 'index');
    Route::post('/pedido', 'store');
    Route::get('/pedido/{id}', 'show');
    Route::put('/pedido/{id}', 'update');
    Route::delete('/pedido/{id}', 'destroy');
});

Route::controller(TrabajoController::class)->group(function () {
    Route::get('/trabajos', 'index');
    Route::post('/trabajo', 'store');
    Route::get('/trabajo/{id}', 'show');
    Route::put('/trabajo/{id}', 'update');
    Route::delete('/trabajo/{id}', 'destroy');
});;

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
