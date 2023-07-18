<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Arr;

class TodoListController extends Controller
{

    public function store(Request $request) {

        $colors = [
            "red",
            "teal",
            "pink",
            "purple",
            "yellow",
            "blue",
            "green"
        ];

        $color = Arr::random($colors);

        $name = $request->get('name');

        if(!$name) {
            # TODO: Error Handling
        }

        $todoList = new TodoList;
        $todoList->name = $name;
        $todoList->color = $color;

        $success = $todoList->save();

        if(!$success) {
            # TODO: Error Handling
        }

        return redirect()->route('dashboard.get')->with("message", "success");
    }

    public function destroy($id) {

        $todoList = TodoList::find($id);

        if (!$todoList) {
            # TODO: Error Handling
        }

        $success = $todoList->delete();

        if (!$success) {
            # TODO: Error Handling
        }

        print_r("Deleted: " . $success . "\n");

        return redirect()->route('dashboard.get')->with("message", "success");

        # Alternative responses;
        # return Inertia::location(route('dashboard.get'));
        # return Redirect::back()->with('success', 'success');
    }
}
