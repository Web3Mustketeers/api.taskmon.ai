import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyColumnInput } from './task-create-many-column.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyColumnInputEnvelope {

    @Field(() => [TaskCreateManyColumnInput], {nullable:false})
    @Type(() => TaskCreateManyColumnInput)
    data!: Array<TaskCreateManyColumnInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
