import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutColumnInput } from './task-create-without-column.input';

@InputType()
export class TaskCreateOrConnectWithoutColumnInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutColumnInput, {nullable:false})
    @Type(() => TaskCreateWithoutColumnInput)
    create!: TaskCreateWithoutColumnInput;
}
