import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletUpdateManyMutationInput } from './wallet-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WalletWhereInput } from './wallet-where.input';

@ArgsType()
export class UpdateManyWalletArgs {

    @Field(() => WalletUpdateManyMutationInput, {nullable:false})
    @Type(() => WalletUpdateManyMutationInput)
    data!: WalletUpdateManyMutationInput;

    @Field(() => WalletWhereInput, {nullable:true})
    @Type(() => WalletWhereInput)
    where?: WalletWhereInput;
}
