import { Body, Controller, Post } from '@nestjs/common';
import { taskService } from '../../../service/src/lib/taskService.service';
@Controller('tasks')
export class tasksController {
  constructor(private taskService: taskService) {}

  @Post('gettasks')
  async getTasks(
    @Body('id') id: number,
    
  ) {
    return await this.taskService.getTasks(+id);
  }
  @Post('createtask')
  createTasks(@Body('id') id: number, @Body('message') message: string) {
    return this.taskService.createTask(id,message);
  }
  @Post('deletetask')
  deleteTasks(@Body('id') id: number, @Body('message') message: string) {
    return this.taskService.deleteTasks(id,message);
  }
 

}