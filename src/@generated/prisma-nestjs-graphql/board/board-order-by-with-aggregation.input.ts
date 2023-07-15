import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoardCountOrderByAggregateInput } from './board-count-order-by-aggregate.input';
import { BoardAvgOrderByAggregateInput } from './board-avg-order-by-aggregate.input';
import { BoardMaxOrderByAggregateInput } from './board-max-order-by-aggregate.input';
import { BoardMinOrderByAggregateInput } from './board-min-order-by-aggregate.input';
import { BoardSumOrderByAggregateInput } from './board-sum-order-by-aggregate.input';

@InputType()
export class BoardOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletId?: keyof typeof SortOrder;

    @Field(() => BoardCountOrderByAggregateInput, {nullable:true})
    _count?: BoardCountOrderByAggregateInput;

    @Field(() => BoardAvgOrderByAggregateInput, {nullable:true})
    _avg?: BoardAvgOrderByAggregateInput;

    @Field(() => BoardMaxOrderByAggregateInput, {nullable:true})
    _max?: BoardMaxOrderByAggregateInput;

    @Field(() => BoardMinOrderByAggregateInput, {nullable:true})
    _min?: BoardMinOrderByAggregateInput;

    @Field(() => BoardSumOrderByAggregateInput, {nullable:true})
    _sum?: BoardSumOrderByAggregateInput;
}
