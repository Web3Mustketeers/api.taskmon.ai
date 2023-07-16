import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TaskService } from './task.service'
import { CreateTaskInput } from './dto/create-task.input'

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation('createTask')
  create(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.taskService.create(createTaskInput)
  }

  @Query('tasks')
  findAll() {
    return this.taskService.findAll()
  }

  @Query('task')
  findOne(@Args('id') id: number) {
    return this.taskService.findOne({ id })
  }

  @Mutation('updateTask')
  update(@Args('updateTaskInput') updateTaskInput: object) {
    console.debug({ updateTaskInput })
    return this.taskService.update(updateTaskInput['id'], updateTaskInput)
  }

  @Mutation('removeTask')
  remove(@Args('id') id: number) {
    return this.taskService.remove(id)
  }
}
