import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBoardArgs {

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;
}
