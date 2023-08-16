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

    const addTodoList = (name: string) => {
        if (todoLists.length >= 10) return

        // Find the highest numbered id in the todoLists array
        const currentHighestId = todoLists.reduce(
            (prev, current) => {
                return prev.id > current.id ? prev : current
            },
            { id: 0 }
        ).id

        const newList = {
            name: name,
            id: currentHighestId + 1,
            color: 'blue',
            todos: [],
        }

        setTodoLists([...todoLists, newList])
    }

    const changeColor = (id: number) => {
        const index = todoLists.findIndex(todoList => todoList.id === id)
        if (!index) return

        console.log('change color', id)

        const newTodoLists = todoLists
        newTodoLists[index] = {
            ...newTodoLists[index],
            color: 'blue',
        }

        setTodoLists([...newTodoLists])
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
                                changeColor={changeColor}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        ) : (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                deleteTodoList={deleteTodoList}
                                changeColor={changeColor}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className='py-8 md:py-12 md:text-xl text-xl md:text-base text-gray-300 flex justify-center items-center'>
                <NewListButton addTodoList={addTodoList} />
            </div>
        </div>
    )
}

export default Collections
