import { Injectable } from "@nestjs/common";
import { UpdateBoardInput } from "./dto/update-board.input";
import { PrismaService } from "../prisma/prisma.service";

import { Prisma } from "@prisma/client";

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  create(createBoardInput: Prisma.BoardCreateInput) {
    return this.prisma.board.create({
      data: createBoardInput,
    })
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {}
    return this.prisma.board.findMany({
      orderBy: {
        [field]: direction,
      },
    })
  }

  findOne(uniqueKey: Prisma.BoardWhereUniqueInput) {
    return this.prisma.board.findUnique({
      where: uniqueKey,
    })
  }

  update(id: number, updateBoardInput: UpdateBoardInput) {
    return this.prisma.board.update({
      where: {
        id,
      },
      data: updateBoardInput,
    })
  }

  remove(id: number) {
    return this.prisma.board.delete({
      where: {
        id,
     },
    }
  }
}
