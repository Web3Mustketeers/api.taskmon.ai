import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { ColumnListRelationFilter } from '../column/column-list-relation-filter.input';

@InputType()
export class BoardWhereInput {

    @Field(() => [BoardWhereInput], {nullable:true})
    AND?: Array<BoardWhereInput>;

    @Field(() => [BoardWhereInput], {nullable:true})
    OR?: Array<BoardWhereInput>;

    @Field(() => [BoardWhereInput], {nullable:true})
    NOT?: Array<BoardWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    walletId?: IntFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => ColumnListRelationFilter, {nullable:true})
    columns?: ColumnListRelationFilter;
}
