import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Board } from '../board/board.model';
import { Task } from '../task/task.model';
import { ColumnCount } from './column-count.output';

@ObjectType()
export class Column {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => Board, {nullable:false})
    board?: Board;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => ColumnCount, {nullable:false})
    _count?: ColumnCount;
}
