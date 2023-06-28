<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Model\TodoList;
use App\Model\Todo;

class TodoListFactory extends Factory
{
    public function definition(): array
    {
        static $count = 0;
        $count++;

        return [
            'name' => "test todo list " . $count,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
