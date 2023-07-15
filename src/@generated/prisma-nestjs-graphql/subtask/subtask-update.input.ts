import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { TaskUpdateOneRequiredWithoutSubtaskNestedInput } from '../task/task-update-one-required-without-subtask-nested.input';

@InputType()
export class SubtaskUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isCompleted?: BoolFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneRequiredWithoutSubtaskNestedInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutSubtaskNestedInput;
}
