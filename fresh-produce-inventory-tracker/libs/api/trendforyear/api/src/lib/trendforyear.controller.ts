import { Body, Controller, Post } from '@nestjs/common';
import { TrendForYearService } from '../../../service/src/lib/trendforyear.service';
@Controller('trendforyear')
export class TrendForYearcontroller {
  constructor(private service: TrendForYearService) {}
  @Post('gettrendsforitemandmonth')
  //month from 1-12
  async getTrendsForItemAndMonth(@Body('id') id: number,@Body('producetype') producetype:string,@Body('month') month:number) {
      return await this.service.getTrendsForItemAndMonth(+id,producetype,+month);
  }

    @Post('gettrendsforitem')
    async getTrendsForItem(@Body('id') id: number,@Body('producetype') producetype:string) {
        return await this.service.getTrendsForItem(+id,producetype);
    }
    @Post('updateyeartrend')
    async updateyeartrend(@Body('userid') userid: number,@Body('scaleid') scaleid:number) {
        return await this.service.updateYearTrend(+userid,+scaleid);
    }
    @Post('getall')
    async getAll(@Body('userid') userid: number ) {
        return await this.service.getAll(+userid);
    }
    @Post('getmonthaverages')
    async getMonthAverages(@Body('userid') userid: number, @Body('producetype') producetype: string) {
        return await this.service.getMonthAverages(+userid,producetype);
    }
    
}