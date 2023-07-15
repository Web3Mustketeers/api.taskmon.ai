import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereInput } from './wallet-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWalletArgs {

    @Field(() => WalletWhereInput, {nullable:true})
    @Type(() => WalletWhereInput)
    where?: WalletWhereInput;
}
