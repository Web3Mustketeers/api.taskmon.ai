
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class BoardInput {
    name: string;
    isActive?: Nullable<boolean>;
    walletId: number;
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
    updatedAt: DateTime;
}

export abstract class IQuery {
    abstract boards(orderBy?: Nullable<OrderByParams>): Board[] | Promise<Board[]>;

    abstract board(id: number): Board | Promise<Board>;
}

export abstract class IMutation {
    abstract createBoard(data: BoardInput): Board | Promise<Board>;

    abstract updateBoard(id: number, data: BoardInput): Board | Promise<Board>;

    abstract deleteBoard(id: number): Board | Promise<Board>;
}

export type DateTime = any;
type Nullable<T> = T | null;
