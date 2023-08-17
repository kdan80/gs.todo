/** @format */
'use client'

import React from 'react'
import TodoListMenuItem from './TodoListMenuItem'
import NewListButton from './NewListButton'
import ChangeColorModal from './ChangeColorModal'

interface Props {
    todoLists: TodoList[]
    setTodoLists: any
    className: string
}

const Collections = ({ todoLists, setTodoLists, className }: Props) => {
    // const [todoLists, setTodoLists] =
    //     React.useState<TodoList[]>(serverTodoLists)

    const [showModal, setShowModal] = React.useState<boolean>(false)
    const [colorChangeId, setColorChangeId] = React.useState<number>(0)

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

    const openColorModal = (id: number) => {
        setColorChangeId(id)
        setShowModal(true)
    }

    const closeColorModal = () => {
        setColorChangeId(0)
        setShowModal(false)
    }

    const changeColor = (color: string) => {
        if (!colorChangeId) return
        const index = todoLists.findIndex(
            todoList => todoList.id === colorChangeId
        )

        const newTodoLists = todoLists
        newTodoLists[index] = {
            ...newTodoLists[index],
            color: color,
        }

        setTodoLists([...newTodoLists])
    }

    return (
        <div
            className={`${className} h-full px-6 text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
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
                                openColorModal={openColorModal}
                                changeColor={changeColor}
                                color={todoList.color}
                                name={todoList.name}
                            />
                        ) : (
                            <TodoListMenuItem
                                key={todoList.id}
                                id={todoList.id}
                                deleteTodoList={deleteTodoList}
                                openColorModal={openColorModal}
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

            <ChangeColorModal
                showModal={showModal}
                changeColor={changeColor}
                closeColorModal={closeColorModal}
            />
        </div>
    )
}

export default Collections
