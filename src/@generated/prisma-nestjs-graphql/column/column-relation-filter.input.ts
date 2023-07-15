import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnWhereInput } from './column-where.input';

@InputType()
export class ColumnRelationFilter {

    @Field(() => ColumnWhereInput, {nullable:true})
    is?: ColumnWhereInput;

    @Field(() => ColumnWhereInput, {nullable:true})
    isNot?: ColumnWhereInput;
}
