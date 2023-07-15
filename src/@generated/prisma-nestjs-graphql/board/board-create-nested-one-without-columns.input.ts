import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateWithoutColumnsInput } from './board-create-without-columns.input';
import { Type } from 'class-transformer';
import { BoardCreateOrConnectWithoutColumnsInput } from './board-create-or-connect-without-columns.input';
import { BoardWhereUniqueInput } from './board-where-unique.input';

@InputType()
export class BoardCreateNestedOneWithoutColumnsInput {

    @Field(() => BoardCreateWithoutColumnsInput, {nullable:true})
    @Type(() => BoardCreateWithoutColumnsInput)
    create?: BoardCreateWithoutColumnsInput;

    @Field(() => BoardCreateOrConnectWithoutColumnsInput, {nullable:true})
    @Type(() => BoardCreateOrConnectWithoutColumnsInput)
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput;

    @Field(() => BoardWhereUniqueInput, {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    connect?: BoardWhereUniqueInput;
}
