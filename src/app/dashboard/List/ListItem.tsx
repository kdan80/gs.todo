/** @format */

import React from 'react'

interface Props {
    children?: React.ReactNode
}

const ListItem = ({ children }: Props) => {
    return (
        <li className='bg-[#20212C] text-lg rounded-xl p-4 flex flex-row'>
            <button></button>
            <span className='cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis'>
                {children}
            </span>
        </li>
    )
}

export default ListItem
