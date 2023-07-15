import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ColumnUncheckedCreateNestedManyWithoutBoardInput } from '../column/column-unchecked-create-nested-many-without-board.input';

@InputType()
export class BoardUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:false})
    walletId!: number;

    @Field(() => ColumnUncheckedCreateNestedManyWithoutBoardInput, {nullable:true})
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput;
}
