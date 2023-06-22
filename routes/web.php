<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Models\Todo;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {

    return Inertia::render('Welcome', [ 
        "name" => "Kieran",
    ]);
});

Route::get('/Dashboard', function () {

    $todos = Todo::all();

    return Inertia::render('Dashboard', [ 
        "name" => "Kieran",
        "todos" => $todos
    ]);
});

