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
        <div className='flex flex-col h-full min-w-[300px] w-full  md:max-w-[800px] md:max-h-[85%]'>
            <ToolBar
                setCurrentTodoList={setCurrentTodoList}
                listName={currentList.name}
            />
            <div className='h-full px-3 flex flex-col md:items-center md:justify-center'>
                {currentList.todos.length ? (
                    <ul className='flex flex-col gap-3 md:min-w-[600px] md:w-full'>
                        {currentList.todos.map((todo, index) => (
                            <ListItem
                                key={index}
                                id={index.toString()}>
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
