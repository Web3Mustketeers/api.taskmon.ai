import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoardRelationFilter } from '../board/board-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';

@InputType()
export class ColumnWhereInput {

    @Field(() => [ColumnWhereInput], {nullable:true})
    AND?: Array<ColumnWhereInput>;

    @Field(() => [ColumnWhereInput], {nullable:true})
    OR?: Array<ColumnWhereInput>;

    @Field(() => [ColumnWhereInput], {nullable:true})
    NOT?: Array<ColumnWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    boardId?: IntFilter;

    @Field(() => BoardRelationFilter, {nullable:true})
    board?: BoardRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;
}
