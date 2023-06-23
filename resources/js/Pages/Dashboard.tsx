/** @format */

import React from 'react'
import { router } from '@inertiajs/react'

const Dashboard = (props: any) => {
    const [description, setDescription] = React.useState<string>('')

    const handleChange = (e: any) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        router.post('/todo', {
            'description': description,
            'completed': 0,
        })
    }

    return (
        <div className='text-3xl'>
            <ul>
                {props.todos.data.map((todo: any, index: any) => (
                    <li key={index}>{todo.description}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    className='border-2 border-blue-500 mt-4'
                    type='text'
                    onChange={handleChange}
                    value={description}
                    name='description'
                    placeholder='Create a todo'
                    required
                />
                <button
                    className='ml-4 bg-blue-500 py-2 px-4 text-white rounded'
                    type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Dashboard
