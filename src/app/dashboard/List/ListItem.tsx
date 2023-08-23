/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
    children?: React.ReactNode
    completed: boolean
    onClick: any
}

const ListItem = ({ children, completed, onClick }: Props) => {
    return (
        <li className='bg-[#20212C] text-lg rounded-xl px-4 py-3 flex flex-row gap-3 items-center'>
            <button
                type='button'
                onClick={onClick}
                className={`${
                    completed ? 'bg-pink' : 'bg-transparent'
                } w-6 h-6 shrink-0 border-[3px] border-pink rounded-[9px] flex items-center justify-center`}>
                {completed ? (
                    <FontAwesomeIcon
                        icon={faCheck}
                        className='w-full h-full text-darkBlue'
                    />
                ) : null}
            </button>
            <span
                onClick={onClick}
                className={`${
                    completed ? 'text-gray-600 line-through' : 'text-white'
                } cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis grow`}>
                {children}
            </span>
        </li>
    )
}

export default ListItem

// /** @format */

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'

// interface Props {
//     children?: React.ReactNode
//     id: string
//     completed: boolean
//     onClick: any
// }

// const ListItem = ({ children, id, completed, onClick }: Props) => {
//     return (
//         <li className='bg-[#20212C] text-lg rounded-xl px-4 py-3 flex flex-row gap-3 items-center'>
//             <input
//                 id={id}
//                 type='checkbox'
//                 checked={completed}
//                 onChange={onClick}
//                 className='appearance-none relative peer w-6 h-6 cursor-pointer shrink-0 border-[3px] border-pink rounded-[9px] bg-transparent checked:bg-pink'
//             />
//             <FontAwesomeIcon
//                 icon={faCheck}
//                 className='absolute w-5 h-5 ml-[2px] mt-[1px] hidden peer-checked:block text-darkBlue pointer-events-none'
//             />
//             <label
//                 htmlFor={id}
//                 className={`${
//                     completed ? 'text-gray-600 line-through' : 'text-white'
//                 } cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis grow`}>
//                 {children}
//             </label>
//         </li>
//     )
// }

// export default ListItem
