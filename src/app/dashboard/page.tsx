/** @format */

'use client'

import React from 'react'
import Collections from './Collections'
import ListView from './List/ListView'
import List from './List/List'
import CreateTodoButton from './List/CreateTodoButton'
import '../app.css'

const lists = [
    {
        name: 'Shopping List',
        color: 'blue',
        id: 1,
        todos: [
            {
                id: 1,
                description: 'milk',
                completed: true,
            },
            {
                id: 2,
                description: 'bread',
                completed: true,
            },
            {
                id: 3,
                description: 'tea bags',
                completed: false,
            },
            {
                id: 4,
                description: 'cheese',
                completed: true,
            },
            {
                id: 5,
                description: 'bananas',
                completed: false,
            },
            {
                id: 6,
                description: 'dog food',
                completed: true,
            },
            {
                id: 7,
                description: 'the good prosecco from Sainsburys',
                completed: false,
            },
            {
                id: 8,
                description: 'beans',
                completed: false,
            },
        ],
    },
    {
        name: '10 best Beatles songs',
        color: 'green',
        id: 2,
        todos: [
            {
                id: 1,
                description: 'Girl',
                completed: false,
            },
            {
                id: 2,
                description: 'Rocky Raccoon',
                completed: false,
            },
            {
                id: 3,
                description: 'Golden Slumbers/Carry That Weight/The End',
                completed: false,
            },
            {
                id: 4,
                description: "I'm Only Sleeping",
                completed: false,
            },
            {
                id: 5,
                description: "Dont't Let Me Down",
                completed: false,
            },
            {
                id: 6,
                description: 'Strawberry Fields Forever',
                completed: false,
            },
            {
                id: 7,
                description: 'Happiness Is A Warm Gun',
                completed: false,
            },
            {
                id: 8,
                description: "I'm Looking Through You",
                completed: false,
            },
            {
                id: 9,
                description: 'I Want To Hold Your Hand',
                completed: false,
            },
            {
                id: 10,
                description: 'Hello, Goodbye',
                completed: false,
            },
        ],
    },
    {
        name: 'Web dev',
        color: 'red',
        id: 3,
        todos: [
            {
                id: 1,
                description: 'pagination in prisma',
                completed: true,
            },
            {
                id: 2,
                description: 'intersection observer api',
                completed: true,
            },
            {
                id: 3,
                description: 'chrome css animation dev tool',
                completed: false,
            },
            {
                id: 4,
                description: 'how to center a div!!',
                completed: false,
            },
            {
                id: 5,
                description: 'immutable state',
                completed: true,
            },
            {
                id: 6,
                description: 'server side rendering',
                completed: true,
            },
        ],
    },
    {
        name: 'Wednesday',
        color: 'teal',
        id: 4,
        todos: [
            {
                id: 1,
                description: 'Five-a-side footy',
                completed: true,
            },
            {
                id: 2,
                description: 'Do shopping',
                completed: true,
            },
            {
                id: 3,
                description: 'Tidy bedroom',
                completed: true,
            },
            {
                id: 4,
                description: 'Get a web dev job...',
                completed: false,
            },
            {
                id: 5,
                description: 'Take out the bins',
                completed: false,
            },
            {
                id: 6,
                description: 'Then bring them in again',
                completed: false,
            },
            {
                id: 7,
                description: 'because they are actually picked up on Thursday',
                completed: false,
            },
        ],
    },
    {
        name: 'Thursday',
        color: 'yellow',
        id: 5,
        todos: [
            {
                id: 1,
                description: 'Take out the bins',
                completed: true,
            },
        ],
    },
    {
        name: 'Daily',
        color: 'purple',
        id: 6,
        todos: [
            {
                id: 1,
                description: 'Walk dogs',
                completed: true,
            },
            {
                id: 2,
                description: 'Web dev study 1 hour',
                completed: true,
            },
            {
                id: 3,
                description: 'Play guitar',
                completed: true,
            },
            {
                id: 4,
                description: 'Gym',
                completed: true,
            },
            {
                id: 5,
                description: 'Tidy room',
                completed: true,
            },
            {
                id: 6,
                description:
                    "Web dev study 1 hour because you didn't do it earlier!",
                completed: false,
            },
        ],
    },
]

const Page = () => {
    const [todoLists, setTodoLists] = React.useState<TodoList[]>(lists)
    const [currentList, setCurrentList] = React.useState<TodoList | null>(null)

    const setCurrentTodoList = (id: number | null) => {
        const todoList = todoLists.find(todoList => todoList.id === id)

        if (!todoList) return setCurrentList(null)
        setCurrentList(todoList)
    }

    const toggleComplete = (listId: number, todoId: number) => {
        const index = todoLists.findIndex(todoList => todoList.id === listId)

        const newTodoLists = todoLists
        newTodoLists[index].todos[todoId - 1].completed =
            !newTodoLists[index].todos[todoId - 1].completed

        setTodoLists([...newTodoLists])
    }

    const addTodo = (description: string) => {
        if (!currentList) return
        if (currentList.todos.length >= 10) return
        const index = todoLists.findIndex(
            todoList => todoList.id === currentList.id
        )

        // Find the highest numbered id in the todos array
        const currentHighestId = todoLists[index].todos.reduce(
            (prev, current) => {
                return prev.id > current.id ? prev : current
            },
            { id: 0 }
        ).id

        const todo = {
            id: currentHighestId + 1,
            description: description,
            completed: false,
        }

        const newTodoLists = todoLists
        newTodoLists[index].todos.push(todo)

        setTodoLists([...newTodoLists])
    }

    return (
        <div className='h-full relative bg-darkBlue flex flex-row overflow-hidden overscroll-none'>
            <Collections
                todoLists={todoLists}
                setTodoLists={setTodoLists}
                setCurrentTodoList={setCurrentTodoList}
                className={'w-full md:w-80'}
            />
            <ListView
                className={`w-full h-full absolute md:px-4 ${
                    currentList ? 'left-0' : 'left-full'
                } md:static flex flex-col items-center justify-center justify-center bg-darkBlue text-white`}>
                {currentList ? (
                    <List
                        currentList={currentList}
                        setCurrentTodoList={setCurrentTodoList}
                        toggleComplete={toggleComplete}
                    />
                ) : (
                    <div>nothing</div>
                )}
                <div className='py-7 px-4 min-w-[300px] w-full md:max-w-[800px]'>
                    <CreateTodoButton addTodo={addTodo} />
                </div>
            </ListView>
        </div>
    )
}

export default Page
