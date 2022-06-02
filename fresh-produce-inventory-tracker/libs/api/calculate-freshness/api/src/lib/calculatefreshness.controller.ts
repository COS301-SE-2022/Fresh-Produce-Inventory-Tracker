import { Body, Controller, Post, UploadedFile } from '@nestjs/common';
import { calculatefreshnessService } from '../../../service/src/lib/calculatefreshness.service';
@Controller('calcfreshness')
export class calculatefreshnessController {
  constructor(private service: calculatefreshnessService) {}

  @Post('predict')
  async predict(@UploadedFile() file) {
      
    return await this.service.predict(file);
  }
}
