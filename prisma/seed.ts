/** @format */

import prisma from './client'

const listsToCreate = 10
const todosToCreate = 10

const colors = ['red', 'teal', 'pink', 'purple', 'yellow', 'blue', 'green']

async function main() {
    for (let i = 0; i < listsToCreate; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]

        await prisma.todoList.create({
            data: {
                name: `Test Todo List ${i + 1}`,
                color: color,
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
