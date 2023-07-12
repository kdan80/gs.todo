<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class TodoListFactory extends Factory 
{
    
    public function definition(): array 
    {
        static $count = 0;
        $count++;
        
        $colors = [
            "red",
            "teal",
            "pink",
            "purple",
            "yellow",
            "blue",
            "green"
        ];

        $color = Arr::random($colors);

        return [
            'name' => "test todo list " . $count,
            'color' => $color,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
