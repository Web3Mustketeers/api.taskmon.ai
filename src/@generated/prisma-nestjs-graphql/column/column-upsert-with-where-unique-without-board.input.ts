import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnUpdateWithoutBoardInput } from './column-update-without-board.input';
import { ColumnCreateWithoutBoardInput } from './column-create-without-board.input';

@InputType()
export class ColumnUpsertWithWhereUniqueWithoutBoardInput {

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;

    @Field(() => ColumnUpdateWithoutBoardInput, {nullable:false})
    @Type(() => ColumnUpdateWithoutBoardInput)
    update!: ColumnUpdateWithoutBoardInput;

    @Field(() => ColumnCreateWithoutBoardInput, {nullable:false})
    @Type(() => ColumnCreateWithoutBoardInput)
    create!: ColumnCreateWithoutBoardInput;
}
