import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnCreateWithoutBoardInput } from './column-create-without-board.input';

@InputType()
export class ColumnCreateOrConnectWithoutBoardInput {

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;

    @Field(() => ColumnCreateWithoutBoardInput, {nullable:false})
    @Type(() => ColumnCreateWithoutBoardInput)
    create!: ColumnCreateWithoutBoardInput;
}
