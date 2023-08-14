/** @format */
'use client'

import React from 'react'
import TodoListMenuItem from './TodoListMenuItem'
import NewListButton from './NewListButton'

interface Props {
    serverTodoLists: TodoList[]
    className: string
}

const Collections = ({ serverTodoLists, className }: Props) => {
    const [todoLists, setTodoLists] =
        React.useState<TodoList[]>(serverTodoLists)

    const deleteTodoList = (id: number) => {
        const updatedTodoLists = todoLists.filter(todoList => {
            return todoList.id !== id
        })

        setTodoLists(updatedTodoLists)
    }

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
                                deleteTodoList={deleteTodoList}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        ) : (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                deleteTodoList={deleteTodoList}
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
