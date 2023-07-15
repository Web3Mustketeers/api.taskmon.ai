import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUpdateManyWithoutColumnNestedInput } from '../task/task-update-many-without-column-nested.input';

@InputType()
export class ColumnUpdateWithoutBoardInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUpdateManyWithoutColumnNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutColumnNestedInput;
}
