import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutBoardInput } from './wallet-create-without-board.input';
import { Type } from 'class-transformer';
import { WalletCreateOrConnectWithoutBoardInput } from './wallet-create-or-connect-without-board.input';
import { WalletUpsertWithoutBoardInput } from './wallet-upsert-without-board.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutBoardInput } from './wallet-update-without-board.input';

@InputType()
export class WalletUpdateOneRequiredWithoutBoardNestedInput {

    @Field(() => WalletCreateWithoutBoardInput, {nullable:true})
    @Type(() => WalletCreateWithoutBoardInput)
    create?: WalletCreateWithoutBoardInput;

    @Field(() => WalletCreateOrConnectWithoutBoardInput, {nullable:true})
    @Type(() => WalletCreateOrConnectWithoutBoardInput)
    connectOrCreate?: WalletCreateOrConnectWithoutBoardInput;

    @Field(() => WalletUpsertWithoutBoardInput, {nullable:true})
    @Type(() => WalletUpsertWithoutBoardInput)
    upsert?: WalletUpsertWithoutBoardInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    @Type(() => WalletWhereUniqueInput)
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutBoardInput, {nullable:true})
    @Type(() => WalletUpdateWithoutBoardInput)
    update?: WalletUpdateWithoutBoardInput;
}
