<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;

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

        // return response()->json([
        //     "message" => "success"
        // ], 200);

        return redirect()->route('dashboard.get')->with("message", "success");
    }
}
