import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutColumnInput } from './task-create-without-column.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutColumnInput } from './task-create-or-connect-without-column.input';
import { TaskUpsertWithWhereUniqueWithoutColumnInput } from './task-upsert-with-where-unique-without-column.input';
import { TaskCreateManyColumnInputEnvelope } from './task-create-many-column-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutColumnInput } from './task-update-with-where-unique-without-column.input';
import { TaskUpdateManyWithWhereWithoutColumnInput } from './task-update-many-with-where-without-column.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutColumnNestedInput {

    @Field(() => [TaskCreateWithoutColumnInput], {nullable:true})
    @Type(() => TaskCreateWithoutColumnInput)
    create?: Array<TaskCreateWithoutColumnInput>;

    @Field(() => [TaskCreateOrConnectWithoutColumnInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutColumnInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutColumnInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutColumnInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutColumnInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutColumnInput>;

    @Field(() => TaskCreateManyColumnInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyColumnInputEnvelope)
    createMany?: TaskCreateManyColumnInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutColumnInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutColumnInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutColumnInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutColumnInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutColumnInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutColumnInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
