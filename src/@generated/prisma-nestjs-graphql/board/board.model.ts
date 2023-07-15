import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';
import { Column } from '../column/column.model';
import { BoardCount } from './board-count.output';

@ObjectType()
export class Board {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:false})
    walletId!: number;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;

    @Field(() => [Column], {nullable:true})
    columns?: Array<Column>;

    @Field(() => BoardCount, {nullable:false})
    _count?: BoardCount;
}
