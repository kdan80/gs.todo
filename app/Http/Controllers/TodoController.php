<?php

namespace App\Http\Controllers;

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

    public function store() {
        return response("created todo");
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