/** @format */

import React from 'react'

interface Props {
    currentList: TodoList
}

const List = ({ currentList }: Props) => {
    return (
        <div>
            {currentList.todos.length ? (
                <ul>
                    {currentList.todos.map((todo, index) => (
                        <li key={index}>{todo.description}</li>
                    ))}
                </ul>
            ) : (
                <div>Add a todo...</div>
            )}
        </div>
    )
}

export default List
