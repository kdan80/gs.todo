/** @format */

import React from 'react'
import ToolBar from './ToolBar'
import ListItem from './ListItem'

interface Props {
    currentList: TodoList
    setCurrentTodoList: setCurrentTodoList
    toggleComplete: toggleComplete
    deleteTodo: deleteTodo
}

const List = ({
    currentList,
    setCurrentTodoList,
    toggleComplete,
    deleteTodo,
}: Props) => {
    return (
        <div className='flex flex-col h-full min-w-[300px] w-full md:max-w-[800px] md:max-h-[85%] overflow-hidden'>
            <ToolBar
                setCurrentTodoList={setCurrentTodoList}
                listName={currentList.name}
            />
            <div className='h-full px-3 flex flex-col md:items-center overflow-auto no-scrollbar'>
                {currentList.todos.length ? (
                    <ul className='flex flex-col gap-3 md:min-w-[600px] md:w-full mb-6'>
                        {currentList.todos.map((todo, index) => (
                            <ListItem
                                key={index}
                                todo={todo}
                                completed={todo.completed}
                                deleteTodo={deleteTodo}
                                onClick={() => toggleComplete(todo.id)}>
                                {todo.description}
                            </ListItem>
                        ))}
                    </ul>
                ) : (
                    <div>Add a todo...</div>
                )}
            </div>
        </div>
    )
}

export default List
