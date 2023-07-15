import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoardUpdateOneRequiredWithoutColumnsNestedInput } from '../board/board-update-one-required-without-columns-nested.input';
import { TaskUpdateManyWithoutColumnNestedInput } from '../task/task-update-many-without-column-nested.input';

@InputType()
export class ColumnUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoardUpdateOneRequiredWithoutColumnsNestedInput, {nullable:true})
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput;

    @Field(() => TaskUpdateManyWithoutColumnNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutColumnNestedInput;
}
