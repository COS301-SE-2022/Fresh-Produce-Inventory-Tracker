import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class NotificaytionService {
  
  constructor(private mail:MailerService) {}
  async sendOTP(receiver) {
    const num = Math.floor(Math.random()*90000) + 10000;
    const numstr = num.toString();
    const message = 'This is your password reset OTP: '+numstr; 
    await this.mail.sendMail({
        to: receiver,
        from: 'dacers467@gmail.com',
        subject: 'Reset password',
        text: message
    })
    const minutesToAdd=15;
    const currentDate = new Date();
    const expireDate = new Date(currentDate.getTime() + minutesToAdd*60000);
    return {otp:numstr, expireDate: expireDate};
  }
  async sendNotification(receiver,Subject:string,message:string) {
    await this.mail.sendMail({
        to: receiver,
        from: 'dacers467@gmail.com',
        subject: Subject,
        text: message
    })
    return 'sent';
  }
  
}