/** @format */

import React from 'react'
import Collections from './Collections'
import '../app.css'

const fetchTodoLists = async () => {
    const res = await fetch(process.env.URL + '/api/todolists', {
        cache: 'no-store',
    })

    if (!res.ok) {
        console.log('Failed to fetch TodoLists')
        //throw new Error('Failed to fetch TodoLists')
    }
    return res.json()
}

const Page = async () => {
    const todoLists = await fetchTodoLists()
    console.log('tl: ', todoLists)
    return (
        <div className='h-full relative bg-darkBlue flex flex-row overflow-hidden overscroll-none'>
            <Collections
                todoLists={todoLists}
                //setTodoLists={setTodoLists}
                className={'w-full md:w-80'}
            />
            {/* <List
                className={
                    'w-full h-full absolute left-full border-2 border-red text-white'
                }
            /> */}
        </div>
    )
}

export default Page
