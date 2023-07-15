import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardWhereInput } from './board-where.input';
import { Type } from 'class-transformer';
import { BoardOrderByWithRelationInput } from './board-order-by-with-relation.input';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoardCountAggregateInput } from './board-count-aggregate.input';
import { BoardAvgAggregateInput } from './board-avg-aggregate.input';
import { BoardSumAggregateInput } from './board-sum-aggregate.input';
import { BoardMinAggregateInput } from './board-min-aggregate.input';
import { BoardMaxAggregateInput } from './board-max-aggregate.input';

@ArgsType()
export class BoardAggregateArgs {

    @Field(() => BoardWhereInput, {nullable:true})
    @Type(() => BoardWhereInput)
    where?: BoardWhereInput;

    @Field(() => [BoardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BoardOrderByWithRelationInput>;

    @Field(() => BoardWhereUniqueInput, {nullable:true})
    cursor?: BoardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoardCountAggregateInput, {nullable:true})
    _count?: BoardCountAggregateInput;

    @Field(() => BoardAvgAggregateInput, {nullable:true})
    _avg?: BoardAvgAggregateInput;

    @Field(() => BoardSumAggregateInput, {nullable:true})
    _sum?: BoardSumAggregateInput;

    @Field(() => BoardMinAggregateInput, {nullable:true})
    _min?: BoardMinAggregateInput;

    @Field(() => BoardMaxAggregateInput, {nullable:true})
    _max?: BoardMaxAggregateInput;
}
