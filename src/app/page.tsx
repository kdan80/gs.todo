/** @format */

import React from 'react'

async function fetchTodoLists() {
    const res = await fetch(process.env.URL + '/api/todolists', {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch TodoLists')
    }
    return res.json()
}

export default async function Page() {
    const todoLists = await fetchTodoLists()
    console.log('data', todoLists)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            Hello world
        </main>
    )
}
