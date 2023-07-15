import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutColumnNestedInput } from '../task/task-unchecked-update-many-without-column-nested.input';

@InputType()
export class ColumnUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    boardId?: IntFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateManyWithoutColumnNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput;
}
