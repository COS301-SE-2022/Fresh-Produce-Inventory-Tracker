import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiAuthenticationApiModule } from '../../../../libs/api/authentication/api/src/lib/-api-authentication--api.module';
import { ApiImageApiModule } from '../../../../libs/api/image/api/src/lib/api-image-api.module';
import { ApiScaleApiModule } from '../../../../libs/api/scale/api/src/lib/api-scale-api.module'
import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';
import {ApiNotificationsApiModule} from '../../../../libs/api/notifications/api/src/lib/api-notifications-api.module';
import { ConfigModule } from '@nestjs/config';
import { ApiTrendApiModule } from '../../../../libs/api/trend/api/src/lib/api-trend-api.module';
import { ApiCalculateFreshnessApiModule } from '../../../../libs/api/calculate-freshness/api/src/lib/api-calculate-freshness-api.module';
import { tasksModule } from '../../../../libs/api/tasks/api/src/lib/tasks.module';

@Module({
  imports: [tasksModule,ApiAuthenticationApiModule, ApiImageApiModule, ApiScaleApiModule,ApiNotificationsApiModule,ApiTrendApiModule,ApiCalculateFreshnessApiModule ],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule { }
