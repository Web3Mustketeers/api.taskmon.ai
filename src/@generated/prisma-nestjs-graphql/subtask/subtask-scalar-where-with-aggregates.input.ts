import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class SubtaskScalarWhereWithAggregatesInput {

    @Field(() => [SubtaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubtaskScalarWhereWithAggregatesInput>;

    @Field(() => [SubtaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubtaskScalarWhereWithAggregatesInput>;

    @Field(() => [SubtaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubtaskScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isCompleted?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskId?: IntWithAggregatesFilter;
}
