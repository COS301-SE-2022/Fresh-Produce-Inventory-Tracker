import { Injectable, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class ScaleRepository {
  constructor(private prisma: PrismaService) { }
  async getScale(id: number, userid: number) {
    return await this.prisma.scale.findUnique({ where: { id_userId: { userId: userid, id: id } } });
  }
  async createScale(userId: number, weightfull: number, weightone: number, producetype: string) {
    return await this.prisma.scale.create({
      data: { userId: userId, WeightTotal: weightfull, WeightIndividual: weightone,ProduceType: producetype}
    });
  }
  async editScale(id: number, userid: number, data: any) {
    return await this.prisma.scale.update({ where: { id_userId: { id: id, userId: userid } }, data: data });
  }
  async removeScale(id: number, userid: number) {
    return await this.prisma.scale.delete({ where: { id_userId: { id: id, userId: userid } } });
  }
}