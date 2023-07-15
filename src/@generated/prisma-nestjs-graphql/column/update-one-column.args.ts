import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnUpdateInput } from './column-update.input';
import { Type } from 'class-transformer';
import { ColumnWhereUniqueInput } from './column-where-unique.input';

@ArgsType()
export class UpdateOneColumnArgs {

    @Field(() => ColumnUpdateInput, {nullable:false})
    @Type(() => ColumnUpdateInput)
    data!: ColumnUpdateInput;

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;
}
