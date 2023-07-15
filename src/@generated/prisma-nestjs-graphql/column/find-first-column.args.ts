import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnWhereInput } from './column-where.input';
import { Type } from 'class-transformer';
import { ColumnOrderByWithRelationInput } from './column-order-by-with-relation.input';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ColumnScalarFieldEnum } from './column-scalar-field.enum';

@ArgsType()
export class FindFirstColumnArgs {

    @Field(() => ColumnWhereInput, {nullable:true})
    @Type(() => ColumnWhereInput)
    where?: ColumnWhereInput;

    @Field(() => [ColumnOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ColumnOrderByWithRelationInput>;

    @Field(() => ColumnWhereUniqueInput, {nullable:true})
    cursor?: ColumnWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ColumnScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ColumnScalarFieldEnum>;
}
