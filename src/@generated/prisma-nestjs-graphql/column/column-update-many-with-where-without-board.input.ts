import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnScalarWhereInput } from './column-scalar-where.input';
import { Type } from 'class-transformer';
import { ColumnUpdateManyMutationInput } from './column-update-many-mutation.input';

@InputType()
export class ColumnUpdateManyWithWhereWithoutBoardInput {

    @Field(() => ColumnScalarWhereInput, {nullable:false})
    @Type(() => ColumnScalarWhereInput)
    where!: ColumnScalarWhereInput;

    @Field(() => ColumnUpdateManyMutationInput, {nullable:false})
    @Type(() => ColumnUpdateManyMutationInput)
    data!: ColumnUpdateManyMutationInput;
}
