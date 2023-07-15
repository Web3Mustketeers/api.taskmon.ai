import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnWhereInput } from './column-where.input';
import { Type } from 'class-transformer';
import { ColumnOrderByWithAggregationInput } from './column-order-by-with-aggregation.input';
import { ColumnScalarFieldEnum } from './column-scalar-field.enum';
import { ColumnScalarWhereWithAggregatesInput } from './column-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ColumnCountAggregateInput } from './column-count-aggregate.input';
import { ColumnAvgAggregateInput } from './column-avg-aggregate.input';
import { ColumnSumAggregateInput } from './column-sum-aggregate.input';
import { ColumnMinAggregateInput } from './column-min-aggregate.input';
import { ColumnMaxAggregateInput } from './column-max-aggregate.input';

@ArgsType()
export class ColumnGroupByArgs {

    @Field(() => ColumnWhereInput, {nullable:true})
    @Type(() => ColumnWhereInput)
    where?: ColumnWhereInput;

    @Field(() => [ColumnOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ColumnOrderByWithAggregationInput>;

    @Field(() => [ColumnScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ColumnScalarFieldEnum>;

    @Field(() => ColumnScalarWhereWithAggregatesInput, {nullable:true})
    having?: ColumnScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ColumnCountAggregateInput, {nullable:true})
    _count?: ColumnCountAggregateInput;

    @Field(() => ColumnAvgAggregateInput, {nullable:true})
    _avg?: ColumnAvgAggregateInput;

    @Field(() => ColumnSumAggregateInput, {nullable:true})
    _sum?: ColumnSumAggregateInput;

    @Field(() => ColumnMinAggregateInput, {nullable:true})
    _min?: ColumnMinAggregateInput;

    @Field(() => ColumnMaxAggregateInput, {nullable:true})
    _max?: ColumnMaxAggregateInput;
}
