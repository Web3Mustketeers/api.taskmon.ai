import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardCreateInput } from './board-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBoardArgs {

    @Field(() => BoardCreateInput, {nullable:false})
    @Type(() => BoardCreateInput)
    data!: BoardCreateInput;
}
