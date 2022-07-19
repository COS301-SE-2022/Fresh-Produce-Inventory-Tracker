import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendForYearRepository } from '../../../repository/src/lib/trendforyear.repository';
import { TrendForYearService } from '../../../service/src/lib/trendforyear.service';
import { TrendForYearcontroller } from './trendforyear.controller';
@Module({
  controllers: [TrendForYearcontroller],
  providers: [TrendForYearService,trendForYearRepository,PrismaService],
  exports: [],
})
export class ApiTrendforyearApiModule {}
