/*
  Warnings:

  - You are about to drop the column `AmountSales` on the `trendforYear` table. All the data in the column will be lost.
  - You are about to drop the column `AverageSalesAmount` on the `trendforYear` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "trendforYear" DROP COLUMN "AmountSales",
DROP COLUMN "AverageSalesAmount",
ADD COLUMN     "amount_sales_for_year" INTEGER[],
ADD COLUMN     "average_sales_amount_for_year" DOUBLE PRECISION[];
