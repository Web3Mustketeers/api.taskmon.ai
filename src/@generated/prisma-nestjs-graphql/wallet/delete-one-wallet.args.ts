import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneWalletArgs {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    @Type(() => WalletWhereUniqueInput)
    where!: WalletWhereUniqueInput;
}
