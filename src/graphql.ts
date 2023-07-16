
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateBoardInput {
    name: string;
    isActive?: Nullable<boolean>;
    walletId: number;
}

export class UpdateBoardInput {
    id: number;
    name: string;
    isActive?: Nullable<boolean>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Board {
    id: number;
    name: string;
    isActive: boolean;
    walletId: number;
    createdAt: DateTime;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract boards(orderBy?: Nullable<OrderByParams>): Board[] | Promise<Board[]>;

    abstract board(id: number): Board | Promise<Board>;
}

export abstract class IMutation {
    abstract createBoard(data: CreateBoardInput): Board | Promise<Board>;

    abstract updateBoard(id: number, data: UpdateBoardInput): Board | Promise<Board>;

    abstract deleteBoard(id: number): Board | Promise<Board>;
}

export type DateTime = any;
type Nullable<T> = T | null;
