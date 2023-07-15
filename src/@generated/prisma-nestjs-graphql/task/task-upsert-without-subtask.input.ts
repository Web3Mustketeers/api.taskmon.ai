import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutSubtaskInput } from './task-update-without-subtask.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubtaskInput } from './task-create-without-subtask.input';

@InputType()
export class TaskUpsertWithoutSubtaskInput {

    @Field(() => TaskUpdateWithoutSubtaskInput, {nullable:false})
    @Type(() => TaskUpdateWithoutSubtaskInput)
    update!: TaskUpdateWithoutSubtaskInput;

    @Field(() => TaskCreateWithoutSubtaskInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubtaskInput)
    create!: TaskCreateWithoutSubtaskInput;
}
