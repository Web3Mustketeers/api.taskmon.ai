import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { OrderByParams } from '../graphql'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(createTaskInput: Prisma.TaskCreateInput) {
    return this.prisma.task.create({
      data: createTaskInput,
    })
  }

  findAll(orderBy?: OrderByParams) {
    const { field, direction } = orderBy || {}
    return this.prisma.task.findMany({
      orderBy: {
        [field]: direction,
      },
    })
  }

  findOne(uniqueKey: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.findUnique({
      where: uniqueKey,
    })
  }

  update(id: number, updateTaskInput: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskInput,
    })
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    })
  }
}
