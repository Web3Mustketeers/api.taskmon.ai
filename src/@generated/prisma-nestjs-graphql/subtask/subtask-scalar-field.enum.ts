import { registerEnumType } from '@nestjs/graphql';

export enum SubtaskScalarFieldEnum {
    id = "id",
    title = "title",
    isCompleted = "isCompleted",
    taskId = "taskId"
}


registerEnumType(SubtaskScalarFieldEnum, { name: 'SubtaskScalarFieldEnum', description: undefined })
