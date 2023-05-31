<?php

namespace App\Exceptions;

use Exception;

class TodoException extends Exception
{
    
    public static function todoNotFound(): TodoException {

        return new self(message: "todo not found", code: 404);
    }
}
