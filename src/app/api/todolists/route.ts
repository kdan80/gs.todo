/** @format */

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
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
