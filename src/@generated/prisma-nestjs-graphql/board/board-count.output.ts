import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoardCount {

    @Field(() => Int, {nullable:false})
    columns?: number;
}
