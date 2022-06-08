import { Module } from '@nestjs/common';
import { calculatefreshnessController } from './calculatefreshness.controller';
import {calculatefreshnessService} from '../../../service/src/lib/calculatefreshness.service';
import {tasksModule} from '../../../../tasks/api/src/lib/tasks.module';

@Module({
  controllers: [calculatefreshnessController],
  providers: [calculatefreshnessService],
  exports: [],
  imports: [tasksModule]
})
export class ApiCalculateFreshnessApiModule {}
