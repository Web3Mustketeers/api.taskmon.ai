import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutColumnNestedInput } from '../task/task-unchecked-update-many-without-column-nested.input';

@InputType()
export class ColumnUncheckedUpdateWithoutBoardInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateManyWithoutColumnNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput;
}