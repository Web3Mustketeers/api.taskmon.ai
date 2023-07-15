import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WalletCount {

    @Field(() => Int, {nullable:false})
    Board?: number;
}
