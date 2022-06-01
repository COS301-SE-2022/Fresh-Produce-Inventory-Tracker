/*
  Warnings:

  - The primary key for the `scale_trend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `scale_trend` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `scale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `scale_id` to the `scale_trend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "scale_trend" DROP CONSTRAINT "scale_trend_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "scale_id" INTEGER NOT NULL,
ADD CONSTRAINT "scale_trend_pkey" PRIMARY KEY ("id", "scale_id", "produce_type");

-- CreateIndex
CREATE UNIQUE INDEX "scale_id_key" ON "scale"("id");

-- AddForeignKey
ALTER TABLE "scale_trend" ADD CONSTRAINT "scale_trend_scale_id_fkey" FOREIGN KEY ("scale_id") REFERENCES "scale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trend" ADD CONSTRAINT "trend_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
