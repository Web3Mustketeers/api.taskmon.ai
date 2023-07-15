import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ColumnUpdateOneRequiredWithoutTasksNestedInput } from '../column/column-update-one-required-without-tasks-nested.input';
import { SubtaskUpdateManyWithoutTaskNestedInput } from '../subtask/subtask-update-many-without-task-nested.input';

@InputType()
export class TaskUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ColumnUpdateOneRequiredWithoutTasksNestedInput, {nullable:true})
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;

    @Field(() => SubtaskUpdateManyWithoutTaskNestedInput, {nullable:true})
    Subtask?: SubtaskUpdateManyWithoutTaskNestedInput;
}
