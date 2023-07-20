/** @format */

import React from 'react'
import Icon from './Icon'
import NewListButton from './NewListButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'
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
            className={`${className} h-screen px-6 text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
            <div className='py-10 md:text-xl flex justify-between items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className='flex-grow overflow-auto no-scrollbar'>
                <ul className='space-y-5 md:space-y-4'>
                    {todoLists.map(todoList => (
                        <li
                            key={todoList.id}
                            className={`flex flex-row items-center justify-between md:text-lg`}>
                            <div
                                className={`flex flex-row items-center cursor-pointer grow overflow-hidden whitespace-nowrap text-ellipsis`}>
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
                                className={`min-w-[32px] h-[32px] flex items-center justify-center text-red`}>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className='w-[18px] h-[18px]'
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='py-8 md:py-12 md:text-xl text-xl md:text-base text-gray-300 flex justify-center items-center'>
                <NewListButton />
            </div>
        </div>
    )
}

export default Collections
