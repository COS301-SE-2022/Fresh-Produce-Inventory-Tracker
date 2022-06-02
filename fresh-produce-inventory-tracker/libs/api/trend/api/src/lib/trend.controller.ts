import { Body, Controller, Post } from '@nestjs/common';
import { TrendService } from '../../../service/src/lib/trend.service';
@Controller('trend')
export class Trendcontroller {
  constructor(private service: TrendService) {}

  @Post('gettrendsalltrendsforday')
  async getTrendsAllTrendsForDay(@Body('id') id: number,@Body('weekday') weekday:string) {
    return await this.service.getTrendsAllTrendsForDay(id,weekday);
  }
  @Post('gettrendsfordayanditem')
    async getTrendsForDayAndItem(@Body('id') id: number,@Body('producetype') producetype:string,@Body('weekday') weekday:string) {
        return await this.service.getTrendsForDayAndItem(id,producetype,weekday);
    }
    @Post('gettrendsforitem')
    async getTrendsForItem(@Body('id') id: number,@Body('producetype') producetype:string) {
        return await this.service.getTrendsForItem(id,producetype);
    }
    @Post('updateTrend')
    async updateTrend(@Body('userid') userid: number,@Body('scaleid') scaleid:number) {
        return await this.service.updateTrend(userid,scaleid);
    }
    
}