import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateNestedOneWithoutTasksInput } from '../column/column-create-nested-one-without-tasks.input';
import { SubtaskCreateNestedManyWithoutTaskInput } from '../subtask/subtask-create-nested-many-without-task.input';

@InputType()
export class TaskCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ColumnCreateNestedOneWithoutTasksInput, {nullable:false})
    column!: ColumnCreateNestedOneWithoutTasksInput;

    @Field(() => SubtaskCreateNestedManyWithoutTaskInput, {nullable:true})
    Subtask?: SubtaskCreateNestedManyWithoutTaskInput;
}
