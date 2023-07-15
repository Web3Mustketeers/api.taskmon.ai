import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutColumnInput } from './task-update-without-column.input';
import { TaskCreateWithoutColumnInput } from './task-create-without-column.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutColumnInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutColumnInput, {nullable:false})
    @Type(() => TaskUpdateWithoutColumnInput)
    update!: TaskUpdateWithoutColumnInput;

    @Field(() => TaskCreateWithoutColumnInput, {nullable:false})
    @Type(() => TaskCreateWithoutColumnInput)
    create!: TaskCreateWithoutColumnInput;
}
