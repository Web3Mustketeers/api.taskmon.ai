import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { Type } from 'class-transformer';
import { WalletCreateInput } from './wallet-create.input';
import { WalletUpdateInput } from './wallet-update.input';

@ArgsType()
export class UpsertOneWalletArgs {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    @Type(() => WalletWhereUniqueInput)
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateInput, {nullable:false})
    @Type(() => WalletCreateInput)
    create!: WalletCreateInput;

    @Field(() => WalletUpdateInput, {nullable:false})
    @Type(() => WalletUpdateInput)
    update!: WalletUpdateInput;
}
