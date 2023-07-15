import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnWhereInput } from './column-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyColumnArgs {

    @Field(() => ColumnWhereInput, {nullable:true})
    @Type(() => ColumnWhereInput)
    where?: ColumnWhereInput;
}
