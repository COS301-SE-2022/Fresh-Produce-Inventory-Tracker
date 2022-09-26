//call database for scale to store scale data

import { ForbiddenException, Injectable } from '@nestjs/common';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';

import { Prisma } from '@prisma/client';
import { taskService } from '../../../../tasks/service/src/lib/taskService.service';
import { NotificationService } from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class ScaleService {
  //id: number, userid: number
  constructor(
    private repo: ScaleRepository,
    private taskService: taskService,
    private NotificationService:NotificationService
  ) { }
  async getScale(id: number, userid: number) {
    return await this.repo.getScale(id, userid);
  }
  async createScale(data: {
    userId: any;
    weightfull: number;
    weightone: number;
    producetype: string;
    description:string;
    name:string;
  }) {
    console.log(data);
    const scale = await this.repo.createScale(
      Math.trunc(data.userId),
      Math.trunc(data.weightfull),
      Math.trunc(data.weightone),
      data.producetype,
      data.name,
      data.description
    );
    return scale;
  }
  async editScale(id: number, userid: number, weight: number) {
    const answer = await this.repo.updateScale(id, userid, weight);
    const get = await this.repo.getScale(id, userid);
    if (weight < get.WeightIndividual * 5) {
      const message =
        'The supply of ' +
        get.Name +
        ' produce is getting low. Please restock.';
      if (!(await this.taskService.getTasksMessage(userid, message))) {
        if ((await this.taskService.getTasksMessage(userid, message)).message !=
          message
        ) {
          await this.NotificationService.sendEmail(userid,'Low Stock',message);
          await this.taskService.createTask(userid, message,'low',get.Name);
        }
      }


    }
    return answer;
  }
  async removeScale(id: number, userId: number) {
    return await this.repo.removeScale(id, userId);
  }
  async getAllProduce(id:number) {
    const allScales = await this.repo.getAllProduce(id);
    const produceList =[];
    for(let i = 0; i < allScales.length; i++)
    {
      produceList.push(allScales[i].ProduceType)
    }
    return produceList;
  }
  async produceList(id:number)
  {
    const allScales = await this.repo.getAllProduce(id);
    const trenddata = await this.repo.trenddata(id);
    const produceList =[];
    for(let i = 0; i < allScales.length; i++)
    {
      let ProduceStatus = 'good';
      const counter =i;
      //console.log("here");
      
      ProduceStatus = await this.checkFreshness(id,trenddata[counter])
      const retVal = {
        id:allScales[i].id,
        name: allScales[i].Name,
        ProduceType:allScales[i].ProduceType,
        individualWeight: allScales[i].WeightIndividual,
        fullWeight: allScales[i].WeightTotal,
        expireDate: trenddata[counter].SaleDate,
        lastRestock:trenddata[counter].LastRestock,
        produceStatus: ProduceStatus
      }
      produceList.push(retVal)
    }
    return produceList;
  }
  async checkFreshness(id:number,trenddata)
  {
    let ProduceStatus = 'good';
    const today =new Date();
    if(trenddata.LastRestock== null)
    {
      return 'good'
    }
      if(today.getDate() < trenddata.SaleDate.getDate())
      {
        ProduceStatus = 'good';
      }
      else
      {
        if(today.getDate() == trenddata.SaleDate.getDate())
        {
          ProduceStatus = 'about to expire';
        }
        else
        {
          if(today.getDate() > trenddata.SaleDate.getDate())
        {
          
          ProduceStatus = 'expired';
        }
        }
        
      }
      const taskExpired = await this.taskService.getTasks(id);
      let expiretask = false;
      for(let i = 0; i<taskExpired.length;i++)
      {
          if(taskExpired[i].produceType == trenddata.ProduceType )
          {
            if(taskExpired[i].taskType == 'expire')
            {
              expiretask = true;
            }
          }
      }
      if(expiretask == true)
      {
        ProduceStatus = 'expired';
      }
      
      return ProduceStatus;
  }
}