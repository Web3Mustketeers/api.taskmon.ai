import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtaskCreateNestedManyWithoutTaskInput } from '../subtask/subtask-create-nested-many-without-task.input';

@InputType()
export class TaskCreateWithoutColumnInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => SubtaskCreateNestedManyWithoutTaskInput, {nullable:true})
    Subtask?: SubtaskCreateNestedManyWithoutTaskInput;
}
