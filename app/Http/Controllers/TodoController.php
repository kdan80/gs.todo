<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

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

        return response()->json([
            'id' => 1,
            'description' => $description,
            'completed' => $completed
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