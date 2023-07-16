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

        $lists = 5;
        $todos = 10;

        TodoList::factory()
            ->count(25)
            ->has(Todo::factory()->count(10))
            ->create();        
    }
}