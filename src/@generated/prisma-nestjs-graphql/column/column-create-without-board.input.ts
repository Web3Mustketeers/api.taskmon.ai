import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedManyWithoutColumnInput } from '../task/task-create-nested-many-without-column.input';

@InputType()
export class ColumnCreateWithoutBoardInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TaskCreateNestedManyWithoutColumnInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutColumnInput;
}
