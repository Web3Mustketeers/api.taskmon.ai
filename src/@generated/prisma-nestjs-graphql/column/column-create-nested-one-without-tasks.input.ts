import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateWithoutTasksInput } from './column-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ColumnCreateOrConnectWithoutTasksInput } from './column-create-or-connect-without-tasks.input';
import { ColumnWhereUniqueInput } from './column-where-unique.input';

@InputType()
export class ColumnCreateNestedOneWithoutTasksInput {

    @Field(() => ColumnCreateWithoutTasksInput, {nullable:true})
    @Type(() => ColumnCreateWithoutTasksInput)
    create?: ColumnCreateWithoutTasksInput;

    @Field(() => ColumnCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ColumnCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput;

    @Field(() => ColumnWhereUniqueInput, {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    connect?: ColumnWhereUniqueInput;
}
