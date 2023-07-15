import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { SubtaskUncheckedUpdateManyWithoutTaskNestedInput } from '../subtask/subtask-unchecked-update-many-without-task-nested.input';

@InputType()
export class TaskUncheckedUpdateWithoutColumnInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => SubtaskUncheckedUpdateManyWithoutTaskNestedInput, {nullable:true})
    Subtask?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput;
}
