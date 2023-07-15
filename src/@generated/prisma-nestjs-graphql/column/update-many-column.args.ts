import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnUpdateManyMutationInput } from './column-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ColumnWhereInput } from './column-where.input';

@ArgsType()
export class UpdateManyColumnArgs {

    @Field(() => ColumnUpdateManyMutationInput, {nullable:false})
    @Type(() => ColumnUpdateManyMutationInput)
    data!: ColumnUpdateManyMutationInput;

    @Field(() => ColumnWhereInput, {nullable:true})
    @Type(() => ColumnWhereInput)
    where?: ColumnWhereInput;
}
