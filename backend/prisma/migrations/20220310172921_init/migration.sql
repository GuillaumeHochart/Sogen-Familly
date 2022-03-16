-- CreateTable
CREATE TABLE "Familly_item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "positon" INTEGER NOT NULL,

    CONSTRAINT "Familly_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Child_item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "familly_itemId" INTEGER NOT NULL,

    CONSTRAINT "Child_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Child_item" ADD CONSTRAINT "Child_item_familly_itemId_fkey" FOREIGN KEY ("familly_itemId") REFERENCES "Familly_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
