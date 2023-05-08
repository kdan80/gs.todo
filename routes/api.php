<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/todos', [TodoController::class, 'index']);

Route::get('/todos/{id}', [TodoController::class, 'show'])->where('id', '[0-9]+');

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

//     return $request->user();
// });
