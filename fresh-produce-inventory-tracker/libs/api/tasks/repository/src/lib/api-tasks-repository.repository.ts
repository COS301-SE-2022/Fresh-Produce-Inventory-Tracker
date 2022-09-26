import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';

@Injectable()
export class tasksRepository {
  constructor(private prisma: PrismaService) {}
  async getTasks(id: number) {
    return await this.prisma.notification.findMany({
      where: { userId: +id, Type: 'Task' },
    });
  }
  async getTasksMessage(id: number, message: string) {
    
    return await this.prisma.notification.findFirst({
      where: { userId: +id, Type: 'Task', message: message },
    });
  }
  async createTask(id: number, message: string,tasktype:string,produceType:string) {
    if((await this.prisma.user.findUnique({where:{id:id}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    if (
      !(await this.prisma.notification.findFirst({
        where: { userId: +id, message: message },
      }))
    ) {
      return await this.prisma.notification.create({
        data: { userId: +id, Type: 'Task', message: message,taskType: tasktype,produceType:produceType },
      });
    } else return null;
  }
  async deleteTask(id: number, message: string) {
    if((await this.prisma.user.findUnique({where:{id:id}})== null))
    {
      throw new NotFoundException('No such id exists');
    }
    return await this.prisma.notification.deleteMany({
      where: { userId: +id, Type: 'Task', message: message },
    });
  }
}
