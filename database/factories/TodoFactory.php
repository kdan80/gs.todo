<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    
    public function definition(): array
    {
        return [
            'description' => fake()->sentence(),
            'completed' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
