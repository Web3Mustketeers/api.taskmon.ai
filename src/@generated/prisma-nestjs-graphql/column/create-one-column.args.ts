import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnCreateInput } from './column-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneColumnArgs {

    @Field(() => ColumnCreateInput, {nullable:false})
    @Type(() => ColumnCreateInput)
    data!: ColumnCreateInput;
}
