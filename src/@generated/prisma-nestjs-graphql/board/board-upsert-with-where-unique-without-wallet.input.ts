import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Type } from 'class-transformer';
import { BoardUpdateWithoutWalletInput } from './board-update-without-wallet.input';
import { BoardCreateWithoutWalletInput } from './board-create-without-wallet.input';

@InputType()
export class BoardUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;

    @Field(() => BoardUpdateWithoutWalletInput, {nullable:false})
    @Type(() => BoardUpdateWithoutWalletInput)
    update!: BoardUpdateWithoutWalletInput;

    @Field(() => BoardCreateWithoutWalletInput, {nullable:false})
    @Type(() => BoardCreateWithoutWalletInput)
    create!: BoardCreateWithoutWalletInput;
}
