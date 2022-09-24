/*
  Warnings:

  - You are about to alter the column `weight_Individual` on the `scale` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `weight_total` on the `scale` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "scale" ALTER COLUMN "weight_Individual" SET DATA TYPE INTEGER,
ALTER COLUMN "weight_total" SET DATA TYPE INTEGER;
