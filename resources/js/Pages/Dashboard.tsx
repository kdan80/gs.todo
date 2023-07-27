/** @format */

import React from 'react'
import { router } from '@inertiajs/react'
import Collections from '@/components/Collections'
import List from '@/components/List'

interface Props {
    pagination: Pagination
}

const Dashboard = ({ pagination }: Props) => {
    const [todoLists, setTodoLists] = React.useState(pagination.data)
    const [nextPage, setNextPage] = React.useState(pagination.next_page_url)
    console.log('data: ', pagination.data)

    return (
        <div className='h-full relative bg-darkBlue flex flex-row overflow-hidden overscroll-none'>
            <Collections
                todoLists={todoLists}
                setTodoLists={setTodoLists}
                nextPage={nextPage}
                className={'w-full md:w-80'}
            />
            <List
                className={
                    'w-full h-full absolute left-full border-2 border-red text-white'
                }
            />
        </div>
    )
}

export default Dashboard
