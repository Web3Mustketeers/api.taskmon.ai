import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateNestedOneWithoutTasksInput } from '../column/column-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateWithoutSubtaskInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ColumnCreateNestedOneWithoutTasksInput, {nullable:false})
    column!: ColumnCreateNestedOneWithoutTasksInput;
}
