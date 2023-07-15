import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class WalletScalarWhereWithAggregatesInput {

    @Field(() => [WalletScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WalletScalarWhereWithAggregatesInput>;

    @Field(() => [WalletScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WalletScalarWhereWithAggregatesInput>;

    @Field(() => [WalletScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WalletScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;
}
