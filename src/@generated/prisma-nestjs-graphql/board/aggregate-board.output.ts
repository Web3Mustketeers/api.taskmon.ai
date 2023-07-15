import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoardCountAggregate } from './board-count-aggregate.output';
import { BoardAvgAggregate } from './board-avg-aggregate.output';
import { BoardSumAggregate } from './board-sum-aggregate.output';
import { BoardMinAggregate } from './board-min-aggregate.output';
import { BoardMaxAggregate } from './board-max-aggregate.output';

@ObjectType()
export class AggregateBoard {

    @Field(() => BoardCountAggregate, {nullable:true})
    _count?: BoardCountAggregate;

    @Field(() => BoardAvgAggregate, {nullable:true})
    _avg?: BoardAvgAggregate;

    @Field(() => BoardSumAggregate, {nullable:true})
    _sum?: BoardSumAggregate;

    @Field(() => BoardMinAggregate, {nullable:true})
    _min?: BoardMinAggregate;

    @Field(() => BoardMaxAggregate, {nullable:true})
    _max?: BoardMaxAggregate;
}
