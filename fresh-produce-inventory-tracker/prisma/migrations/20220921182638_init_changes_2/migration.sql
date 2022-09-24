/*
  Warnings:

  - You are about to alter the column `weight` on the `scale_trend` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "scale_trend" ALTER COLUMN "weight" SET DATA TYPE INTEGER[];
