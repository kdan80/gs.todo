/** @format */

type Link = {
    url: string | null
    label: string
    active: boolean
}

type Todo = {
    description: string
    completed: boolean
    id: number
}

type TodoList = {
    id: number
    name: string
    color: string
    todos: Todo[]
}

type setCurrentTodoList = (id: number | null) => void

type toggleComplete = (listId: number, todoId: number) => void
