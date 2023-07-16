import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { BoardService } from "./board.service";
import { CreateBoardInput } from "./dto/create-board.input";
import { UpdateBoardInput } from "./dto/update-board.input";

@Resolver('Board')
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query('b"boards"  findAll() {
    return this.boardService.findAll()
 ; }

  @Query('b"board"  findOne(@Args('i"id"id: number) {
    return this.boardService.findOne({ id })
 ; }

  @Mutation('c"createBoard"  create(@Args('c"createBoardInput"createBoardInput: CreateBoardInput) {
    return this.boardService.create(createBoardInput)
 ; }

  @Mutation('u"updateBoard"  update(@Args('u"updateBoardInput"updateBoardInput: UpdateBoardInput) {
    return this.boardService.update(updateBoardInput.id, updateBoardInput)
 ; }

  @Mutation('r"removeBoard"  remove(@Args('i"id"id: number) {
    return this.boardService.remove(id)
 ; }
}
