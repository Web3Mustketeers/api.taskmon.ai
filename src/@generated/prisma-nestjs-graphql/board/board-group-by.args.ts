import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardWhereInput } from './board-where.input';
import { Type } from 'class-transformer';
import { BoardOrderByWithAggregationInput } from './board-order-by-with-aggregation.input';
import { BoardScalarFieldEnum } from './board-scalar-field.enum';
import { BoardScalarWhereWithAggregatesInput } from './board-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BoardCountAggregateInput } from './board-count-aggregate.input';
import { BoardAvgAggregateInput } from './board-avg-aggregate.input';
import { BoardSumAggregateInput } from './board-sum-aggregate.input';
import { BoardMinAggregateInput } from './board-min-aggregate.input';
import { BoardMaxAggregateInput } from './board-max-aggregate.input';

@ArgsType()
export class BoardGroupByArgs {

    @Field(() => BoardWhereInput, {nullable:true})
    @Type(() => BoardWhereInput)
    where?: BoardWhereInput;

    @Field(() => [BoardOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BoardOrderByWithAggregationInput>;

    @Field(() => [BoardScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BoardScalarFieldEnum>;

    @Field(() => BoardScalarWhereWithAggregatesInput, {nullable:true})
    having?: BoardScalarWhereWithAggregatesInput;

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
