<?php

use App\Http\Controllers\Api\AuthControllerApi;
use App\Http\Controllers\Api\UserControllerApi;
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

Route::apiResource('users', UserControllerApi::class);

Route::post('login', [AuthControllerApi::class, 'login']);

// Route::group([
//     'middleware' => ['auth:sanctum']
// ], function () {
//     Route::post('logout', [AuthControllerApi::class, 'logout']);
//     Route::apiResource('users', UserControllerApi::class);
// });
