import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listsToCreate = 50;
const todosToCreate = 10;

async function main() {
  for (let i = 0; i < listsToCreate; i++) {
    await prisma.todoList.create({
      data: {
        name: `Test Todo List ${i + 1}`,
      },
    });
  }
}

main()
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
