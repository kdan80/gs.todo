/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
    children?: React.ReactNode
    todo: Todo
    completed: boolean
    onClick: any
    deleteTodo: deleteTodo
}

const ListItem = ({
    children,
    todo,
    completed,
    onClick,
    deleteTodo,
}: Props) => {
    return (
        <li className='bg-[#20212C] text-lg rounded-xl px-4 py-3 flex flex-row gap-3 items-center'>
            <button
                type='button'
                onClick={onClick}
                className={`${
                    completed ? 'bg-pink' : 'bg-transparent'
                } w-6 h-6 shrink-0 border-[3px] border-pink rounded-[9px] flex items-center justify-center`}>
                {completed ? (
                    <FontAwesomeIcon
                        icon={faCheck}
                        className='w-full h-full text-darkBlue'
                    />
                ) : null}
            </button>
            <span
                onClick={onClick}
                className={`${
                    completed ? 'text-gray-600 line-through' : 'text-white'
                } cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis grow`}>
                {children}
            </span>
            <button
                type='button'
                onClick={() => deleteTodo(todo.id)}
                className='flex items center'>
                <FontAwesomeIcon
                    icon={faXmark}
                    className='w-4 h-4 text-red'
                />
            </button>
        </li>
    )
}

export default ListItem
