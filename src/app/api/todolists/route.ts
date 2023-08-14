/** @format */

import { NextRequest, NextResponse } from 'next/server'

import prisma from '../../../../prisma/client'

interface TodoListReq {
    name: string
    color?: string
}

const todoLists = [
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

export const GET = async (req: NextRequest) => {
    try {
        return NextResponse.json(todoLists, { status: 200 })
    } catch (err) {
        return NextResponse.json(err, { status: 500 })
    }
}

// export const GET = async (req: NextRequest) => {
//     try {
//         const todoLists = await prisma.todoList.findMany({
//             include: {
//                 todos: true,
//             },
//         })
//         return NextResponse.json(todoLists, { status: 200 })
//     } catch (err) {
//         return NextResponse.json(err, { status: 500 })
//     }
// }

export const POST = async (req: NextRequest) => {
    try {
        const todoLists = await prisma.todoList.findMany()

        if (todoLists.length >= 10) {
            return NextResponse.json(
                { message: 'Only 10 todo lists are permitted in this demo.' },
                { status: 403 }
            )
        }

        const candidateTodoList = await req.json()

        if (!candidateTodoList.color) {
            candidateTodoList.color = 'blue'
        }

        const todoList = await prisma.todoList.create({
            data: candidateTodoList,
        })

        return NextResponse.json(todoList, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json(err, { status: 501 })
    }
}

export const DELETE = async (req: NextRequest) => {
    try {
        const { id } = await req.json()

        const todoList = await prisma.todoList.delete({
            where: {
                id: id,
            },
        })

        return NextResponse.json(todoList, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json(err, { status: 501 })
    }
}
