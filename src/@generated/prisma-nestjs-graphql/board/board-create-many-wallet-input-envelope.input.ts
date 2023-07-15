import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateManyWalletInput } from './board-create-many-wallet.input';
import { Type } from 'class-transformer';

@InputType()
export class BoardCreateManyWalletInputEnvelope {

    @Field(() => [BoardCreateManyWalletInput], {nullable:false})
    @Type(() => BoardCreateManyWalletInput)
    data!: Array<BoardCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
