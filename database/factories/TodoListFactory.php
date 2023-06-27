<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Model\TodoList;
use App\Model\Todo;

class TodoListFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->title(),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
