import { registerEnumType } from '@nestjs/graphql';

export enum ColumnScalarFieldEnum {
    id = "id",
    name = "name",
    boardId = "boardId"
}


registerEnumType(ColumnScalarFieldEnum, { name: 'ColumnScalarFieldEnum', description: undefined })
