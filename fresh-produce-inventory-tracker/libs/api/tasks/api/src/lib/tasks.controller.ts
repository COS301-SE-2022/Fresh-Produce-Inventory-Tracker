import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { taskService } from '../../../service/src/lib/taskService.service';
@Controller('tasks')
export class tasksController {
  constructor(private taskService: taskService) {}

  @Post('gettasks')
  async getTasks(@Body('id') id: number) {
    try {
      return await this.taskService.getTasks(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post('createtask')
  createTasks(@Body('id') id: number, @Body('message') message: string,@Body('taskType') taskType:string,@Body('produceType') produceType:string) {
    try {
      return this.taskService.createTask(+id, message,taskType,produceType);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post('deletetask')
  deleteTasks(@Body('id') id: number, @Body('message') message: string) {
    try {
      return this.taskService.deleteTasks(+id, message);
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
