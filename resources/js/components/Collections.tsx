/** @format */

import React from 'react'
import Icon from './Icon'

interface Props {
    todoLists: TodoList[]
    className: string
}

const Collections = ({ todoLists, className }: Props) => {
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
                            className={`flex flex-row items-center gap-4 md:gap-3 overflow-hidden whitespace-nowrap md:text-lg`}>
                            <Icon color={todoList.color} />
                            {todoList.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Collections
