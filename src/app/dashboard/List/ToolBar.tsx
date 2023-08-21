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
        <div className='px-3 py-6 flex items-centers gap-3 text-xl'>
            <button
                type='button'
                onClick={() => setCurrentTodoList(null)}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className='h-[24px] w-[24px]'
                />
            </button>
            <span className='font-bold'>{listName}</span>
        </div>
    )
}

export default ToolBar
