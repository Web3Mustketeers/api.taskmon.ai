import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateNestedManyWithoutWalletInput } from '../board/board-create-nested-many-without-wallet.input';

@InputType()
export class WalletCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => BoardCreateNestedManyWithoutWalletInput, {nullable:true})
    Board?: BoardCreateNestedManyWithoutWalletInput;
}
