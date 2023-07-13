/** @format */

import React from 'react'
import { router } from '@inertiajs/react'
import Collections from '@/components/Collections'
import List from '@/components/List'

interface Props {
    pagination: Pagination
}

const Dashboard = ({ pagination }: Props) => {
    console.log(pagination)

    return (
        <div className='h-full w-full relative bg-darkBlue flex flex-row overflow-hidden overscroll-none'>
            <Collections
                todoLists={pagination.data}
                className={'w-full md:w-auto'}
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
