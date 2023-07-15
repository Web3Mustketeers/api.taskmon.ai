import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletCreateInput } from './wallet-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWalletArgs {

    @Field(() => WalletCreateInput, {nullable:false})
    @Type(() => WalletCreateInput)
    data!: WalletCreateInput;
}
