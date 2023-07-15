import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class BoardScalarWhereInput {

    @Field(() => [BoardScalarWhereInput], {nullable:true})
    AND?: Array<BoardScalarWhereInput>;

    @Field(() => [BoardScalarWhereInput], {nullable:true})
    OR?: Array<BoardScalarWhereInput>;

    @Field(() => [BoardScalarWhereInput], {nullable:true})
    NOT?: Array<BoardScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    walletId?: IntFilter;
}
