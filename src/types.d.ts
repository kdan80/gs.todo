/** @format */

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

type setTodoLists = React.Dispatch<SetStateAction<TodoList[]>>

type openColorModal = (id: number) => void

type changeColor = (color: string) => void

type setCurrentTodoList = (id: number | null) => void

type toggleComplete = (todoId: number) => void

type addTodo = (description: string) => void

type addTodoList = (name: string) => void

type deleteTodo = (todoId: number) => void

type deleteTodoList = (id: number) => void
