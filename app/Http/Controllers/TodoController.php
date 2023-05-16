<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\DB;
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

            print_r("TodoController.php: Failed to store todo");
            // TODO: error handling

            return;
        }

        return response()->json([
            'message' => 'success',
            'todo' => $todo
        ], 201);
    }

    public function update($id, Request $request) {

        $todo = Todo::find($id);

        if(!$todo) {

            print_r("TodoController.php: Todo not found");
            // Todo: error handling

            return;
        }

        // Update the description
        $description = $request->get('description');
        $todo->description = ($description) 
            ? $description 
            : $todo->description;

        // Update completed/status
        $completed = $request->boolean('completed');
        print_r("completed: " . $completed);
        $todo->completed = ($completed)
            ? $completed
            : $todo->completed;

        $success = $todo->save();
        
        if(!$success) {

            print_r("TodoController.php: Failed to update todo");
            // TODO: error handling

            return;
        }

        return response()->json([
            'message' => "success",
            'todo' => $todo
        ], 200);
    }

    public function destroy($id) {

        return response()->json([
            'message' => "Deleted todo $id"
        ]);
    }
}