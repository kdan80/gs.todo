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
        <div className='flex flex-col h-full min-w-[300px] w-full md:max-w-[600px] md:max-h-[85%] overflow-hidden'>
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
                                deleteTodo={deleteTodo}
                                toggleComplete={toggleComplete}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className=' w-full h-full flex justify-center items-center'>
                        <div className=' text-gray-400'>Add a todo...</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default List
