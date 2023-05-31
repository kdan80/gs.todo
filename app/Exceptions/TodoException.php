<?php

namespace App\Exceptions;

use Exception;

class TodoException extends Exception
{
    
    public static function todosNotFound(): TodoException {

        return new self(message: "Todos not found.", code: 404);
    }

    public static function todoNotFound(): TodoException {

        return new self(message: "Todo not found.", code: 404);
    }

    public static function noDescription(): TodoException {

        return new self(message: "No description provided.", code: 400);
    }

    public static function failedToSave(): TodoException {

        return new self(message: "Could not save to database.", code: 500);
    }

    public static function failedToUpdate(): TodoException {

        return new self(message: "Could not update the database.", code: 500);
    }

    public static function failedToDelete(): TodoException {

        return new self(message: "Could not delete from database.", code: 500);
    }
}
