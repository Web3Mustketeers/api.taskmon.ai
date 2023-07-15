import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Column } from '../column/column.model';
import { Subtask } from '../subtask/subtask.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    columnId!: number;

    @Field(() => Column, {nullable:false})
    column?: Column;

    @Field(() => [Subtask], {nullable:true})
    Subtask?: Array<Subtask>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
