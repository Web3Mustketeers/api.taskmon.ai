import { registerEnumType } from '@nestjs/graphql';

export enum WalletScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    address = "address"
}


registerEnumType(WalletScalarFieldEnum, { name: 'WalletScalarFieldEnum', description: undefined })
