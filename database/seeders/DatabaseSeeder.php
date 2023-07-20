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

        $lists = 25;
        $todos = 25;

        TodoList::factory()
            ->count($lists)
            ->has(Todo::factory()->count($todos))
            ->create();        
    }
}