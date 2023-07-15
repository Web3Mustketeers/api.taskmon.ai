import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardCreateManyInput } from './board-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBoardArgs {

    @Field(() => [BoardCreateManyInput], {nullable:false})
    @Type(() => BoardCreateManyInput)
    data!: Array<BoardCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
