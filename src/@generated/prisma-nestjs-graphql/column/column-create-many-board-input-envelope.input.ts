import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateManyBoardInput } from './column-create-many-board.input';
import { Type } from 'class-transformer';

@InputType()
export class ColumnCreateManyBoardInputEnvelope {

    @Field(() => [ColumnCreateManyBoardInput], {nullable:false})
    @Type(() => ColumnCreateManyBoardInput)
    data!: Array<ColumnCreateManyBoardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
