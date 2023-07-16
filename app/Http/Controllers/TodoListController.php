<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class TodoListController extends Controller
{
    public function destroy($id) {

        $todoList = TodoList::find($id);

        if (!$todoList) {
            #throw TodoException::todoNotFound();
        }

        $success = $todoList->delete();

        if (!$success) {
            #throw TodoException::failedToDelete();
        }

        print_r("Deleted: " . $success . "\n");

        return redirect()->route('dashboard.get')->with("message", "success");

        # Alternative responses;
        # return Inertia::location(route('dashboard.get'));
        # return Redirect::back()->with('success', 'success');
    }
}
