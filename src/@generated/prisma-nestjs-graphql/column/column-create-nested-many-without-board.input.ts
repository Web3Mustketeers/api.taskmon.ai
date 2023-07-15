import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateWithoutBoardInput } from './column-create-without-board.input';
import { Type } from 'class-transformer';
import { ColumnCreateOrConnectWithoutBoardInput } from './column-create-or-connect-without-board.input';
import { ColumnCreateManyBoardInputEnvelope } from './column-create-many-board-input-envelope.input';
import { ColumnWhereUniqueInput } from './column-where-unique.input';

@InputType()
export class ColumnCreateNestedManyWithoutBoardInput {

    @Field(() => [ColumnCreateWithoutBoardInput], {nullable:true})
    @Type(() => ColumnCreateWithoutBoardInput)
    create?: Array<ColumnCreateWithoutBoardInput>;

    @Field(() => [ColumnCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => ColumnCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<ColumnCreateOrConnectWithoutBoardInput>;

    @Field(() => ColumnCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => ColumnCreateManyBoardInputEnvelope)
    createMany?: ColumnCreateManyBoardInputEnvelope;

    @Field(() => [ColumnWhereUniqueInput], {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    connect?: Array<ColumnWhereUniqueInput>;
}
