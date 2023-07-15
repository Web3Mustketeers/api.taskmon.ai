import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateNestedManyWithoutBoardInput } from '../column/column-create-nested-many-without-board.input';

@InputType()
export class BoardCreateWithoutWalletInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => ColumnCreateNestedManyWithoutBoardInput, {nullable:true})
    columns?: ColumnCreateNestedManyWithoutBoardInput;
}
