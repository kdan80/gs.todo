<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    
    public function definition(): array
    {
        static $count = 0;
        $count++;

        return [
            'description' => "test todo " . $count,
            'completed' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
