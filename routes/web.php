<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

Route::get('/', function (Request $request) {

    $todoLists = TodoList::with('todos')->paginate(20);

    if ($request->wantsJson()) {
        return $todoLists;
    }

    return Inertia::render('Dashboard', [ 
        "pagination" => $todoLists
    ]);
})->name("dashboard.get");

Route::post('/todo', function () {

    $todo = Request::validate([
        'description' => 'required',
        'completed' => 'required'
    ]);

    Todo::create($todo);

    return redirect('/dashboard');

});

Route::post("/todolist", "App\Http\Controllers\TodoListController@store")->name("todolist.store");
Route::delete("/todolist/{id}", "App\Http\Controllers\TodoListController@destroy")->name("todolist.destroy");