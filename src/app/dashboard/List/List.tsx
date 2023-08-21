/** @format */

import React from 'react'
import ToolBar from './ToolBar'
import ListItem from './ListItem'

interface Props {
    currentList: TodoList
    setCurrentTodoList: setCurrentTodoList
}

const List = ({ currentList, setCurrentTodoList }: Props) => {
    return (
        <div className='flex flex-col h-full w-full'>
            <ToolBar
                setCurrentTodoList={setCurrentTodoList}
                listName={currentList.name}
            />
            <div className='h-full grow px-3 flex flex-col md:items-center md:justify-center'>
                {currentList.todos.length ? (
                    <ul className='flex flex-col gap-2'>
                        {currentList.todos.map((todo, index) => (
                            <ListItem key={index}>{todo.description}</ListItem>
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
