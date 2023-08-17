/** @format */
'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import ColorButton from './ColorButton'

interface Props {
    id: number
    color: string
    name: string
    deleteTodoList: (id: number) => void
    openColorModal: (id: number) => void
    setCurrentTodoList: (id: number) => void
    changeColor: (color: string) => void
}

const TodoListMenuItem = ({
    id,
    color,
    name,
    deleteTodoList,
    setCurrentTodoList,
    openColorModal,
}: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        deleteTodoList(id)
    }

    return (
        <li
            key={id}
            className={`flex flex-row items-center justify-between md:text-lg gap-4`}>
            <ColorButton
                onClick={() => openColorModal(id)}
                color={color}></ColorButton>
            <span
                onClick={() => setCurrentTodoList(id)}
                className={`grow cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis`}>
                {name}
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
