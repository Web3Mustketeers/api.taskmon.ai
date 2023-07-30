import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { BoardService } from './board.service'
import { Board, CreateBoardInput, OrderByParams } from '../graphql'
import { Prisma } from '@prisma/client'
import { ColumnService } from '../column/column.service'
import { ForbiddenException, UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guard'
import { GetUser } from '../auth/decorator'

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
  create(
    @Args('data') createBoardInput: CreateBoardInput | any, //FIXME: figure out why CreateBoardInput returns {} but any returns properly
    @GetUser('walletId') walletId: number,
  ) {
    console.debug({ walletId })
    if (!walletId) {
      throw new ForbiddenException('walletID not found')
    }

    console.debug({ createBoardInput })

    return this.boardService.create({
      ...createBoardInput,
      walletId: createBoardInput.walletId ?? walletId,
    })
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
