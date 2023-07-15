import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TaskCountOrderByAggregateInput } from './task-count-order-by-aggregate.input';
import { TaskAvgOrderByAggregateInput } from './task-avg-order-by-aggregate.input';
import { TaskMaxOrderByAggregateInput } from './task-max-order-by-aggregate.input';
import { TaskMinOrderByAggregateInput } from './task-min-order-by-aggregate.input';
import { TaskSumOrderByAggregateInput } from './task-sum-order-by-aggregate.input';

@InputType()
export class TaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    columnId?: keyof typeof SortOrder;

    @Field(() => TaskCountOrderByAggregateInput, {nullable:true})
    _count?: TaskCountOrderByAggregateInput;

    @Field(() => TaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: TaskAvgOrderByAggregateInput;

    @Field(() => TaskMaxOrderByAggregateInput, {nullable:true})
    _max?: TaskMaxOrderByAggregateInput;

    @Field(() => TaskMinOrderByAggregateInput, {nullable:true})
    _min?: TaskMinOrderByAggregateInput;

    @Field(() => TaskSumOrderByAggregateInput, {nullable:true})
    _sum?: TaskSumOrderByAggregateInput;
}
