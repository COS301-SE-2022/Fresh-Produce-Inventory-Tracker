//call database for scale to store scale data


import { ForbiddenException, Injectable } from '@nestjs/common';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';

import { Prisma } from '@prisma/client';
import {taskService} from '../../../../tasks/service/src/lib/taskService.service'

@Injectable({})
export class ScaleService { //id: number, userid: number
    constructor(private repo: ScaleRepository,private taskService:taskService) { }
    async getScale(id: number, userid: number) {
        return await this.repo.getScale(id, userid);
    }
    async createScale(data: { userId: any, weightfull: number, weightone: number, producetype: string }) {
        const scale = await this.repo.createScale(data.userId, data.weightfull, data.weightone, data.producetype);
        return scale;
    }
    async editScale(id: number, userid: number, weight: number) {
        const answer = await this.repo.updateScale(id, userid, weight);
        const get = await this.repo.getScale(id,userid);
        if(weight < (get.WeightIndividual*5))
        {
            
            const message = 'The supply of '+ get.ProduceType + ' produce is getting low. Please restock.';
            if((await this.taskService.getTasksMessage(userid,message)).message != message)
            {
                await this.taskService.createTask(userid,message);
            }

        }
        return answer;

    }
    async removeScale(id: number, userId: number) {
        return await this.repo.removeScale(id, userId);
    }
} 