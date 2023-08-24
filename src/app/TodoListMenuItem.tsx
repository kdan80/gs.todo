/** @format */
'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'

interface Props {
    todoList: TodoList
    deleteTodoList: deleteTodoList
    openColorModal: openColorModal
    setCurrentTodoList: setCurrentTodoList
    changeColor: changeColor
}

const TodoListMenuItem = ({
    todoList,
    deleteTodoList,
    setCurrentTodoList,
    openColorModal,
}: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        deleteTodoList(todoList.id)
    }

    return (
        <li
            key={todoList.id}
            className={`flex flex-row items-center justify-between text-lg gap-4`}>
            <button
                onClick={() => openColorModal(todoList.id)}
                className={`flex flex-row shrink-0 items-center overflow-hidden whitespace-nowrap text-ellipsis`}>
                <Icon color={todoList.color} />
            </button>
            <span
                onClick={() => setCurrentTodoList(todoList.id)}
                className={`grow cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis`}>
                {todoList.name}
            </span>
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
