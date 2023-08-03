/** @format */

import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
    todoLists: TodoList[]
    setTodoLists: Dispatch<SetStateAction<TodoList[]>>
}

const NewListButton = ({ todoLists, setTodoLists }: Props) => {
    const [name, setName] = React.useState<string>('')

    const handleInputChange = (e: any) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const data = { name }
        router.post('/todolist', data, {
            onSuccess: page => {
                const message = page.props.message
                console.log('mess: ', message)
            },
        })
        //setTodoLists([...todoLists])
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
                        className=''
                    />
                </button>
                <input
                    value={name}
                    onChange={handleInputChange}
                    className={`bg-transparent grow mr-6 md:mr-4`}
                    type='text'
                    placeholder='Create a New List'
                />
            </form>
        </div>
    )
}

export default NewListButton
