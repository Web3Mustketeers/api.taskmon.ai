import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { SubtaskService } from './subtask.service'
import { CreateSubTaskInput } from './dto/create-subtask.input'

@Resolver('Subtask')
export class SubtaskResolver {
  constructor(private readonly subtaskService: SubtaskService) {}

  @Mutation('createSubtask')
  create(@Args('createSubtaskInput') createSubtaskInput: CreateSubTaskInput) {
    return this.subtaskService.create(createSubtaskInput)
  }

  @Query('subtasks')
  findAll() {
    return this.subtaskService.findAll()
  }

  @Query('subtask')
  findOne(@Args('id') id: number) {
    return this.subtaskService.findOne({ id })
  }

  @Mutation('updateSubtask')
  update(@Args('updateSubtaskInput') updateSubtaskInput: object) {
    return this.subtaskService.update(updateSubtaskInput['id'], updateSubtaskInput)
  }

  @Mutation('removeSubtask')
  remove(@Args('id') id: number) {
    return this.subtaskService.remove(id)
  }
}
