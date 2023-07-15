import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ColumnUpdateOneRequiredWithoutTasksNestedInput } from '../column/column-update-one-required-without-tasks-nested.input';

@InputType()
export class TaskUpdateWithoutSubtaskInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ColumnUpdateOneRequiredWithoutTasksNestedInput, {nullable:true})
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;
}
