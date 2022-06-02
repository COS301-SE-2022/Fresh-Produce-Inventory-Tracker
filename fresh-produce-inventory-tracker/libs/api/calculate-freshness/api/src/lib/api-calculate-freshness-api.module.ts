import { Module } from '@nestjs/common';
import { calculatefreshnessController } from './calculatefreshness.controller';
import {calculatefreshnessService} from '../../../service/src/lib/calculatefreshness.service';

@Module({
  controllers: [calculatefreshnessController],
  providers: [calculatefreshnessService],
  exports: [],
})
export class ApiCalculateFreshnessApiModule {}
