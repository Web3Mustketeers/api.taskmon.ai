import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BoardService } from './board.service'
import { UpdateBoardInput } from './dto/update-board.input'
import { OrderByParams } from '../graphql'
import { Prisma } from '@prisma/client'

@Resolver('Board')
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation('createBoard')
  create(@Args('createBoardInput') createBoardInput: Prisma.BoardCreateInput) {
    return this.boardService.create(createBoardInput)
  }

  @Query('boards')
  findAll(@Args('orderBy') orderBy: OrderByParams) {
    return this.boardService.findAll()
  }

  @Query('board')
  findOne(@Args('id') id: number) {
    return this.boardService.findOne({ id })
  }

  @Mutation('updateBoard')
  update(@Args('updateBoardInput') updateBoardInput: UpdateBoardInput) {
    return this.boardService.update(updateBoardInput.id, updateBoardInput)
  }

  @Mutation('deleteBoard')
  remove(@Args('id') id: number) {
    return this.boardService.remove(id)
  }
}
