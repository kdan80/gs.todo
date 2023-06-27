<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Todo;
use App\Models\TodoList;

class DatabaseSeeder extends Seeder
{
    
    public function run(): void
    {

        TodoList::factory()
            ->count(5)
            ->has(Todo::factory()->count(10))
            ->create();
        
        // $num_of_lists = 2;
        // $num_of_todos = 10;

        // for ($i = 0; $i < $num_of_lists; $i++) {

        //     $todoList = TodoList::create([
        //         'name' => 'Todo List ' . $i + 1,
        //         'created_at' => now(),
        //         'updated_at' => now()
        //     ]);

        //     $todos = array();

        //     for ($j = 0; $i < $num_of_todos; $i++) {
        //         $todo = Todo::create([
        //             'description' => 'test todo ' . $i + 1,
        //             'completed' => 0,
        //             'created_at' => now(),
        //             'updated_at' => now()
        //         ]);

        //         array_push($todos, $todo);
        //     }

        //     $todoList->todos()->saveMany($todos);
        // }
        
    }
}