import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class tasksRepository {
  constructor(private prisma: PrismaService) {}
  async getTasks(id:number) {
    return await this.prisma.notification.findMany({ where: { userId:id, Type:'Task' } });
  }
  async createTask(id:number,message:string) {
    return await this.prisma.notification.create({
      data: {userId:id, Type: 'Task', message :message }
    });
  }
  async deleteTask(id: number, message:string) {
    return await this.prisma.notification.deleteMany({ where: { userId:id, Type:'Task',message:message }});
  }
}