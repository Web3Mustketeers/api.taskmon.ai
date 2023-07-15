import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutColumnInput } from './task-update-without-column.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutColumnInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutColumnInput, {nullable:false})
    @Type(() => TaskUpdateWithoutColumnInput)
    data!: TaskUpdateWithoutColumnInput;
}
