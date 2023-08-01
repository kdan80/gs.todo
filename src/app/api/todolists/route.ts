import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Data {
  name: string;
}

export async function GET(req: NextRequest, res: NextResponse) {
  // try {
  //   //const todo_lists = await prisma.todoList.findMany();
  //   return res.status(200).json({
  //     id: 1,
  //     name: "test",
  //   });
  // } catch (err) {
  //   return res.status(500).json(err);
  // }
  const todo_lists = await prisma.todoList.findMany();
  return NextResponse.json(todo_lists);
}
