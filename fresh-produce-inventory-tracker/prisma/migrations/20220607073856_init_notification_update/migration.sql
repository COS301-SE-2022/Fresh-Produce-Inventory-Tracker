/*
  Warnings:

  - You are about to drop the column `title` on the `notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "notification" DROP COLUMN "title",
ADD COLUMN     "type" TEXT;
