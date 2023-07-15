import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ColumnOrderByWithRelationInput } from '../column/column-order-by-with-relation.input';
import { SubtaskOrderByRelationAggregateInput } from '../subtask/subtask-order-by-relation-aggregate.input';

@InputType()
export class TaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    columnId?: keyof typeof SortOrder;

    @Field(() => ColumnOrderByWithRelationInput, {nullable:true})
    column?: ColumnOrderByWithRelationInput;

    @Field(() => SubtaskOrderByRelationAggregateInput, {nullable:true})
    Subtask?: SubtaskOrderByRelationAggregateInput;
}
