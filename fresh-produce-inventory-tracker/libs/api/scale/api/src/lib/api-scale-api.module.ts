import { Module } from '@nestjs/common';
import { ScaleRepository } from 'libs/api/scale/repository/src/lib/scale.repository';
import { ScaleService } from 'libs/api/scale/service/src/lib/scale.service';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ScaleController } from './scale.contoller';
import {tasksModule} from '../../../../tasks/api/src/lib/tasks.module';
import {ApiNotificationsApiModule} from '../../../../notifications/api/src/lib/api-notifications-api.module';

@Module({
  controllers: [ScaleController],
  providers: [ScaleRepository, ScaleService, PrismaService],
  exports: [],
  imports: [tasksModule,ApiNotificationsApiModule]
})
export class ApiScaleApiModule { }
