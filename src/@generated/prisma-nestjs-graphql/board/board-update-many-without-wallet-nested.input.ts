import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateWithoutWalletInput } from './board-create-without-wallet.input';
import { Type } from 'class-transformer';
import { BoardCreateOrConnectWithoutWalletInput } from './board-create-or-connect-without-wallet.input';
import { BoardUpsertWithWhereUniqueWithoutWalletInput } from './board-upsert-with-where-unique-without-wallet.input';
import { BoardCreateManyWalletInputEnvelope } from './board-create-many-wallet-input-envelope.input';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { BoardUpdateWithWhereUniqueWithoutWalletInput } from './board-update-with-where-unique-without-wallet.input';
import { BoardUpdateManyWithWhereWithoutWalletInput } from './board-update-many-with-where-without-wallet.input';
import { BoardScalarWhereInput } from './board-scalar-where.input';

@InputType()
export class BoardUpdateManyWithoutWalletNestedInput {

    @Field(() => [BoardCreateWithoutWalletInput], {nullable:true})
    @Type(() => BoardCreateWithoutWalletInput)
    create?: Array<BoardCreateWithoutWalletInput>;

    @Field(() => [BoardCreateOrConnectWithoutWalletInput], {nullable:true})
    @Type(() => BoardCreateOrConnectWithoutWalletInput)
    connectOrCreate?: Array<BoardCreateOrConnectWithoutWalletInput>;

    @Field(() => [BoardUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    @Type(() => BoardUpsertWithWhereUniqueWithoutWalletInput)
    upsert?: Array<BoardUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => BoardCreateManyWalletInputEnvelope, {nullable:true})
    @Type(() => BoardCreateManyWalletInputEnvelope)
    createMany?: BoardCreateManyWalletInputEnvelope;

    @Field(() => [BoardWhereUniqueInput], {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    set?: Array<BoardWhereUniqueInput>;

    @Field(() => [BoardWhereUniqueInput], {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    disconnect?: Array<BoardWhereUniqueInput>;

    @Field(() => [BoardWhereUniqueInput], {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    delete?: Array<BoardWhereUniqueInput>;

    @Field(() => [BoardWhereUniqueInput], {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    connect?: Array<BoardWhereUniqueInput>;

    @Field(() => [BoardUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    @Type(() => BoardUpdateWithWhereUniqueWithoutWalletInput)
    update?: Array<BoardUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [BoardUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    @Type(() => BoardUpdateManyWithWhereWithoutWalletInput)
    updateMany?: Array<BoardUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [BoardScalarWhereInput], {nullable:true})
    @Type(() => BoardScalarWhereInput)
    deleteMany?: Array<BoardScalarWhereInput>;
}
