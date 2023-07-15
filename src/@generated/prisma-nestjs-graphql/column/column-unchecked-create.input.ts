import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutColumnInput } from '../task/task-unchecked-create-nested-many-without-column.input';

@InputType()
export class ColumnUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => TaskUncheckedCreateNestedManyWithoutColumnInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput;
}
