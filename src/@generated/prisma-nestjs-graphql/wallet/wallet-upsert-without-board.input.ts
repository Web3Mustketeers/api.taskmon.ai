import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutBoardInput } from './wallet-update-without-board.input';
import { Type } from 'class-transformer';
import { WalletCreateWithoutBoardInput } from './wallet-create-without-board.input';

@InputType()
export class WalletUpsertWithoutBoardInput {

    @Field(() => WalletUpdateWithoutBoardInput, {nullable:false})
    @Type(() => WalletUpdateWithoutBoardInput)
    update!: WalletUpdateWithoutBoardInput;

    @Field(() => WalletCreateWithoutBoardInput, {nullable:false})
    @Type(() => WalletCreateWithoutBoardInput)
    create!: WalletCreateWithoutBoardInput;
}
