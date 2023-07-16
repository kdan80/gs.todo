/** @format */

import React from 'react'
import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'

interface Props {
    todoLists: TodoList[]
    className: string
}

const Collections = ({ todoLists, className }: Props) => {
    const destroy = (id: number) => {
        Inertia.delete(`todolist/${id}`)
    }

    return (
        <div
            className={`${className} h-full px-6 text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
            <div className='basis-2/12 md:basis-1/12 md:py-10 md:text-xl flex flex-justify items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className='basis-10/12 md:basis-11/12'>
                <ul className='space-y-5 md:space-y-4'>
                    {todoLists.map(todoList => (
                        <li
                            key={todoList.id}
                            className={` flex flex-row items-center justify-between md:text-lg`}>
                            <div
                                className={`flex flex-row items-center cursor-pointer`}>
                                <Icon color={todoList.color} />
                                <span
                                    className={`px-4 overflow-hidden whitespace-nowrap text-ellipsis`}>
                                    {todoList.name}
                                </span>
                            </div>
                            <Link
                                href={`/todolist/${todoList.id}`}
                                method='delete'
                                as='button'
                                type='button'
                                className={`w-[32px] h-[32px] flex items-center justify-center text-red`}>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className='w-[18px] h-[18px]'
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Collections
