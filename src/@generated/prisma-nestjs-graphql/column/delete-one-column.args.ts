import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneColumnArgs {

    @Field(() => ColumnWhereUniqueInput, {nullable:false})
    @Type(() => ColumnWhereUniqueInput)
    where!: ColumnWhereUniqueInput;
}
