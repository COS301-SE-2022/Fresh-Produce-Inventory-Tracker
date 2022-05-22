import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post, Query } from '@nestjs/common';
//import { AuthenticationService } from '../../../service/src/lib/authentication.service';
import {NotificaytionService} from '../../../service/src/lib/notification.service';
@Controller('notification')
export class NotificationController {
  constructor(private service:NotificaytionService) {}

  @Post('send')
  async plainTextEmail(
    @Body('receiver') receiver
  ) {
    return await this.service.sendOTP(receiver);
  }
  
  
}