import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Type } from 'class-transformer';
import { BoardCreateWithoutWalletInput } from './board-create-without-wallet.input';

@InputType()
export class BoardCreateOrConnectWithoutWalletInput {

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;

    @Field(() => BoardCreateWithoutWalletInput, {nullable:false})
    @Type(() => BoardCreateWithoutWalletInput)
    create!: BoardCreateWithoutWalletInput;
}
