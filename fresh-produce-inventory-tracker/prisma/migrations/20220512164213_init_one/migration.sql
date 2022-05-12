/*
  Warnings:

  - You are about to drop the column `weight` on the `scale` table. All the data in the column will be lost.
  - Added the required column `produce_type` to the `scale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight_Individual` to the `scale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight_total` to the `scale` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Stock_Level" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- AlterTable
ALTER TABLE "scale" DROP COLUMN "weight",
ADD COLUMN     "produce_type" "ProduceType" NOT NULL,
ADD COLUMN     "weight_Individual" INTEGER NOT NULL,
ADD COLUMN     "weight_total" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "feedback_data" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "stock_level" TEXT,
    "produce" "ProduceType" NOT NULL,
    "freshness" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedback_data_pkey" PRIMARY KEY ("id","user_id")
);

-- AddForeignKey
ALTER TABLE "feedback_data" ADD CONSTRAINT "feedback_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
