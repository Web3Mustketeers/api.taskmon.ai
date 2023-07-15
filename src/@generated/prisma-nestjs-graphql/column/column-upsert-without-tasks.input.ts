import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnUpdateWithoutTasksInput } from './column-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ColumnCreateWithoutTasksInput } from './column-create-without-tasks.input';

@InputType()
export class ColumnUpsertWithoutTasksInput {

    @Field(() => ColumnUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ColumnUpdateWithoutTasksInput)
    update!: ColumnUpdateWithoutTasksInput;

    @Field(() => ColumnCreateWithoutTasksInput, {nullable:false})
    @Type(() => ColumnCreateWithoutTasksInput)
    create!: ColumnCreateWithoutTasksInput;
}
