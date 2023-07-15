import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ColumnCountOrderByAggregateInput } from './column-count-order-by-aggregate.input';
import { ColumnAvgOrderByAggregateInput } from './column-avg-order-by-aggregate.input';
import { ColumnMaxOrderByAggregateInput } from './column-max-order-by-aggregate.input';
import { ColumnMinOrderByAggregateInput } from './column-min-order-by-aggregate.input';
import { ColumnSumOrderByAggregateInput } from './column-sum-order-by-aggregate.input';

@InputType()
export class ColumnOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => ColumnCountOrderByAggregateInput, {nullable:true})
    _count?: ColumnCountOrderByAggregateInput;

    @Field(() => ColumnAvgOrderByAggregateInput, {nullable:true})
    _avg?: ColumnAvgOrderByAggregateInput;

    @Field(() => ColumnMaxOrderByAggregateInput, {nullable:true})
    _max?: ColumnMaxOrderByAggregateInput;

    @Field(() => ColumnMinOrderByAggregateInput, {nullable:true})
    _min?: ColumnMinOrderByAggregateInput;

    @Field(() => ColumnSumOrderByAggregateInput, {nullable:true})
    _sum?: ColumnSumOrderByAggregateInput;
}
