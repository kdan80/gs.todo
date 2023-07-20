/** @format */

import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@inertiajs/react'

interface Props {
    id: number
    color: string
    name: string
    className?: string
}

const TodoListMenuItem = ({ id, color, name, className }: Props) => {
    return (
        <li
            key={id}
            className={`flex flex-row items-center justify-between md:text-lg ${className}`}>
            <div
                className={`flex flex-row items-center cursor-pointer grow overflow-hidden whitespace-nowrap text-ellipsis`}>
                <Icon color={color} />
                <span
                    className={`px-4 overflow-hidden whitespace-nowrap text-ellipsis`}>
                    {name}
                </span>
            </div>
            <Link
                href={`/todolist/${id}`}
                method='delete'
                as='button'
                type='button'
                className={`min-w-[32px] h-[32px] flex items-center justify-center text-red`}>
                <FontAwesomeIcon
                    icon={faTrashCan}
                    className='w-[18px] h-[18px]'
                />
            </Link>
        </li>
    )
}

export default TodoListMenuItem
