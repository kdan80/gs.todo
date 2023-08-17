/** @format */

'use client'

import React from 'react'
import Collections from './Collections'
import ListView from './ListView'
import List from './List'
import '../app.css'

const lists = [
    {
        name: 'Shopping List',
        color: 'blue',
        id: 1,
        todos: [
            {
                description: 'milk',
            },
            {
                description: 'bread',
            },
            {
                description: 'tea bags',
            },
            {
                description: 'cheese',
            },
            {
                description: 'bananas',
            },
            {
                description: 'dog food',
            },
            {
                description: 'the good prosecco from Sainsburys',
            },
            {
                description: 'beans',
            },
        ],
    },
    {
        name: '10 best Beatles songs',
        color: 'green',
        id: 2,
        todos: [
            {
                description: 'Girl',
            },
            {
                description: 'Rocky Raccoon',
            },
            {
                description: 'Golden Slumbers/Carry That Weight/The End',
            },
            {
                description: "I'm Only Sleeping",
            },
            {
                description: "Dont't Let Me Down",
            },
            {
                description: 'Strawberry Fields Forever',
            },
            {
                description: 'Happiness Is A Warm Gun',
            },
            {
                description: "I'm Looking Through You",
            },
            {
                description: 'I Want To Hold Your Hand',
            },
            {
                description: 'Hello, Goodbye',
            },
        ],
    },
    {
        name: 'Web dev',
        color: 'red',
        id: 3,
        todos: [
            {
                description: 'pagination in prisma',
            },
            {
                description: 'intersection observer api',
            },
            {
                description: 'chrome css animation dev tool',
            },
            {
                description: 'how to center a div!!',
            },
            {
                description: 'immutable state',
            },
            {
                description: 'server side rendering',
            },
        ],
    },
    {
        name: 'Wednesday',
        color: 'teal',
        id: 4,
        todos: [
            {
                description: 'Five-a-side footy',
            },
            {
                description: 'Do shopping',
            },
            {
                description: 'Tidy bedroom',
            },
            {
                description: 'Get a web dev job...',
            },
            {
                description: 'Take out the bins',
            },
            {
                description: 'Then bring them in again',
            },
            {
                description: 'because they are actually picked up on Thursday',
            },
        ],
    },
    {
        name: 'Thursday',
        color: 'yellow',
        id: 5,
        todos: [
            {
                description: 'Take out the bins',
            },
        ],
    },
    {
        name: 'Daily',
        color: 'purple',
        id: 6,
        todos: [
            {
                description: 'Walk dogs',
            },
            {
                description: 'Web dev study 1 hour',
            },
            {
                description: 'Play guitar',
            },
            {
                description: 'Gym',
            },
            {
                description: 'Tidy room',
            },
            {
                description:
                    "Web dev study 1 hour because you didn' do it earlier!",
            },
        ],
    },
]

const Page = () => {
    const [todoLists, setTodoLists] = React.useState<TodoList[]>(lists)
    const [listInView, setListInView] = React.useState<TodoList | null>(null)

    return (
        <div className='h-full relative bg-darkBlue flex flex-row overflow-hidden overscroll-none'>
            <Collections
                todoLists={todoLists}
                setTodoLists={setTodoLists}
                className={'w-full md:w-80'}
            />
            <ListView
                className={
                    'w-full h-full absolute left-full md:static border-2 border-red text-white'
                }>
                {listInView ? (
                    <List listInView={listInView} />
                ) : (
                    <div>nothing</div>
                )}
            </ListView>
        </div>
    )
}

export default Page
