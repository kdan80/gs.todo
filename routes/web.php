<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Models\TodoList;

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

    return Inertia::render('Dashboard', [ 
        "name" => "Kieran",
        "pagination" => TodoList::paginate(20)
    ]);
});

Route::post('/todo', function () {

    $todo = Request::validate([
        'description' => 'required',
        'completed' => 'required'
    ]);

    Todo::create($todo);

    return redirect('/Dashboard');

});

