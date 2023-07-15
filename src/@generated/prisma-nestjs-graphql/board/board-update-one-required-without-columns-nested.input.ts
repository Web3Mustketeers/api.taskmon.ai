import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoardCreateWithoutColumnsInput } from './board-create-without-columns.input';
import { Type } from 'class-transformer';
import { BoardCreateOrConnectWithoutColumnsInput } from './board-create-or-connect-without-columns.input';
import { BoardUpsertWithoutColumnsInput } from './board-upsert-without-columns.input';
import { BoardWhereUniqueInput } from './board-where-unique.input';
import { BoardUpdateWithoutColumnsInput } from './board-update-without-columns.input';

@InputType()
export class BoardUpdateOneRequiredWithoutColumnsNestedInput {

    @Field(() => BoardCreateWithoutColumnsInput, {nullable:true})
    @Type(() => BoardCreateWithoutColumnsInput)
    create?: BoardCreateWithoutColumnsInput;

    @Field(() => BoardCreateOrConnectWithoutColumnsInput, {nullable:true})
    @Type(() => BoardCreateOrConnectWithoutColumnsInput)
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput;

    @Field(() => BoardUpsertWithoutColumnsInput, {nullable:true})
    @Type(() => BoardUpsertWithoutColumnsInput)
    upsert?: BoardUpsertWithoutColumnsInput;

    @Field(() => BoardWhereUniqueInput, {nullable:true})
    @Type(() => BoardWhereUniqueInput)
    connect?: BoardWhereUniqueInput;

    @Field(() => BoardUpdateWithoutColumnsInput, {nullable:true})
    @Type(() => BoardUpdateWithoutColumnsInput)
    update?: BoardUpdateWithoutColumnsInput;
}
