/*
  Warnings:

  - The `produce_type` column on the `scale` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "scale" DROP COLUMN "produce_type",
ADD COLUMN     "produce_type" TEXT;
