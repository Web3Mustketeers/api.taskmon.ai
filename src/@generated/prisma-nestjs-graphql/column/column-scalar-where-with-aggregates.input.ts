import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ColumnScalarWhereWithAggregatesInput {

    @Field(() => [ColumnScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ColumnScalarWhereWithAggregatesInput>;

    @Field(() => [ColumnScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ColumnScalarWhereWithAggregatesInput>;

    @Field(() => [ColumnScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ColumnScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    boardId?: IntWithAggregatesFilter;
}
