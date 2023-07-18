/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'

const NewListButton = () => {
    return (
        <Link
            href=''
            method='post'
            as='button'
            type='button'
            className='border-2 border-gray-600 h-14 md:h-12 w-full rounded-full flex items-center gap-4 md:gap-3'>
            <div
                className={`h-full bg-gray-600 w-14 md:w-12 flex justify-center items-center rounded-full`}>
                <FontAwesomeIcon
                    icon={faPlus}
                    className=''
                />
            </div>
            <input
                className={`bg-transparent`}
                type='text'
                placeholder='New List'
            />
        </Link>
    )
}

export default NewListButton
