import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutBoardInput } from '../wallet/wallet-create-nested-one-without-board.input';
import { ColumnCreateNestedManyWithoutBoardInput } from '../column/column-create-nested-many-without-board.input';

@InputType()
export class BoardCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => WalletCreateNestedOneWithoutBoardInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutBoardInput;

    @Field(() => ColumnCreateNestedManyWithoutBoardInput, {nullable:true})
    columns?: ColumnCreateNestedManyWithoutBoardInput;
}
