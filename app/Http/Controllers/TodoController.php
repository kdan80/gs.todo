<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use App\Models\Todo;

class TodoController extends Controller 
{
    public function index() {

        return response()->json([
            'todos' => [
                'title' => 'todo one'
            ]
        ]);
    }

    public function show($id) {

        return response()->json([
            'todos' => [
                'title' => 'todo ' . $id
            ]
        ]);
    }

    public function store(Request $request) {

        $description = $request->get('description');

        if(!$description) {
            
            print_r("TodoController.php: No description provided");
            // TODO: error handling

            return;
        }

        $todo = new Todo;
        $todo->description = $description;
        $todo->completed = false;

        $success = $todo->save();

        if(!$success) {

            print_r("TodoController.php: Failed to save todo");
            // TODO: error handling

            return;
        }

        return response()->json([
            'message' => 'success',
            'todo' => $todo
        ]);
    }

    public function update($id) {

        return response()->json([
            'message' => "Updated todo $id"
        ]);
    }

    public function destroy($id) {

        return response()->json([
            'message' => "Deleted todo $id"
        ]);
    }
}