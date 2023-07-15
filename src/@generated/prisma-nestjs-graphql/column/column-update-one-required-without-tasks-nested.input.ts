import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateWithoutTasksInput } from './column-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ColumnCreateOrConnectWithoutTasksInput } from './column-create-or-connect-without-tasks.input';
import { ColumnUpsertWithoutTasksInput } from './column-upsert-without-tasks.input';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { ColumnUpdateWithoutTasksInput } from './column-update-without-tasks.input';

@InputType()
export class ColumnUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => ColumnCreateWithoutTasksInput, {nullable:true})
    @Type(() => ColumnCreateWithoutTasksInput)
    create?: ColumnCreateWithoutTasksInput;

    @Field(() => ColumnCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ColumnCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput;

    @Field(() => ColumnUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ColumnUpsertWithoutTasksInput)
    upsert?: ColumnUpsertWithoutTasksInput;

    @Field(() => ColumnWhereUniqueInput, {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    connect?: ColumnWhereUniqueInput;

    @Field(() => ColumnUpdateWithoutTasksInput, {nullable:true})
    @Type(() => ColumnUpdateWithoutTasksInput)
    update?: ColumnUpdateWithoutTasksInput;
}
