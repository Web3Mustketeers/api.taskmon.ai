import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateNestedOneWithoutColumnsInput } from '../board/board-create-nested-one-without-columns.input';
import { TaskCreateNestedManyWithoutColumnInput } from '../task/task-create-nested-many-without-column.input';

@InputType()
export class ColumnCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BoardCreateNestedOneWithoutColumnsInput, {nullable:false})
    board!: BoardCreateNestedOneWithoutColumnsInput;

    @Field(() => TaskCreateNestedManyWithoutColumnInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutColumnInput;
}
