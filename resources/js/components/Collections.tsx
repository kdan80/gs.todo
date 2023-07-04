/** @format */

import React from 'react'

interface Props {
    todoLists: TodoList[]
}

const Collections = ({ todoLists }: Props) => {
    return (
        <div>
            <ul>
                {todoLists.map(todoList => (
                    <li key={todoList.id}>{todoList.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Collections