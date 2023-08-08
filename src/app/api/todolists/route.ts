/** @format */

import { NextRequest, NextResponse } from 'next/server'

import prisma from '../../../../prisma/client'

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
