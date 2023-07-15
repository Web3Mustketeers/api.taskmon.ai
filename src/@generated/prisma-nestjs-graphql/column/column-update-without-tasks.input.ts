import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoardUpdateOneRequiredWithoutColumnsNestedInput } from '../board/board-update-one-required-without-columns-nested.input';

@InputType()
export class ColumnUpdateWithoutTasksInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoardUpdateOneRequiredWithoutColumnsNestedInput, {nullable:true})
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput;
}
