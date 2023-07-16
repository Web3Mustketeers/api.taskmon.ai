import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BoardService } from './board.service'
import { CreateBoardInput } from './dto/create-board.input'
import { UpdateBoardInput } from './dto/update-board.input'

@Resolver('Board')
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation('createBoard')
  create(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
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

  @Mutation('removeBoard')
  remove(@Args('id') id: number) {
    return this.boardService.remove(id)
  }
}
