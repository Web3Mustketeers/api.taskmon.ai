import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardWhereInput } from './board-where.input';

@InputType()
export class BoardRelationFilter {

    @Field(() => BoardWhereInput, {nullable:true})
    is?: BoardWhereInput;

    @Field(() => BoardWhereInput, {nullable:true})
    isNot?: BoardWhereInput;
}
