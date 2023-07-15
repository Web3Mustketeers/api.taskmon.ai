import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubtaskInput } from './task-create-without-subtask.input';

@InputType()
export class TaskCreateOrConnectWithoutSubtaskInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutSubtaskInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubtaskInput)
    create!: TaskCreateWithoutSubtaskInput;
}
