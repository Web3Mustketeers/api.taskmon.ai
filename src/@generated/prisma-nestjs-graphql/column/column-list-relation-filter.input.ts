import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnWhereInput } from './column-where.input';

@InputType()
export class ColumnListRelationFilter {

    @Field(() => ColumnWhereInput, {nullable:true})
    every?: ColumnWhereInput;

    @Field(() => ColumnWhereInput, {nullable:true})
    some?: ColumnWhereInput;

    @Field(() => ColumnWhereInput, {nullable:true})
    none?: ColumnWhereInput;
}
