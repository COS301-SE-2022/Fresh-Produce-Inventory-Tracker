import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { taskService } from '../../../service/src/lib/taskService.service';
import {NotificationService} from '../../../../notifications/service/src/lib/notification.service';
@Controller('tasks')
export class tasksController {
  constructor(private taskService: taskService,private NotificationService:NotificationService) {}

  @Post('gettasks')
  async getTasks(@Body('id') id: number) {
    try {
      return await this.taskService.getTasks(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post('createtask')
  async createTasks(@Body('id') id: number, @Body('message') message: string,@Body('taskType') taskType:string,@Body('produceType') produceType:string) {
    try {
      return await this.taskService.createTask(+id, message,taskType,produceType);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post('deletetask')
  async deleteTasks(@Body('id') id: number, @Body('message') message: string) {
    try {
      await this.NotificationService.deleteNotificationMessage(id,message);
      return await this.taskService.deleteTasks(+id, message);
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
