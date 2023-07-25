import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { BoardService } from './board.service'
import { Board, CreateBoardInput, OrderByParams } from '../graphql'
import { Prisma } from '@prisma/client'
import { ColumnService } from '../column/column.service'
import { GqlAuthGuard } from '../auth/guard'
import { UseGuards } from '@nestjs/common'

@Resolver('Board')
@UseGuards(GqlAuthGuard)
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService,
    private readonly columnService: ColumnService,
  ) {}

  @Query('boards')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.boardService.findAll(orderBy)
  }

  @Query('board')
  findOne(@Args('id') id: number) {
    return this.boardService.findOne({ id })
  }

  @Mutation('createBoard')
  create(@Args('data') createBoardInput: CreateBoardInput) {
    console.debug({ createBoardInput })
    //FIXME:
    return this.boardService.create({ ...createBoardInput, walletId: 1 })
  }
  @Mutation('updateBoard')
  update(
    @Args('id') id: number,
    @Args('data') updateBoardInput: Prisma.BoardUpdateInput,
  ) {
    return this.boardService.update(id, updateBoardInput)
  }

  @Mutation('deleteBoard')
  remove(@Args('id') id: number) {
    return this.boardService.remove(id)
  }

  @ResolveField('columns')
  columns(@Parent() board: Board) {
    return this.columnService.findAll(null, { boardId: board.id })
  }
}
