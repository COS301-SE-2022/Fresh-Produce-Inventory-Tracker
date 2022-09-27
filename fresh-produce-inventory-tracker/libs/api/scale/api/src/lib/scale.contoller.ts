//get & post requests

import { Body, ConsoleLogger, Controller, Post, Req, UseGuards } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ScaleService } from '../../../service/src/lib/scale.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport/dist';
import {Request} from 'express';


@Controller('scale')
export class ScaleController {
  constructor(private ScaleService: ScaleService) { }
  //@UseGuards(AuthGuard('jwt'))
  @Post('getscale')
  async getscale(//id: number,userid: number
    @Body('id') id: number,
    @Body('userid') userid: number,
  ) {
    //console.log(email, password);
    return await this.ScaleService.getScale(id, userid);
  }
  //@UseGuards(AuthGuard('jwt'))
  @Post('setscale')//userId:number,weightfull:number,weightone:number,producetype:Prisma.EnumProduceTypeFilter
  async setscale(@Body('userId') id:number, @Body('weightfull') weightfull: string, @Body('weightone') weightone: string, @Body('producetype') producetype: string,@Body('description') desc:string,@Body('name') name:string) {
    //@Req() req:Request
    //const userId = req.user;
    //console.log(id);
    return this.ScaleService.createScale({
      userId: +id,
      weightfull: +weightfull,
      producetype: producetype,
      weightone: +weightone,
      name: name,
      description:desc


    });
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('deletescale')//id: number, userid:number
  async deletescale(@Body('id') id: number, @Body('userid') userid: number) {
    return this.ScaleService.removeScale(
      userid,
      id,
    );
  }
  /*
    INPUT:
    OUTPUT:
    DISCRIPTION:
  */
  //@UseGuards(AuthGuard('jwt'))
  @Post('editscale')//id: number, userid:number, data:any
  async editscale(@Body('id') id: number, @Body('userid') userid: number, @Body('weight') weight:number) {
    return await this.ScaleService.editScale(
      +id,
      +userid,
      +weight
    );
    
  }
  @Post('getallproduce')
    async getAllProduce(@Body('id') id: number)
    {
      return await this.ScaleService.getAllProduce(+id);
    }
    @Post('producelist')
    async produceList(@Body('id') id: number)
    {
      return await this.ScaleService.produceList(+id);
    }
}


