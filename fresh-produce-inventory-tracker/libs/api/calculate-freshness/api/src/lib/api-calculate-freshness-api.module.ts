import { Module } from '@nestjs/common';
import { calculatefreshnessController } from './calculatefreshness.controller';
import {calculatefreshnessService} from '../../../service/src/lib/calculatefreshness.service';
import {tasksModule} from '../../../../tasks/api/src/lib/tasks.module';
import {ApiNotificationsApiModule} from '../../../../notifications/api/src/lib/api-notifications-api.module';

@Module({
  controllers: [calculatefreshnessController],
  providers: [calculatefreshnessService],
  exports: [],
  imports: [tasksModule,ApiNotificationsApiModule]
})
export class ApiCalculateFreshnessApiModule {}
