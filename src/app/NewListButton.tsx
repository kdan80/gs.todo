/** @format */
'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
    addTodoList: addTodoList
}

const NewListButton = ({ addTodoList }: Props) => {
    const [name, setName] = React.useState('')

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name) return
        addTodoList(name)
        setName('')
    }

    return (
        <div className='border-2 border-gray-600 h-14 md:h-12 w-full rounded-full'>
            <form
                onSubmit={handleSubmit}
                className='w-full h-full flex items-center justify-start gap-4 md:gap-3'>
                <button
                    type='submit'
                    className={`h-14 md:h-12 bg-gray-600 w-14 md:w-12 flex justify-center items-center rounded-full`}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className='h-6 w-6'
                    />
                </button>
                <input
                    value={name}
                    onChange={handleInputChange}
                    className={`bg-transparent grow mr-6 md:mr-4 text-base`}
                    type='text'
                    placeholder='Create a New List...'
                />
            </form>
        </div>
    )
}

export default NewListButton
