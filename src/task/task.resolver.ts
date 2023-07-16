import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TaskService } from './task.service'
import { CreateTaskInput } from './dto/create-task.input'
import { Task } from '../graphql'
import { Subtask } from '../@generated/prisma-nestjs-graphql/subtask/subtask.model'
import { SubtaskService } from '../subtask/subtask.service'

@Resolver('Task')
export class TaskResolver {
  constructor(
    private readonly taskService: TaskService,
    private readonly subtaskService: SubtaskService,
  ) {}

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

  @ResolveField('subtasks')
  subtasks(@Parent() task: Task): Promise<Subtask[]> {
    return this.subtaskService.findAll(null, { taskId: task.id })
  }
}
