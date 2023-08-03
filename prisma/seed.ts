/** @format */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const listsToCreate = 50
const todosToCreate = 10

async function main() {
    for (let i = 0; i < listsToCreate; i++) {
        await prisma.todoList.create({
            data: {
                name: `Test Todo List ${i + 1}`,
                todos: {
                    create: Array.from({ length: todosToCreate }).map(
                        (todo, index) => {
                            return {
                                description: `Test Todo ${index + 1}`,
                                completed: 0,
                            }
                        }
                    ),
                },
            },
            include: {
                todos: true,
            },
        })
    }
}

main()
    .catch(err => {
        console.log(err)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
