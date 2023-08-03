import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listsToCreate = 50;
const todosToCreate = 10;

const todosArr = Array.from({ length: todosToCreate }).map((todo, index) => {
  return {
    description: `Test Todo ${index + 1}`,
    completed: 0,
  };
});

// create: file.tags?.map((name) => ({
//   tag: {
//     connect: {
//       id: tags.find((t) => t.name === name)?.id,
//     },
//   },
// }));

async function main() {
  for (let i = 0; i < listsToCreate; i++) {
    await prisma.todoList.create({
      data: {
        name: `Test Todo List ${i + 1}`,
        todos: {
          create: [
            {
              description: "Test Todo 1",
              completed: 0,
            },
            {
              description: "Test Todo 2",
              completed: 0,
            },
            {
              description: "Test Todo 3",
              completed: 0,
            },
          ],
        },
      },
      include: {
        todos: true,
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

//   async function main() {
//     for (let i = 0; i < listsToCreate; i++) {
//       await prisma.todoList.create({
//         data: {
//           name: `Test Todo List ${i + 1}`,
//           todos: {
//               create: {
//                   description: ``,
//                   completed: 0
//               }
//           }
//         },
//       });
//     }
//   }
