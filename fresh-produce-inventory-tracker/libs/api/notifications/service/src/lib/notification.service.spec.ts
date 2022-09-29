import { MailerModule } from '@nestjs-modules/mailer';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import {NotificationRepository} from '../../../repository/src/lib/notifcation.repository';
import {NotificationService} from './notification.service';
import { ConfigModule,ConfigService } from '@nestjs/config';
const config = new ConfigService({});
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
describe('ApiAuthorizationRepositoryTest', () => {
    let data: NotificationService; //= new AuthenicationRepository(new PrismaService());
    //const prisma = new PrismaService();
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        imports :[MailerModule.forRoot({
            transport:{
              host:'smtp.sendgrid.net',
              auth:{
                user:'apikey',
                pass:config.get('EMAIl_PASS') 
              }
            }
          })],
          controllers: [],
          providers: [NotificationService,NotificationRepository,PrismaService],
        }).compile();
  
        data = moduleRef.get<NotificationService>(NotificationService);
      
    });
    it('should create notification', async () => {
      jest
        .spyOn(data, 'createNotification')
        .mockImplementation(
          () => Promise.resolve(MockApiImpl)
        );
  
      expect(
        await data.createNotification(1,'message')
      ).toBe(MockApiImpl);
    });
    it('should not create notification', async () => {
        jest
          .spyOn(data, 'createNotification')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.createNotification(123456768,'message')
        ).toBe(null);
      });
      it('should not create urgent notification', async () => {
        jest
          .spyOn(data, 'createNotificationUrgent')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.createNotificationUrgent(123456768,'message')
        ).toBe(null);
      });
      it('should create urgent notification', async () => {
        jest
          .spyOn(data, 'createNotificationUrgent')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.createNotificationUrgent(123456768,'message')
        ).toBe(null);
      });
      it('do not delete Notification', async () => {
        jest
          .spyOn(data, 'deleteNotification')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.deleteNotification(123456768)
        ).toBe(null);
      });
      it('do  delete Notification', async () => {
        jest
          .spyOn(data, 'deleteNotification')
          .mockImplementation(
            () => Promise.resolve(MockCount)
          );
    
        expect(
          await data.deleteNotification(123456768)
        ).toBe(MockCount);
      });
      it('get notification message exists', async () => {
        jest
          .spyOn(data, 'getNotificationMessage')
          .mockImplementation(
            () => Promise.resolve(MockApiImpl)
          );
    
        expect(
          await data.getNotificationMessage(1,'message')
        ).toBe(MockApiImpl);
      });
      it('should not get notification message not exists', async () => {
        jest
          .spyOn(data, 'getNotificationMessage')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.getNotificationMessage(1,'message 1111111')
        ).toBe(null);
      });
      it('should not get notification user doesnt exist', async () => {
        jest
          .spyOn(data, 'getNotificationMessage')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.getNotificationMessage(1122323542,'message')
        ).toBe(null);
      });
      it('should not get notification user doesnt exist and message doesnt exist', async () => {
        jest
          .spyOn(data, 'getNotificationMessage')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.getNotificationMessage(1122323542,'message 11111111')
        ).toBe(null);
      });
      it('should get notification user exist', async () => {
        jest
          .spyOn(data, 'getNotifications')
          .mockImplementation(
            () => Promise.resolve([MockApiImpl])
          );
    
        expect(
          await data.getNotifications(1)
        ).toStrictEqual([MockApiImpl]);
      });
      it('should not get notification user doesnt exist', async () => {
        jest
          .spyOn(data, 'getNotifications')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await data.getNotifications(1)
        ).toBe(null);
      });
});