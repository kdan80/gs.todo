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
        $completed = false;

        $todo = new Todo;

        $todo->description = $description;
        $todo->completed = $completed;

        $success = $todo->save();

        if(!$success) {
            return response()->json([
                'message' => 'failed'
            ]);
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