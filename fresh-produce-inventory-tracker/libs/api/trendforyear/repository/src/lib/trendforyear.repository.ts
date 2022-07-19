import { Injectable, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { isGeneratorFunction } from 'util/types';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
@Injectable()
export class trendForYearRepository {
  constructor(private prisma: PrismaService) {}
  //trend table
  async getTrendsForItem(userid: number, item: string) {
    return await this.prisma.trendForYear.findFirst({
      where: { userId: userid, ProduceType: item },
    });
  }
  async getAll(userid: number) {
    return await this.prisma.trendForYear.findMany({
      where: { userId: +userid },
    });
  }
  async createTrend(
    id: number,
    item: string
  ) {

    return await this.prisma.trendForYear.create({
      data: {
        userId: id,
        ProduceType: item,
        AverageSalesAmountForYear: Array.from({length: 366}, x => 0),
        AmountSalesForYear: Array.from({length: 366}, x => 0),
      },
    });
  }
  async updateTrendSales(
    id: number,
    item: string,
    AverageSales :number[]
  ) {
    return await this.prisma.trendForYear.updateMany({
      where: { userId: +id, ProduceType: item },
      data: { AverageSalesAmountForYear: AverageSales },
    });
  }
  async updateDateofSale(
    id: number,
    item: string,
    date: Date
  ) {
    return await this.prisma.trendForYear.updateMany({
      where: { userId: +id, ProduceType: item },
      data: { SaleDate: date },
    });
  }
  async updateLastRestock(
    id: number,
    item: string,
    date: Date
  ) {
    return await this.prisma.trendForYear.updateMany({
      where: { userId: +id, ProduceType: item },
      data: { LastRestock: date },
    });
  }
  async deleteTrend(
    id: number,
    item: string,
  ) {
    return await this.prisma.trendForYear.deleteMany({
      where: { userId: id, ProduceType: item },
    });
  }
  async getSalesAmount(
    id: number,
    item: string
  ) {
    return (
      await this.prisma.trendForYear.findFirst({
        where: { userId: +id, ProduceType: item },
      })
    ).AmountSalesForYear;
  }
  async updateAmountSales(
    id: number,
    item: string,
    AmountSales: number[]
  ) {
    return await this.prisma.trendForYear.updateMany({
      where: { userId: +id, ProduceType: item },
      data: { AmountSalesForYear: AmountSales },
    });
  }

  //scale trend table
  async getScaleTrend(scale: number) {
    return await this.prisma.scale_Trend.findFirst({
      where: { scale_id: +scale },
    });
  }
  async deleteAllScaleTrendData(
    scale: number,
    item: string,
    lastvalDate: Date,
    lastvalWeight: number
  ) {
    return await this.prisma.scale_Trend.updateMany({
      where: { scale_id: +scale, ProduceType: item },
      data: { weight: { set: [lastvalWeight] }, date: { set: [lastvalDate] } },
    });
  }
}