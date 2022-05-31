-- CreateEnum
CREATE TYPE "Weekdays" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday');

-- CreateTable
CREATE TABLE "scale_trend" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "produce_type" TEXT NOT NULL,
    "weight" INTEGER[],
    "Date" TIMESTAMP(3)[],

    CONSTRAINT "scale_trend_pkey" PRIMARY KEY ("id","user_id","produce_type")
);

-- CreateTable
CREATE TABLE "trend" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "produce_type" TEXT NOT NULL,
    "Day" "Weekdays",
    "AverageSalesAmount" INTEGER,

    CONSTRAINT "trend_pkey" PRIMARY KEY ("id","user_id","produce_type")
);
