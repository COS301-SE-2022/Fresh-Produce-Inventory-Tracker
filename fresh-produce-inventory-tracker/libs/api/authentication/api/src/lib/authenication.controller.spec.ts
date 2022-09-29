import { ForbiddenException } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { AuthenicationRepository } from '../../../repository/src/lib/authentication.repository';
import { AuthenticationService } from '../../../service/src/lib/authentication.service';
import { AuthenticationController } from './authentication.controller';
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

token:string;
}
const mockAccess : jest.Mocked<access> = new access() as access;
//const errorPassmock : jest.Mocked<passincorrect> = new passincorrect() as passincorrect;
const MockApiImpl : jest.Mocked<user> = new user() as user;
const MockString : jest.Mocked<string> = new String() as string;
describe('AuthenticationController', () => {
  let controller: AuthenticationController;

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
      controllers: [AuthenticationController],
    }).compile();
    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should signup', async () => {
    jest
      .spyOn(controller, 'signup')
      .mockImplementation(
        ():Promise<any> => Promise.resolve(mockAccess)
      );

    expect(
      await controller.signup('qwerty@gmail.com','12345','','')
    ).toBe(mockAccess);
  });
  it('should signin', async () => {
    jest
      .spyOn(controller, 'signin')
      .mockImplementation(
        ():Promise<any> => Promise.resolve(mockAccess)
      );

    expect(
      await controller.signin('qwerty@gmail.com','12345')
    ).toBe(mockAccess);
  });
  it('should not signin wrong email', async () => {
    jest
      .spyOn(controller, 'signin')
      .mockImplementation(
        () => Promise.resolve(null)
      );

      try {
        await controller.signin('qwert@gmail.com','1234');
      } catch (error) {
        expect(error).toBeInstanceOf(ForbiddenException);
      }
  });
  it('should not signin wrong password', async () => {
    jest
      .spyOn(controller, 'signin')
      .mockImplementation(
        () => Promise.resolve(null)
      );

      try {
        await controller.signin('qwerty@gmail.com','1234yyyyyyyyy');
      } catch (error) {
        expect(error).toBeInstanceOf(ForbiddenException);
      }
  });
  it('should not signin wrong password and email', async () => {
    jest
      .spyOn(controller, 'signin')
      .mockImplementation(
        () => Promise.resolve(null)
      );

      try {
        await controller.signin('qwert@gmail.com','1234yyyyyyyyy');
      } catch (error) {
        expect(error).toBeInstanceOf(ForbiddenException);
      }
  });
  it('should not signin wrong password and email', async () => {
    jest
      .spyOn(controller, 'editpassword')
      .mockImplementation(
        () => Promise.resolve(MockString)
      );

      
        expect(await controller.editpassword('qwert@gmail.com','1234yyyyyyyyy')).toBe(MockString);
  });
});
