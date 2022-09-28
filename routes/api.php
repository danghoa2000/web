<?php

use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [LoginController::class, 'login']);
    Route::get('logout', [LoginController::class, 'logout']);

    Route::group([
        'middleware' => 'auth:api', 'prefix' => 'admin'
    ], function () {
        Route::get('home', [HomeController::class, 'index']);
        Route::get('categories', [HomeController::class, 'index']);
    });
});
