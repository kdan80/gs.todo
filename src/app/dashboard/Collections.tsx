/** @format */

import React from 'react'
import TodoListMenuItem from './TodoListMenuItem'
import NewListButton from './NewListButton'

interface Props {
    todoLists: TodoList[]
    //setTodoLists: React.Dispatch<React.SetStateAction<TodoList[]>>
    className: string
}

const Collections = ({ todoLists, className }: Props) => {
    return (
        <div
            className={`${className} h-screen px-6 text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
            <div className='py-10 md:text-xl flex justify-between items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className='flex-grow overflow-auto no-scrollbar'>
                <ul className='space-y-5 md:space-y-4'>
                    {todoLists.map((todoList, index, arr) => {
                        return arr.length - 1 === index ? (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                todoLists={todoLists}
                                //setTodoLists={setTodoLists}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        ) : (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                todoLists={todoLists}
                                //setTodoLists={setTodoLists}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className='py-8 md:py-12 md:text-xl text-xl md:text-base text-gray-300 flex justify-center items-center'>
                <NewListButton />
            </div>
        </div>
    )
}

export default Collections
