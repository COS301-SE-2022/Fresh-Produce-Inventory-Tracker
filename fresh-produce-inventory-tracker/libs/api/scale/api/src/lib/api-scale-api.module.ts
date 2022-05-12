import { Module } from '@nestjs/common';
import { ScaleRepository } from 'libs/api/scale/repository/src/lib/scale.repository';
import { ScaleService } from 'libs/api/scale/service/src/lib/scale.service';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ScaleController } from './scale.contoller';

@Module({
  controllers: [ScaleController],
  providers: [ScaleRepository, ScaleService, PrismaService],
  exports: [],
})
export class ApiScaleApiModule { }
