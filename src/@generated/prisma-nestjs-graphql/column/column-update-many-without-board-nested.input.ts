import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnCreateWithoutBoardInput } from './column-create-without-board.input';
import { Type } from 'class-transformer';
import { ColumnCreateOrConnectWithoutBoardInput } from './column-create-or-connect-without-board.input';
import { ColumnUpsertWithWhereUniqueWithoutBoardInput } from './column-upsert-with-where-unique-without-board.input';
import { ColumnCreateManyBoardInputEnvelope } from './column-create-many-board-input-envelope.input';
import { ColumnWhereUniqueInput } from './column-where-unique.input';
import { ColumnUpdateWithWhereUniqueWithoutBoardInput } from './column-update-with-where-unique-without-board.input';
import { ColumnUpdateManyWithWhereWithoutBoardInput } from './column-update-many-with-where-without-board.input';
import { ColumnScalarWhereInput } from './column-scalar-where.input';

@InputType()
export class ColumnUpdateManyWithoutBoardNestedInput {

    @Field(() => [ColumnCreateWithoutBoardInput], {nullable:true})
    @Type(() => ColumnCreateWithoutBoardInput)
    create?: Array<ColumnCreateWithoutBoardInput>;

    @Field(() => [ColumnCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => ColumnCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<ColumnCreateOrConnectWithoutBoardInput>;

    @Field(() => [ColumnUpsertWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => ColumnUpsertWithWhereUniqueWithoutBoardInput)
    upsert?: Array<ColumnUpsertWithWhereUniqueWithoutBoardInput>;

    @Field(() => ColumnCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => ColumnCreateManyBoardInputEnvelope)
    createMany?: ColumnCreateManyBoardInputEnvelope;

    @Field(() => [ColumnWhereUniqueInput], {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    set?: Array<ColumnWhereUniqueInput>;

    @Field(() => [ColumnWhereUniqueInput], {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    disconnect?: Array<ColumnWhereUniqueInput>;

    @Field(() => [ColumnWhereUniqueInput], {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    delete?: Array<ColumnWhereUniqueInput>;

    @Field(() => [ColumnWhereUniqueInput], {nullable:true})
    @Type(() => ColumnWhereUniqueInput)
    connect?: Array<ColumnWhereUniqueInput>;

    @Field(() => [ColumnUpdateWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => ColumnUpdateWithWhereUniqueWithoutBoardInput)
    update?: Array<ColumnUpdateWithWhereUniqueWithoutBoardInput>;

    @Field(() => [ColumnUpdateManyWithWhereWithoutBoardInput], {nullable:true})
    @Type(() => ColumnUpdateManyWithWhereWithoutBoardInput)
    updateMany?: Array<ColumnUpdateManyWithWhereWithoutBoardInput>;

    @Field(() => [ColumnScalarWhereInput], {nullable:true})
    @Type(() => ColumnScalarWhereInput)
    deleteMany?: Array<ColumnScalarWhereInput>;
}
