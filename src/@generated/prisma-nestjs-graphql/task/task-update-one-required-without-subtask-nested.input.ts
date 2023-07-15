import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubtaskInput } from './task-create-without-subtask.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubtaskInput } from './task-create-or-connect-without-subtask.input';
import { TaskUpsertWithoutSubtaskInput } from './task-upsert-without-subtask.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutSubtaskInput } from './task-update-without-subtask.input';

@InputType()
export class TaskUpdateOneRequiredWithoutSubtaskNestedInput {

    @Field(() => TaskCreateWithoutSubtaskInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubtaskInput)
    create?: TaskCreateWithoutSubtaskInput;

    @Field(() => TaskCreateOrConnectWithoutSubtaskInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubtaskInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubtaskInput;

    @Field(() => TaskUpsertWithoutSubtaskInput, {nullable:true})
    @Type(() => TaskUpsertWithoutSubtaskInput)
    upsert?: TaskUpsertWithoutSubtaskInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutSubtaskInput, {nullable:true})
    @Type(() => TaskUpdateWithoutSubtaskInput)
    update?: TaskUpdateWithoutSubtaskInput;
}
