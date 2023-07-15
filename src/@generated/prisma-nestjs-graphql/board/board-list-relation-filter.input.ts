import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardWhereInput } from './board-where.input';

@InputType()
export class BoardListRelationFilter {

    @Field(() => BoardWhereInput, {nullable:true})
    every?: BoardWhereInput;

    @Field(() => BoardWhereInput, {nullable:true})
    some?: BoardWhereInput;

    @Field(() => BoardWhereInput, {nullable:true})
    none?: BoardWhereInput;
}
