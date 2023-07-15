import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateWithoutWalletInput } from './board-create-without-wallet.input';
import { Type } from 'class-transformer';
import { BoardCreateOrConnectWithoutWalletInput } from './board-create-or-connect-without-wallet.input';
import { BoardCreateManyWalletInputEnvelope } from './board-create-many-wallet-input-envelope.input';
import { BoardWhereUniqueInput } from './board-where-unique.input';

@InputType()
export class BoardCreateNestedManyWithoutWalletInput {

    @Field(() => [BoardCreateWithoutWalletInput], {nullable:true})
    @Type(() => BoardCreateWithoutWalletInput)
    create?: Array<BoardCreateWithoutWalletInput>;

    @Field(() => [BoardCreateOrConnectWithoutWalletInput], {nullable:true})
    @Type(() => BoardCreateOrConnectWithoutWalletInput)
    connectOrCreate?: Array<BoardCreateOrConnectWithoutWalletInput>;

    @Field(() => BoardCreateManyWalletInputEnvelope, {nullable:true})
    @Type(() => BoardCreateManyWalletInputEnvelope)
    createMany?: BoardCreateManyWalletInputEnvelope;

    @Field(() => [BoardWhereUniqueInput], {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    connect?: Array<BoardWhereUniqueInput>;
}
