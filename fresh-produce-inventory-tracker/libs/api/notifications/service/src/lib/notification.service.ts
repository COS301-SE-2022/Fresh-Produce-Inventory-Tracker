import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import {NotificationRepository} from '../../../repository/src/lib/notifcation.repository';

@Injectable({})
export class NotificationService {
  
  constructor(private mail:MailerService, private repo:NotificationRepository) {}
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
  async getNotifications(id: number) {
    return await this.repo.getNotifications(id);
}
async getNotificationMessage(id: number, message: string) {
  return await this.repo.getNotificationMessage(id,message);
}
async createNotification(userid: number, message: string) {
  return await this.repo.createNotification(userid,message);
}
async deleteNotification(id: number, userId: number) {
  return await this.repo.deleteNotification(id,userId);
}
}

