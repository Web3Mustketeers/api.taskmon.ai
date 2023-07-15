import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardScalarWhereInput } from './board-scalar-where.input';
import { Type } from 'class-transformer';
import { BoardUpdateManyMutationInput } from './board-update-many-mutation.input';

@InputType()
export class BoardUpdateManyWithWhereWithoutWalletInput {

    @Field(() => BoardScalarWhereInput, {nullable:false})
    @Type(() => BoardScalarWhereInput)
    where!: BoardScalarWhereInput;

    @Field(() => BoardUpdateManyMutationInput, {nullable:false})
    @Type(() => BoardUpdateManyMutationInput)
    data!: BoardUpdateManyMutationInput;
}
