import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import {NotificationService  } from '../../../service/src/lib/notification.service';
//import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';
import { NotificationController } from './notifications.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { NotificationRepository } from '../../../repository/src/lib/notifcation.repository';
import { MailerModule } from '@nestjs-modules/mailer';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
const config = new ConfigService({});
class Otp{
  otp: string; 
  expireDate:Date;
}
class Notification{
  id: number;
  userId:number;
  Type:string;
  message:string;
  taskType:string;
  produceType:string;
  
}
class batch{
  count:number
  
}

const MockApiImpl : jest.Mocked<Notification> = new Notification() as Notification;
const MockCount : jest.Mocked<batch> = new batch() as batch;

const mockOtp : jest.Mocked<Otp> = new Otp() as Otp;
//const errorPassmock : jest.Mocked<passincorrect> = new passincorrect() as passincorrect;

describe('Service test', () => {
    let data: NotificationController;
    //const prisma = new PrismaService();
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports :[MailerModule.forRoot({
          transport:{
            host:'smtp.sendgrid.net',
            auth:{
              user:'apikey',
              pass:config.get('EMAIl_PASS') 
            }
          }
        })],
        providers: [NotificationService,NotificationRepository,PrismaService],
        controllers: [NotificationController],
      }).compile();
      data = module.get<NotificationController>(NotificationController);
    });
    it('should send reset password OTP', async () => {
      jest
        .spyOn(data, 'plainTextEmail')
        .mockImplementation(
          () => Promise.resolve(mockOtp)
        );
  
      expect(
        await data.plainTextEmail('qwerty@gmail.com')
      ).toBe(mockOtp);
    });
    it('should not send reset password OTP no email', async () => {
        jest
          .spyOn(data, 'plainTextEmail')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.plainTextEmail('qwerty@gmail.com')
        ).toBe(null);
      });
      it('should create urgent notification', async () => {
        jest
          .spyOn(data, 'createTask')
          .mockImplementation(
            () => Promise.resolve(MockApiImpl)
          );
    
        expect(
          await data.createTask(1,'urgent')
        ).toBe(MockApiImpl);
      });
      it('should not create urgent notification', async () => {
        jest
          .spyOn(data, 'createTask')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.createTask(123525,'urgent')
        ).toBe(null);
      });
      it('should not create notification', async () => {
        jest
          .spyOn(data, 'createTasks')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.createTasks(13245253,'message')
        ).toBe(null);
      });
      it('should create notification', async () => {
        jest
          .spyOn(data, 'createTasks')
          .mockImplementation(
            () => Promise.resolve(MockApiImpl)
          );
    
        expect(
          await data.createTasks(1,'message')
        ).toBe(MockApiImpl);
      });
      it('should delete notification', async () => {
        jest
          .spyOn(data, 'deleteTasks')
          .mockImplementation(
            () => Promise.resolve(MockCount)
          );
    
        expect(
          await data.deleteTasks(1)
        ).toBe(MockCount);
      });
      it('should not delete notification', async () => {
        jest
          .spyOn(data, 'deleteTasks')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.deleteTasks(164346363)
        ).toBe(null);
      });
      it('should get all notification', async () => {
        jest
          .spyOn(data, 'getNotifications')
          .mockImplementation(
            () => Promise.resolve([MockApiImpl])
          );
    
        expect(
          await data.getNotifications(164346363)
        ).toStrictEqual([MockApiImpl]);
      });
      it('should not get all notification', async () => {
        jest
          .spyOn(data, 'getNotifications')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.getNotifications(164346363)
        ).toBe(null);
      });

    

    
    
});