<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\DB;
use App\Models\Todo;
use App\Exceptions\TodoException;

class TodoController extends Controller 
{
    public function index() {

        $todos = Todo::paginate(4);
        if (!$todos) {
            throw TodoException::todosNotFound();
        }

        return response()->json($todos, 200);
    }

    public function show($id) {

        $todo = Todo::find($id);
        
        if (!$todo) {
            throw TodoException::todoNotFound();
        }

        return response()->json($todo, 200);
    }

    public function store(Request $request) {

        $description = $request->get('description');

        if(!$description) {
            throw TodoException::noDescription();
        }

        $todo = new Todo;
        $todo->description = $description;
        $todo->completed = false;

        $success = $todo->save();

        if(!$success) {
            throw TodoException::failedToSave();
        }

        return response()->json([
            'message' => 'success',
            'todo' => $todo
        ], 201);
    }

    public function update($id, Request $request) {

        $todo = Todo::find($id);

        if(!$todo) {
            throw TodoException::todoNotFound();
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
            throw TodoException::failedToUpdate();
        }

        return response()->json([
            'message' => "success",
            'todo' => $todo
        ], 200);
    }

    public function destroy($id) {

        $todo = Todo::find($id);

        if (!$todo) {
            throw TodoException::todoNotFound();
        }

        $success = $todo->delete();

        if (!$success) {
            throw TodoException::failedToDelete();
        }

        print_r("Deleted: " . $success . "\n");

        return response()->json([
            'message' => "success"
        ], 200);
    }
}