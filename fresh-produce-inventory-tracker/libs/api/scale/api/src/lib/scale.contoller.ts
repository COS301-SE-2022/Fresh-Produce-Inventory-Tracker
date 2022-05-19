//get & post requests

import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ScaleService } from '../../../service/src/lib/scale.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport/dist';
import {Request} from 'express';

@Controller('scale')
export class ScaleController {
  constructor(private ScaleService: ScaleService) { }

  @Post('getscale')
  async getscale(//id: number,userid: number
    @Body('id') id: number,
    @Body('userid') userid: number,
  ) {
    //console.log(email, password);
    return await this.ScaleService.getScale(id, userid);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('setscale')//userId:number,weightfull:number,weightone:number,producetype:Prisma.EnumProduceTypeFilter
  async setscale(@Req() req:Request, @Body('weightfull') weightfull: number, @Body('weightone') weightone: number, @Body('producetype') producetype: Prisma.EnumProduceTypeFilter) {
    const userId = req.user;
    console.log(userId);
    /*return this.ScaleService.createScale({
      userId: userId,
      weightfull: weightfull,
      producetype: producetype,
      weightone: weightone

    });*/
  }
  @Post('deletescale')//id: number, userid:number
  async deletescale(@Body('id') id: number, @Body('userid') userid: number) {
    return this.ScaleService.removeScale(
      userid,
      id,
    );
  }
  @Post('editscale')//id: number, userid:number, data:any
  async editscale(@Body('id') id: number, @Body('userid') userid: number, @Body('data') data) {
    return this.ScaleService.editScale(
      userid,
      id,
      data
    );
  }
}
