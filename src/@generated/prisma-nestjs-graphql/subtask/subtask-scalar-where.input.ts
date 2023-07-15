import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class SubtaskScalarWhereInput {

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    AND?: Array<SubtaskScalarWhereInput>;

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    OR?: Array<SubtaskScalarWhereInput>;

    @Field(() => [SubtaskScalarWhereInput], {nullable:true})
    NOT?: Array<SubtaskScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isCompleted?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;
}
