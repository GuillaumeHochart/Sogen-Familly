/*
  Warnings:

  - You are about to drop the `Familly_item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Child_item" DROP CONSTRAINT "Child_item_familly_itemId_fkey";

-- DropTable
DROP TABLE "Familly_item";

-- CreateTable
CREATE TABLE "Family_item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "position" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Family_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Child_item" ADD CONSTRAINT "Child_item_familly_itemId_fkey" FOREIGN KEY ("familly_itemId") REFERENCES "Family_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
