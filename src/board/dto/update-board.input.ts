import { CreateBoardInput } from './create-board.input'
import { PartialType } from '@nestjs/mapped-types'

export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  id: number
}
