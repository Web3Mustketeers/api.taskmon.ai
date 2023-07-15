import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardWhereInput } from './board-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBoardArgs {

    @Field(() => BoardWhereInput, {nullable:true})
    @Type(() => BoardWhereInput)
    where?: BoardWhereInput;
}
