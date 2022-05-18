import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import {AuthenicationRepository} from './authentication.repository';


class user{
    id: number;
  email: string;
  password: string;
  passwordSalt: string;
  createdAt: Date;
  updatedAt: Date;
}
const MockApiImpl : jest.Mocked<user> = new user() as user;
describe('ApiAuthorizationRepositoryTest', () => {
    let data: AuthenicationRepository; //= new AuthenicationRepository(new PrismaService());
    //const prisma = new PrismaService();
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
          controllers: [],
          providers: [AuthenicationRepository,PrismaService],
        }).compile();
  
        data = moduleRef.get<AuthenicationRepository>(AuthenicationRepository);
      
    });
    it('should get user', async () => {
      jest
        .spyOn(data, 'getUser')
        .mockImplementation(
          (): Promise<user | null> => Promise.resolve(MockApiImpl)
        );
  
      expect(
        await data.getUser('qwerty@gmail.com')
      ).toBe(MockApiImpl);
    });
    it('should not get user', async () => {
        jest
          .spyOn(data, 'getUser')
          .mockImplementation(
            (): Promise<user | null> => Promise.resolve(null)
          );
    
        expect(
          await data.getUser('qwert@gmail.com')
        ).toBe(null);
      });
      it('should create user', async () => {
        jest
          .spyOn(data, 'createUser')
          .mockImplementation(
            (): Promise<user | null> => Promise.resolve(MockApiImpl)
          );
    
        expect(
          await data.createUser('qwert@gmail.com','bla,bla,bla','22')
        ).toBe(MockApiImpl);
      });
      it('should edit user', async () => {
        jest
          .spyOn(data, 'editUser')
          .mockImplementation(
            (): Promise<user | null> => Promise.resolve(MockApiImpl)
          );
    
        expect(
          await data.editUser(1,{password:'blblblblbblbbblblb'})
        ).toBe(MockApiImpl);
      });
});