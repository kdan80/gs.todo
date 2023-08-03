/** @format */

import React from 'react'

const fetchTodoLists = async () => {
    const res = await fetch(process.env.URL + '/api/todolists', {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch TodoLists')
    }
    return res.json()
}

const Page = async () => {
    const todoLists = await fetchTodoLists()
    return (
        <div>
            Dashboard
            <ul>
                {todoLists.map((todoList: any, index: number) => (
                    <li key={todoList.id}>{todoList.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Page
