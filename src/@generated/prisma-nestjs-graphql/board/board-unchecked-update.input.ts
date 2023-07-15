import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ColumnUncheckedUpdateManyWithoutBoardNestedInput } from '../column/column-unchecked-update-many-without-board-nested.input';

@InputType()
export class BoardUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    walletId?: IntFieldUpdateOperationsInput;

    @Field(() => ColumnUncheckedUpdateManyWithoutBoardNestedInput, {nullable:true})
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput;
}
