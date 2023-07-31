/** @format */

import React from 'react'
import Icon from './Icon'
import { router } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
    id: number
    color: string
    name: string
}

const TodoListMenuItem = React.forwardRef(({ id, color, name }: Props, ref) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        router.delete(`/todolist/${id}`)
    }

    return (
        <li
            key={id}
            className={`flex flex-row items-center justify-between md:text-lg`}
            ref={ref as React.RefObject<HTMLLIElement>}>
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
})

export default TodoListMenuItem
