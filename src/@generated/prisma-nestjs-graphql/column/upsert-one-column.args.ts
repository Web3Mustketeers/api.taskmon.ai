import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Type } from 'class-transformer';
import { ColumnCreateInput } from './column-create.input';
import { ColumnUpdateInput } from './column-update.input';

@ArgsType()
export class UpsertOneColumnArgs {

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;

    @Field(() => ColumnCreateInput, {nullable:false})
    @Type(() => ColumnCreateInput)
    create!: ColumnCreateInput;

    @Field(() => ColumnUpdateInput, {nullable:false})
    @Type(() => ColumnUpdateInput)
    update!: ColumnUpdateInput;
}
