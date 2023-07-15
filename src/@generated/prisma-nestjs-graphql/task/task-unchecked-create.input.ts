import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtaskUncheckedCreateNestedManyWithoutTaskInput } from '../subtask/subtask-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    columnId!: number;

    @Field(() => SubtaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    Subtask?: SubtaskUncheckedCreateNestedManyWithoutTaskInput;
}
