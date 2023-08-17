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
