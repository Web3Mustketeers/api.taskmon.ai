import { PrismaClient } from '@prisma/client'
import { date } from 'joi'
const prisma = new PrismaClient()

async function main() {
  await prisma.wallet.deleteMany()
  const wallet = await prisma.wallet.create({
    data: {
      address: 'of1ExCK6cWFxCxtUGw2civp4RKejVSQ5EzntJPntDTP',
    },
  })
  const todo_board = await prisma.board.create({
    data: {
      walletId: wallet.id,
      isActive: true,
      name: 'Taskmon.ai',
    },
  })

  const todo_cln = await prisma.column.create({
    data: {
      name: 'TODO',
      boardId: todo_board.id,
    },
  })

  const todo_task = await prisma.task.create({
    data: {
      title: 'Scaffold: graphql',
      columnId: todo_cln.id,
    },
  })
  console.log({ wallet, board: todo_board, todo_cln, todo_task })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
