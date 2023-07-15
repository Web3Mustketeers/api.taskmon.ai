import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Board } from '../board/board.model';
import { WalletCount } from './wallet-count.output';

@ObjectType()
export class Wallet {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => [Board], {nullable:true})
    Board?: Array<Board>;

    @Field(() => WalletCount, {nullable:false})
    _count?: WalletCount;
}
