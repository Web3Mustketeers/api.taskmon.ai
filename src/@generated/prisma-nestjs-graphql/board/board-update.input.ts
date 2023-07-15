import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutBoardNestedInput } from '../wallet/wallet-update-one-required-without-board-nested.input';
import { ColumnUpdateManyWithoutBoardNestedInput } from '../column/column-update-many-without-board-nested.input';

@InputType()
export class BoardUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutBoardNestedInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutBoardNestedInput;

    @Field(() => ColumnUpdateManyWithoutBoardNestedInput, {nullable:true})
    columns?: ColumnUpdateManyWithoutBoardNestedInput;
}
