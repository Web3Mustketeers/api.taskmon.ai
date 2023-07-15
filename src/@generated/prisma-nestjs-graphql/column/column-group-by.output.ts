import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ColumnCountAggregate } from './column-count-aggregate.output';
import { ColumnAvgAggregate } from './column-avg-aggregate.output';
import { ColumnSumAggregate } from './column-sum-aggregate.output';
import { ColumnMinAggregate } from './column-min-aggregate.output';
import { ColumnMaxAggregate } from './column-max-aggregate.output';

@ObjectType()
export class ColumnGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => ColumnCountAggregate, {nullable:true})
    _count?: ColumnCountAggregate;

    @Field(() => ColumnAvgAggregate, {nullable:true})
    _avg?: ColumnAvgAggregate;

    @Field(() => ColumnSumAggregate, {nullable:true})
    _sum?: ColumnSumAggregate;

    @Field(() => ColumnMinAggregate, {nullable:true})
    _min?: ColumnMinAggregate;

    @Field(() => ColumnMaxAggregate, {nullable:true})
    _max?: ColumnMaxAggregate;
}
