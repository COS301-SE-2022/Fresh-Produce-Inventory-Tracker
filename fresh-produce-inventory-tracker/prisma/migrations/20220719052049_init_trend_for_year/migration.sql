-- CreateTable
CREATE TABLE "trendforYear" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "produce_type" TEXT NOT NULL,
    "AverageSalesAmount" DOUBLE PRECISION[],
    "AmountSales" INTEGER[],
    "SaleDate" TIMESTAMP(3),
    "LastRestock" TIMESTAMP(3),

    CONSTRAINT "trendforYear_pkey" PRIMARY KEY ("id","user_id","produce_type")
);

-- AddForeignKey
ALTER TABLE "trendforYear" ADD CONSTRAINT "trendforYear_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
