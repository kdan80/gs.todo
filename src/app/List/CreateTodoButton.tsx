/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
    addTodo: addTodo
}

const CreateTodoButton = ({ addTodo }: Props) => {
    const [description, setDescription] = React.useState('')
    const ref = React.useRef<HTMLInputElement | null>(null)

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!description) return
        addTodo(description)
        setDescription('')
    }
    return (
        <form
            onSubmit={handleSubmit}
            className={`relative h-14 bg-gradient-to-r from-[#C748D2] to-[#FE9289] rounded-full flex items-center overflow-hidden`}>
            <div className='absolute left-[2px] right-[2px] top-[2px] bottom-[2px] rounded-full bg-darkBlue' />
            <button
                type='submit'
                className={`z-20 w-14 h-14 bg-gradient-to-r from-[#C748D2] to-[#FE9289] rounded-full flex items-center justify-center`}>
                <FontAwesomeIcon
                    icon={faPlus}
                    className='h-6 w-6'
                />
            </button>
            <input
                ref={ref}
                value={description}
                onChange={handleInputChange}
                className={`bg-transparent h-[54px] p-3 grow z-20`}
                type='text'
                placeholder='Create a Todo...'
            />
        </form>
    )
}

export default CreateTodoButton
