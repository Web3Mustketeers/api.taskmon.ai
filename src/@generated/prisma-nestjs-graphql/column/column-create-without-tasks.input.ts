import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateNestedOneWithoutColumnsInput } from '../board/board-create-nested-one-without-columns.input';

@InputType()
export class ColumnCreateWithoutTasksInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BoardCreateNestedOneWithoutColumnsInput, {nullable:false})
    board!: BoardCreateNestedOneWithoutColumnsInput;
}
