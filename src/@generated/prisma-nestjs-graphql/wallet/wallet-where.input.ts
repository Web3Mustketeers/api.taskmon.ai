import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoardListRelationFilter } from '../board/board-list-relation-filter.input';

@InputType()
export class WalletWhereInput {

    @Field(() => [WalletWhereInput], {nullable:true})
    AND?: Array<WalletWhereInput>;

    @Field(() => [WalletWhereInput], {nullable:true})
    OR?: Array<WalletWhereInput>;

    @Field(() => [WalletWhereInput], {nullable:true})
    NOT?: Array<WalletWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => BoardListRelationFilter, {nullable:true})
    Board?: BoardListRelationFilter;
}
