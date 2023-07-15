import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutBoardInput } from '../wallet/wallet-create-nested-one-without-board.input';

@InputType()
export class BoardCreateWithoutColumnsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => WalletCreateNestedOneWithoutBoardInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutBoardInput;
}
