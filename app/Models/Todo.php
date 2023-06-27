<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    public $timestamps = true;
    //protected $fillable = ['description', 'completed', 'todolist_id'];
    protected $fillable = ['description', 'completed'];

    public function todolist() {
        return $this->belongsTo(TodoList::class);
    }
}
