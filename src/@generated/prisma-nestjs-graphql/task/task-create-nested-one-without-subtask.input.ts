import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubtaskInput } from './task-create-without-subtask.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubtaskInput } from './task-create-or-connect-without-subtask.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutSubtaskInput {

    @Field(() => TaskCreateWithoutSubtaskInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubtaskInput)
    create?: TaskCreateWithoutSubtaskInput;

    @Field(() => TaskCreateOrConnectWithoutSubtaskInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubtaskInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubtaskInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
