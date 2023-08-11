/** @format */
'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

interface Props {
    id: number
    color: string
    name: string
    todoLists: TodoList[]
    //setTodoLists: Dispatch<SetStateAction<TodoList[]>>
}

const TodoListMenuItem = ({ id, color, name, todoLists }: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()

        const updatedTodoLists = todoLists.filter(todoList => {
            return todoList.id !== id
        })
        //setTodoLists(updatedTodoLists)
    }

    return (
        <li
            key={id}
            className={`flex flex-row items-center justify-between md:text-lg`}>
            <div
                className={`flex flex-row items-center cursor-pointer grow overflow-hidden whitespace-nowrap text-ellipsis`}>
                <Icon color={color} />
                <span
                    className={`px-4 overflow-hidden whitespace-nowrap text-ellipsis`}>
                    {name}
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <button
                    type='submit'
                    className={`min-w-[32px] h-[32px] flex items-center justify-center text-red`}>
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className='w-[18px] h-[18px]'
                    />
                </button>
            </form>
        </li>
    )
}

export default TodoListMenuItem
