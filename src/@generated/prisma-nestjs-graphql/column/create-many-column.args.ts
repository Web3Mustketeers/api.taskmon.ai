import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnCreateManyInput } from './column-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyColumnArgs {

    @Field(() => [ColumnCreateManyInput], {nullable:false})
    @Type(() => ColumnCreateManyInput)
    data!: Array<ColumnCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
