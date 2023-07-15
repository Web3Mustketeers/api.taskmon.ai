import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardUpdateWithoutColumnsInput } from './board-update-without-columns.input';
import { Type } from 'class-transformer';
import { BoardCreateWithoutColumnsInput } from './board-create-without-columns.input';

@InputType()
export class BoardUpsertWithoutColumnsInput {

    @Field(() => BoardUpdateWithoutColumnsInput, {nullable:false})
    @Type(() => BoardUpdateWithoutColumnsInput)
    update!: BoardUpdateWithoutColumnsInput;

    @Field(() => BoardCreateWithoutColumnsInput, {nullable:false})
    @Type(() => BoardCreateWithoutColumnsInput)
    create!: BoardCreateWithoutColumnsInput;
}
