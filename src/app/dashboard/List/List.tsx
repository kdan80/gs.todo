/** @format */

import React from 'react'
import ToolBar from './ToolBar'

interface Props {
    currentList: TodoList
    setCurrentTodoList: setCurrentTodoList
}

const List = ({ currentList, setCurrentTodoList }: Props) => {
    return (
        <div>
            <ToolBar setCurrentTodoList={setCurrentTodoList} />
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
