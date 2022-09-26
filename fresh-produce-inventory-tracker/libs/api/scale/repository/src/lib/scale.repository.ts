import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Prisma, Weekdays } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class ScaleRepository {
  constructor(private prisma: PrismaService) {}
  async getScale(id: number, userid: number) {
    return await this.prisma.scale.findUnique({
      where: { id_userId: { userId: userid, id: id } },
    });
  }
  async createScale(
    userId: number,
    weightfull: number,
    weightone: number,
    producetype: string,
    name:string,
    description:string
  ) {
    if((await this.prisma.user.findUnique({where:{id:userId}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    const scale = await this.prisma.scale.create({
      data: {
        userId: userId,
        WeightTotal: weightfull,
        WeightIndividual: weightone,
        ProduceType: producetype,
        Name:name,
        Description:description
      },
    });
    await this.prisma.scale_Trend.create({
      data: {
        scale_id: scale.id,
        ProduceType: producetype,
        date: new Date(),
        weight: weightfull,
      },
    });
    await this.prisma.trend.create({
      data: { userId: userId, ProduceType: producetype, Day: Weekdays.Monday },
    });
    await this.prisma.trend.create({
      data: { userId: userId, ProduceType: producetype, Day: Weekdays.Tuesday },
    });
    await this.prisma.trend.create({
      data: {
        userId: userId,
        ProduceType: producetype,
        Day: Weekdays.Wednesday,
      },
    });
    await this.prisma.trend.create({
      data: {
        userId: userId,
        ProduceType: producetype,
        Day: Weekdays.Thursday,
      },
    });
    await this.prisma.trend.create({
      data: { userId: userId, ProduceType: producetype, Day: Weekdays.Friday },
    });
    await this.prisma.trend.create({
      data: {
        userId: userId,
        ProduceType: producetype,
        Day: Weekdays.Saterday,
      },
    });
    await this.prisma.trend.create({
      data: { userId: userId, ProduceType: producetype, Day: Weekdays.Sunday },
    });
    const today = new Date();
    const expire = new Date();
    expire.setDate(expire.getDate() + 6);
    await this.prisma.trendForYear.create({
      data: {
        id: scale.id,
        userId: userId,
        ProduceType: producetype,
        AverageSalesAmountForYear: Array.from({ length: 366 }, (x) => 0),
        AmountSalesForYear: Array.from({ length: 366 }, (x) => 0),
        LastRestock: today,
        SaleDate: expire,
      },
    });
    return scale;
  }
  async editScale(id: number, userid: number, data: any) {
    if((await this.prisma.user.findUnique({where:{id:userid}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    return await this.prisma.scale.update({
      where: { id_userId: { id: id, userId: userid } },
      data: data,
    });
  }
  async updateScale(id: number, userid: number, Weighttotal: number) {
    console.log('here');
    if((await this.prisma.user.findUnique({where:{id:userid}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    if((await this.prisma.scale.findUnique({where:{id:id}})== null))
    {
      throw new NotFoundException('No such id exists too');
    }
    
    await this.prisma.scale.updateMany({
      where: { id: id, userId: userid },
      data: { WeightTotal: Weighttotal },
    });
    const scale = await this.prisma.scale.findFirst({
      where: { id: id, userId: userid },
    });
    //console.log(scale);
    const old = await this.prisma.scale_Trend.findFirst({
      where: {
        scale_id: scale.id,
        ProduceType: scale.ProduceType,
      },
    });
    //console.log(old);
    const day = new Date();
    await this.prisma.scale_Trend.updateMany({
      where: {
        scale_id: scale.id,
        ProduceType: scale.ProduceType,
      },
      data: {
        date: { set: [...old.date, day] },
        weight: { set: [...old.weight, Weighttotal] },
      },
    });
  }
  async trenddata(id: number) {
    return await this.prisma.trendForYear.findMany({ where: { userId: id } });
  }
  async getAllProduce(id: number) {
    return await this.prisma.scale.findMany({ where: { userId: id } });
  }
  async removeScale(id: number, userid: number) {
    if((await this.prisma.user.findUnique({where:{id:userid}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    if((await this.prisma.scale.findUnique({where:{id:id}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    const scale = await this.prisma.scale.delete({
      where: { id_userId: { id: id, userId: userid } },
    });
    await this.prisma.scale_Trend.deleteMany({
      where: { scale_id: id },
    });
    await this.prisma.trend.deleteMany({
      where: { userId: userid, ProduceType: scale.ProduceType },
    });
    await this.prisma.trendForYear.deleteMany({
      where: { id:id,userId: userid, ProduceType: scale.ProduceType },
    });
  }
}
