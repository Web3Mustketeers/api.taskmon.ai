import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { OrderByParams } from '../graphql'

@Injectable()
export class ColumnService {
  constructor(private prisma: PrismaService) {}
  create(createColumnInput: Prisma.ColumnCreateInput) {
    return this.prisma.column.create({
      data: createColumnInput,
    })
  }

  findAll(orderBy?: OrderByParams) {
    const { field, direction } = orderBy || {}
    return this.prisma.column.findMany({
      orderBy: {
        [field]: direction,
      },
    })
  }

  findOne(uniqueKey: Prisma.ColumnWhereUniqueInput) {
    return this.prisma.column.findUnique({
      where: uniqueKey,
    })
  }

  update(id: number, updateColumnInput: Prisma.ColumnUpdateInput) {
    return this.prisma.column.update({
      where: {
        id,
      },
      data: updateColumnInput,
    })
  }

  remove(id: number) {
    return this.prisma.column.delete({
      where: {
        id,
      },
    })
  }
}