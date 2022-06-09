import { Injectable, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
@Injectable()
export class trendRepository {
  constructor(private prisma: PrismaService) {}
  //trend table
  async getTrendsForItem(userid: number, item: string) {
    return await this.prisma.trend.findFirst({
      where: { userId: userid, ProduceType: item },
    });
  }
  async getTrendsForDayAndItem(
    userid: number,
    item: string,
    Weekday: Prisma.EnumWeekdaysNullableFilter
  ) {
    return await this.prisma.trend.findFirst({
      where: { userId: +userid, ProduceType: item, Day: Weekday },
    });
  }
  async getTrendsAllTrendsForDay(
    userid: number,
    Weekday: Prisma.EnumWeekdaysNullableFilter
  ) {
    return await this.prisma.trend.findMany({
      where: { userId: +userid, Day: Weekday },
    });
  }
  async getAll(
    userid: number,
  ) {
    return await this.prisma.trend.findMany({
      where: { userId: +userid },
    });
  }
  async createTrend(
    id: number,
    item: string,
    Weekday: Prisma.EnumWeekdaysNullableFilter
  ) {
    return await this.prisma.trend.create({
      data: {
        userId: id,
        ProduceType: item,
        Day: Weekday.equals,
        AverageSalesAmount: 0,
        AmountSales: 0,
      },
    });
  }
  async updateTrendSales(
    id: number,
    item: string,
    Weekday: Prisma.EnumWeekdaysNullableFilter,
    AverageSales: number
  ) {
    return await this.prisma.trend.updateMany({
      where: { userId: +id, ProduceType: item, Day: Weekday },
      data: { AverageSalesAmount: AverageSales },
    });
  }
  async updateDateofSale(
    id: number,
    item: string,
    Weekday: Prisma.EnumWeekdaysNullableFilter,
    date: Date
  ) {
    return await this.prisma.trend.updateMany({
      where: { userId: +id, ProduceType: item, Day: Weekday },
      data: { SaleDate: date },
    });
  }
  async updateLastRestock(
    id: number,
    item: string,
    Weekday: Prisma.EnumWeekdaysNullableFilter,
    date: Date
  ) {
    return await this.prisma.trend.updateMany({
      where: { userId: +id, ProduceType: item, Day: Weekday },
      data: { LastRestock: date },
    });
  }
  async deleteTrend(
    id: number,
    item: string,
    Weekday: Prisma.EnumWeekdaysNullableFilter
  ) {
    return await this.prisma.trend.deleteMany({
      where: { userId: id, ProduceType: item, Day: Weekday },
    });
  }
  async getSalesAmount(
    id: number,
    Weekday: Prisma.EnumWeekdaysNullableFilter,
    item: string
  ) {
    return await (
      await this.prisma.trend.findFirst({
        where: { userId: +id, Day: Weekday, ProduceType: item },
      })
    ).AmountSales;
  }
  async updateAmountSales(
    id: number,
    Weekday: Prisma.EnumWeekdaysNullableFilter,
    item: string,
    AmountSales: number
  ) {
    return await this.prisma.trend.updateMany({
      where: { userId: +id, Day: Weekday, ProduceType: item },
      data: { AmountSales: AmountSales },
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
