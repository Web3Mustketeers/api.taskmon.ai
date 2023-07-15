import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Type } from 'class-transformer';
import { BoardCreateInput } from './board-create.input';
import { BoardUpdateInput } from './board-update.input';

@ArgsType()
export class UpsertOneBoardArgs {

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;

    @Field(() => BoardCreateInput, {nullable:false})
    @Type(() => BoardCreateInput)
    create!: BoardCreateInput;

    @Field(() => BoardUpdateInput, {nullable:false})
    @Type(() => BoardUpdateInput)
    update!: BoardUpdateInput;
}
