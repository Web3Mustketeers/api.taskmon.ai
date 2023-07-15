import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Type } from 'class-transformer';
import { BoardUpdateWithoutWalletInput } from './board-update-without-wallet.input';

@InputType()
export class BoardUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;

    @Field(() => BoardUpdateWithoutWalletInput, {nullable:false})
    @Type(() => BoardUpdateWithoutWalletInput)
    data!: BoardUpdateWithoutWalletInput;
}
