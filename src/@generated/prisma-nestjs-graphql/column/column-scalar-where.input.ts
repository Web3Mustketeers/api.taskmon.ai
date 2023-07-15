import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ColumnScalarWhereInput {

    @Field(() => [ColumnScalarWhereInput], {nullable:true})
    AND?: Array<ColumnScalarWhereInput>;

    @Field(() => [ColumnScalarWhereInput], {nullable:true})
    OR?: Array<ColumnScalarWhereInput>;

    @Field(() => [ColumnScalarWhereInput], {nullable:true})
    NOT?: Array<ColumnScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    boardId?: IntFilter;
}
