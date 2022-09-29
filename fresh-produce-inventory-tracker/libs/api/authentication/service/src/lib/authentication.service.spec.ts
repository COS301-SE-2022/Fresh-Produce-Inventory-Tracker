import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
//import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';
import { AuthenticationService } from './authentication.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ForbiddenException, NotFoundException } from '@nestjs/common';


class user{
  id: number;
email: string;
password: string;
passwordSalt: string;
createdAt: Date;
updatedAt: Date;
Name:string;
Surname:string; 
Bio:string;
Visibility:boolean;
}
class access{
  id: number; 
  token:string;
}


const mockAccess : jest.Mocked<access> = new access() as access;
//const errorPassmock : jest.Mocked<passincorrect> = new passincorrect() as passincorrect;
const MockApiImpl : jest.Mocked<user> = new user() as user;
const MockString : jest.Mocked<string> = new String() as string;
describe('Service test', () => {
    let data: AuthenticationService;
    //const prisma = new PrismaService();
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports :[JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
              secret: configService.get('JWT_SECRET'),
              signOptions: { expiresIn: '15m' }
          })})],
        providers: [AuthenticationService,AuthenicationRepository,PrismaService,ConfigService],
        controllers: [],
      }).compile();
      data = module.get<AuthenticationService>(AuthenticationService);
    });
    it('should get user', async () => {
      jest
        .spyOn(data, 'signin')
        .mockImplementation(
          () => Promise.resolve(mockAccess)
        );
  
      expect(
        await data.signin({email:'qwerty@gmail.com',password:'12345'})
      ).toBe(mockAccess);
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
    it('should not get user wrong email', async () => {
      jest
        .spyOn(data, 'signin')
        .mockImplementation(
          () => Promise.resolve(null)
        );
        try {
          await data.signin({email:'qwert@gmail.com',password:'12345'});
        } catch (error) {
          expect(error).toBeInstanceOf(ForbiddenException);
        }
    });
    it('should not get user wrong email and password', async () => {
      jest
        .spyOn(data, 'signin')
        .mockImplementation(
          () => Promise.resolve(null)
        );
        try {
          await data.signin({email:'qwert@gmail.com',password:'1234'});
        } catch (error) {
          expect(error).toBeInstanceOf(ForbiddenException);
        }
    });
    it('should create user', async () => {
      jest
        .spyOn(data, 'signup')
        .mockImplementation(
          () => Promise.resolve(mockAccess)
        );
          expect(await data.signup('qwert@gmail.com','1234','','')).toBe(mockAccess);
    });
    
    it('should create token', async () => {
      jest
        .spyOn(data, 'setToken')
        .mockImplementation(
          () => Promise.resolve(MockString)
        );
          expect(await data.setToken(1,'qwert@gmail.com','','')).toBe(MockString);
    });
    it('should get user', async () => {
      jest
        .spyOn(data, 'getUser')
        .mockImplementation(
          () => Promise.resolve(MockApiImpl)
        );
          expect(await data.getUser('qwert@gmail.com')).toBe(MockApiImpl);
    });
    it('should not get user', async () => {
      jest
        .spyOn(data, 'getUser')
        .mockImplementation(
          () => Promise.resolve(null)
        );
        try {
          await data.getUser('qwerty@gmail.com');
        } catch (error) {
          expect(error).toBeInstanceOf(ForbiddenException);
        }
    });
        it('should change password', async () => {
          jest
            .spyOn(data, 'editPassword')
            .mockImplementation(
              () => Promise.resolve(MockString)
            );
            expect(await data.editPassword('qwert@gmail.com','kingsly')).toBe(MockString);
    });
    
    
});
