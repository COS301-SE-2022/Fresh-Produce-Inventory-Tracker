import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post, Query } from '@nestjs/common';
//import { AuthenticationService } from '../../../service/src/lib/authentication.service';
import {NotificationService} from '../../../service/src/lib/notification.service';
@Controller('notification')
export class NotificationController {
  constructor(private service:NotificationService) {}

  @Post('send')
  async plainTextEmail(
    @Body('receiver') receiver
  ) {
    return await this.service.sendOTP(receiver);
  }  
  @Post('getnotifications')
  async getNotifications(
    @Body('id') id: number) {
    return await this.service.getNotifications(+id)
  }
  @Post('createnotification')
  createTasks(@Body('id') id: number, @Body('message') message: string) {
    return this.service.createNotification(id,message);
  }
  @Post('createnotificationurgent')
  createTask(@Body('id') id: number, @Body('message') message: string) {
    return this.service.createNotificationUrgent(id,message);
  }
  @Post('deletenotification')
  deleteTasks(@Body('userid') userid: number) {
    return this.service.deleteNotification(userid);
  }
}