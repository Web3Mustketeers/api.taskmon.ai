import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class SubtaskWhereInput {

    @Field(() => [SubtaskWhereInput], {nullable:true})
    AND?: Array<SubtaskWhereInput>;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    OR?: Array<SubtaskWhereInput>;

    @Field(() => [SubtaskWhereInput], {nullable:true})
    NOT?: Array<SubtaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isCompleted?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;
}
