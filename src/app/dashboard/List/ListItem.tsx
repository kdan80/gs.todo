/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
    children?: React.ReactNode
    id: string
}

const ListItem = ({ children, id }: Props) => {
    return (
        <li className='bg-[#20212C] text-lg rounded-xl p-4 flex flex-row gap-3 items-center'>
            <input
                id={id}
                type='checkbox'
                className='appearance-none relative peer w-6 h-6 cursor-pointer shrink-0 border-[3px] border-pink rounded-[9px] bg-transparent checked:bg-pink'
            />
            <FontAwesomeIcon
                icon={faCheck}
                className='absolute w-5 h-5 ml-[2px] mt-[1px] hidden peer-checked:block text-darkBlue pointer-events-none'
            />
            <label
                htmlFor={id}
                className='cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis grow'>
                {children}
            </label>
        </li>
    )
}

export default ListItem
