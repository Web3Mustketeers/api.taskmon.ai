import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoardUpdateManyMutationInput } from './board-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BoardWhereInput } from './board-where.input';

@ArgsType()
export class UpdateManyBoardArgs {

    @Field(() => BoardUpdateManyMutationInput, {nullable:false})
    @Type(() => BoardUpdateManyMutationInput)
    data!: BoardUpdateManyMutationInput;

    @Field(() => BoardWhereInput, {nullable:true})
    @Type(() => BoardWhereInput)
    where?: BoardWhereInput;
}
