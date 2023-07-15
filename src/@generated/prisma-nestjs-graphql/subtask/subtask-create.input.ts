import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutSubtaskInput } from '../task/task-create-nested-one-without-subtask.input';

@InputType()
export class SubtaskCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    isCompleted?: boolean;

    @Field(() => TaskCreateNestedOneWithoutSubtaskInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutSubtaskInput;
}
