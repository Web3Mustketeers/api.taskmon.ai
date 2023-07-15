import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletCreateManyInput } from './wallet-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWalletArgs {

    @Field(() => [WalletCreateManyInput], {nullable:false})
    @Type(() => WalletCreateManyInput)
    data!: Array<WalletCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
