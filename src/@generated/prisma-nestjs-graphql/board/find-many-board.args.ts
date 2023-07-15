import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardWhereInput } from './board-where.input';
import { Type } from 'class-transformer';
import { BoardOrderByWithRelationInput } from './board-order-by-with-relation.input';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoardScalarFieldEnum } from './board-scalar-field.enum';

@ArgsType()
export class FindManyBoardArgs {

    @Field(() => BoardWhereInput, {nullable:true})
    @Type(() => BoardWhereInput)
    where?: BoardWhereInput;

    @Field(() => [BoardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BoardOrderByWithRelationInput>;

    @Field(() => BoardWhereUniqueInput, {nullable:true})
    cursor?: BoardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoardScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoardScalarFieldEnum>;
}
