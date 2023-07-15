import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutBoardInput } from './wallet-create-without-board.input';
import { Type } from 'class-transformer';
import { WalletCreateOrConnectWithoutBoardInput } from './wallet-create-or-connect-without-board.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutBoardInput {

    @Field(() => WalletCreateWithoutBoardInput, {nullable:true})
    @Type(() => WalletCreateWithoutBoardInput)
    create?: WalletCreateWithoutBoardInput;

    @Field(() => WalletCreateOrConnectWithoutBoardInput, {nullable:true})
    @Type(() => WalletCreateOrConnectWithoutBoardInput)
    connectOrCreate?: WalletCreateOrConnectWithoutBoardInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    @Type(() => WalletWhereUniqueInput)
    connect?: WalletWhereUniqueInput;
}
