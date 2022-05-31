import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import {NotificaytionService  } from '../../../service/src/lib/notification.service';
//import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';
import { NotificationController } from './notifications.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ForbiddenException, NotFoundException } from '@nestjs/common';



class Otp{
  otp: string; 
  expireDate:Date;
}


const mockOtp : jest.Mocked<Otp> = new Otp() as Otp;
//const errorPassmock : jest.Mocked<passincorrect> = new passincorrect() as passincorrect;

describe('Service test', () => {
    let data: NotificationController;
    //const prisma = new PrismaService();
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports :[],
        providers: [NotificaytionService],
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
        ).toBe(mockOtp);
      });
    it('should not get user wrong password', async () => {
      jest
        .spyOn(data, 'signin')
        .mockImplementation(
          () => Promise.resolve(null)
        );
        try {
          await data.signin({email:'qwerty@gmail.com',password:'1234'});
        } catch (error) {
          expect(error).toBeInstanceOf(ForbiddenException);
        }
    });

    
    
});