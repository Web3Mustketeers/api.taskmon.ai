import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnCreateWithoutTasksInput } from './column-create-without-tasks.input';

@InputType()
export class ColumnCreateOrConnectWithoutTasksInput {

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;

    @Field(() => ColumnCreateWithoutTasksInput, {nullable:false})
    @Type(() => ColumnCreateWithoutTasksInput)
    create!: ColumnCreateWithoutTasksInput;
}
