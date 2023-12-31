-- CreateTable
CREATE TABLE "wallets" (
    "id" INT2 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" STRING NOT NULL,

    CONSTRAINT "wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boards" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "name" STRING NOT NULL,
    "isActive" BOOL NOT NULL,
    "walletId" INT4 NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "columns" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "name" STRING NOT NULL,
    "boardId" INT4 NOT NULL,

    CONSTRAINT "columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "description" STRING,
    "columnId" INT4 NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subtasks" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "isCompleted" BOOL NOT NULL DEFAULT false,
    "taskId" INT4 NOT NULL,

    CONSTRAINT "subtasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wallets_address_key" ON "wallets"("address");

-- AddForeignKey
ALTER TABLE "boards" ADD CONSTRAINT "boards_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "columns" ADD CONSTRAINT "columns_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "boards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "columns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
