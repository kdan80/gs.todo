<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Todo;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        //Todo::factory(10)->create();
        
        $count = 100;
        for ($i = 0; $i < $count; $i++) {
            Todo::create([
                'description' => 'test todo ' . $i + 1,
                'completed' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
