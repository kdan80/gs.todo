/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
    setCurrentTodoList: setCurrentTodoList
}

const ToolBar = ({ setCurrentTodoList }: Props) => {
    return (
        <div className='border-b border-grey'>
            <button
                type='button'
                onClick={() => setCurrentTodoList(null)}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className='h-[24px] w-[24px]'
                />
            </button>
            <span></span>
        </div>
    )
}

export default ToolBar
