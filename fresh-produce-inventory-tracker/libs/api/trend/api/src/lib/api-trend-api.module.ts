import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { trendRepository } from '../../../repository/src/lib/trend.repository';
import { TrendService } from '../../../service/src/lib/trend.service';
import { Trendcontroller } from './trend.controller';

@Module({
  controllers: [Trendcontroller],
  providers: [trendRepository,TrendService,PrismaService],
  exports: [],
})
export class ApiTrendApiModule {}
