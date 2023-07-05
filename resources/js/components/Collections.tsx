/** @format */

import React from 'react'

interface Props {
    todoLists: TodoList[]
}

const Collections = ({ todoLists }: Props) => {
    return (
        <div className='h-full px-[5vw] text-white text-2xl bg-[#20212C] flex flex-col flex-justify'>
            <div className='border-2 basis-1/12 flex flex-justify items-center'>
                <div className='font-bold'>Collections</div>
            </div>
            <div className='border-2 basis-11/12'>
                <ul className=''>
                    {todoLists.map(todoList => (
                        <li key={todoList.id}>{todoList.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Collections
