import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { Type } from 'class-transformer';
import { WalletCreateWithoutBoardInput } from './wallet-create-without-board.input';

@InputType()
export class WalletCreateOrConnectWithoutBoardInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    @Type(() => WalletWhereUniqueInput)
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutBoardInput, {nullable:false})
    @Type(() => WalletCreateWithoutBoardInput)
    create!: WalletCreateWithoutBoardInput;
}
