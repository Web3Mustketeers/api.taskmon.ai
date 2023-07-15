import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { Type } from 'class-transformer';
import { BoardCreateWithoutColumnsInput } from './board-create-without-columns.input';

@InputType()
export class BoardCreateOrConnectWithoutColumnsInput {

    @Field(() => BoardWhereUniqueInput, {nullable:false})
    @Type(() => BoardWhereUniqueInput)
    where!: BoardWhereUniqueInput;

    @Field(() => BoardCreateWithoutColumnsInput, {nullable:false})
    @Type(() => BoardCreateWithoutColumnsInput)
    create!: BoardCreateWithoutColumnsInput;
}
