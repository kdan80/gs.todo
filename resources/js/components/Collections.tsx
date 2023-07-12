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
            className={`${className} h-full px-[5vw] text-white text-2xl bg-[#20212C] flex flex-col flex-justify`}>
            <div className=' basis-2/12 flex flex-justify items-center md:text-3xl'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className=' basis-10/12'>
                <ul className='space-y-5 md:space-y-6'>
                    {todoLists.map(todoList => (
                        <li
                            key={todoList.id}
                            className={`flex flex-row items-center gap-4`}>
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
