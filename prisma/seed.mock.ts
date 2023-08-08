/** @format */

import prisma from './client'

// const colors = ['red', 'teal', 'pink', 'purple', 'yellow', 'blue', 'green']

const todoLists = [
    {
        name: 'Shopping List',
        color: 'blue',
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
        todos: [
            {
                description: 'Take out the bins',
            },
        ],
    },
    {
        name: 'Daily',
        color: 'purple',
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

async function main() {
    todoLists.map(async todoList => {
        await prisma.todoList.create({
            data: {
                name: todoList.name,
                color: todoList.color,
                todos: {
                    create: todoList.todos.map(todo => {
                        return {
                            description: todo.description,
                            completed: 0,
                        }
                    }),
                },
            },
            include: {
                todos: true,
            },
        })
    })
}

main()
    .catch(err => {
        console.log(err)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
