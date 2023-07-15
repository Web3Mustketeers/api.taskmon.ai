import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoardUncheckedCreateNestedManyWithoutWalletInput } from '../board/board-unchecked-create-nested-many-without-wallet.input';

@InputType()
export class WalletUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => BoardUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    Board?: BoardUncheckedCreateNestedManyWithoutWalletInput;
}
