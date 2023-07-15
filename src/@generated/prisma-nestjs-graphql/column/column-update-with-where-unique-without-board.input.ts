import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnUpdateWithoutBoardInput } from './column-update-without-board.input';

@InputType()
export class ColumnUpdateWithWhereUniqueWithoutBoardInput {

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;

    @Field(() => ColumnUpdateWithoutBoardInput, {nullable:false})
    @Type(() => ColumnUpdateWithoutBoardInput)
    data!: ColumnUpdateWithoutBoardInput;
}
