/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { router } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/react'

const NewListButton = () => {
    const [name, setName] = React.useState<string>('')

    const handleInputChange = (e: any) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        router.post('/todolist', { name: name })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='border-2 border-gray-600 h-14 md:h-12 w-full rounded-full flex items-center gap-4 md:gap-3'>
            <button
                type='submit'
                className={`h-full bg-gray-600 w-14 md:w-12 flex justify-center items-center rounded-full`}>
                <FontAwesomeIcon
                    icon={faPlus}
                    className=''
                />
            </button>
            <input
                value={name}
                onChange={handleInputChange}
                className={`bg-transparent`}
                type='text'
                placeholder='New List'
            />
        </form>
    )
}

export default NewListButton
