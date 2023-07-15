import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardUpdateInput } from './board-update.input';
import { Type } from 'class-transformer';
import { BoardWhereUniqueInput } from './board-where-unique.input';

@ArgsType()
export class UpdateOneBoardArgs {

    @Field(() => BoardUpdateInput, {nullable:false})
    @Type(() => BoardUpdateInput)
    data!: BoardUpdateInput;

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;
}
