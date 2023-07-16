
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
    name: string;
    isActive?: Nullable<boolean>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class CreateColumnInput {
    name: string;
    boardId: number;
}

export class UpdateColumnInput {
    id: number;
    name: string;
}

export class Board {
    id: number;
    name: string;
    isActive: boolean;
    walletId: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract boards(orderBy?: Nullable<OrderByParams>): Board[] | Promise<Board[]>;

    abstract board(id: number): Board | Promise<Board>;

    abstract columns(): Nullable<Column>[] | Promise<Nullable<Column>[]>;

    abstract column(id: number): Nullable<Column> | Promise<Nullable<Column>>;
}

export abstract class IMutation {
    abstract createBoard(data: CreateBoardInput): Board | Promise<Board>;

    abstract updateBoard(id: number, data: UpdateBoardInput): Board | Promise<Board>;

    abstract deleteBoard(id: number): Board | Promise<Board>;

    abstract createColumn(createColumnInput: CreateColumnInput): Column | Promise<Column>;

    abstract updateColumn(updateColumnInput: UpdateColumnInput): Column | Promise<Column>;

    abstract removeColumn(id: number): Nullable<Column> | Promise<Nullable<Column>>;
}

export class Column {
    id: number;
    name: string;
    boardId: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
