import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Task } from '../task/task.model';

@ObjectType()
export class Subtask {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isCompleted!: boolean;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Task, {nullable:false})
    task?: Task;
}
