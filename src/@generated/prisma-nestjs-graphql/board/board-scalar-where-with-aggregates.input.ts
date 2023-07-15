import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class BoardScalarWhereWithAggregatesInput {

    @Field(() => [BoardScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BoardScalarWhereWithAggregatesInput>;

    @Field(() => [BoardScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BoardScalarWhereWithAggregatesInput>;

    @Field(() => [BoardScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BoardScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    walletId?: IntWithAggregatesFilter;
}
