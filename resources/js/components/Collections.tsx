/** @format */

import React from 'react'
import Icon from './Icon'

interface Props {
    todoLists: TodoList[]
}

const Collections = ({ todoLists }: Props) => {
    return (
        <div className='h-full px-[5vw] text-white text-2xl bg-[#20212C] flex flex-col flex-justify'>
            <div className=' basis-2/12 flex flex-justify items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className=' basis-10/12'>
                <ul className='space-y-4'>
                    {todoLists.map(todoList => (
                        <li
                            key={todoList.id}
                            className='flex flex-row items-center gap-3'>
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
