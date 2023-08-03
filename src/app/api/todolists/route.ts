/** @format */

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface TodoListReq {
    name: string
    color?: string
}

export const GET = async (req: NextRequest) => {
    try {
        const todoLists = await prisma.todoList.findMany({
            include: {
                todos: true,
            },
        })
        return NextResponse.json(todoLists, { status: 200 })
    } catch (err) {
        return NextResponse.json(err, { status: 500 })
    }
}

export const POST = async (req: NextRequest) => {
    try {
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
