import { registerEnumType } from '@nestjs/graphql';

export enum BoardScalarFieldEnum {
    id = "id",
    name = "name",
    isActive = "isActive",
    walletId = "walletId"
}


registerEnumType(BoardScalarFieldEnum, { name: 'BoardScalarFieldEnum', description: undefined })
