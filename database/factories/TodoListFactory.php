<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoListFactory extends Factory 
{
    
    public function definition(): array 
    {
        static $count = 0;
        $count++;

        return [
            'name' => "test todo list " . $count,
            'color' => "bg-pink",
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
