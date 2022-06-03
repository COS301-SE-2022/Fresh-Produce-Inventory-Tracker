/*
  Warnings:

  - You are about to drop the column `Date` on the `scale_trend` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "scale_trend" DROP COLUMN "Date",
ADD COLUMN     "date" TIMESTAMP(3)[];
