/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
    listName: string
    setCurrentTodoList: setCurrentTodoList
}

const ToolBar = ({ listName, setCurrentTodoList }: Props) => {
    return (
        <div className='px-3 md:px-0 py-6 flex items-center gap-3 text-xl'>
            <button
                type='button'
                className='flex items-center justify-center md:bg-[#20212C] md:p-3 md:rounded-xl'
                onClick={() => setCurrentTodoList(null)}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className='h-[24px] w-[24px] md:h-[18px] md:w-[18px]'
                />
            </button>
            <span className='font-bold'>{listName}</span>
        </div>
    )
}

export default ToolBar
