import { Injectable } from '@nestjs/common';

import { tasksRepository } from '../../../repository/src/lib/api-tasks-repository.repository';

//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class taskService {
  
  constructor(private repo: tasksRepository) {}
  async getTasks(id:number) {

    return await this.repo.getTasks(id);
  }
  async createTask(id:number,message:string,taskType:string,produceType:string) {

    return await this.repo.createTask(id,message,taskType,produceType);
  }
  async deleteTasks(id:number,message:string) {

    return await this.repo.deleteTask(id,message);
  }
  async getTasksMessage(id:number,message:string)
  {

    return await this.repo.getTasksMessage(id,message);
  }

}