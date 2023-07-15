import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletUpdateInput } from './wallet-update.input';
import { Type } from 'class-transformer';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@ArgsType()
export class UpdateOneWalletArgs {

    @Field(() => WalletUpdateInput, {nullable:false})
    @Type(() => WalletUpdateInput)
    data!: WalletUpdateInput;

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    @Type(() => WalletWhereUniqueInput)
    where!: WalletWhereUniqueInput;
}
