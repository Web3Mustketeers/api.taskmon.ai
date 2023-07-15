import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutColumnInput } from './task-create-without-column.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutColumnInput } from './task-create-or-connect-without-column.input';
import { TaskCreateManyColumnInputEnvelope } from './task-create-many-column-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutColumnInput {

    @Field(() => [TaskCreateWithoutColumnInput], {nullable:true})
    @Type(() => TaskCreateWithoutColumnInput)
    create?: Array<TaskCreateWithoutColumnInput>;

    @Field(() => [TaskCreateOrConnectWithoutColumnInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutColumnInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutColumnInput>;

    @Field(() => TaskCreateManyColumnInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyColumnInputEnvelope)
    createMany?: TaskCreateManyColumnInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
