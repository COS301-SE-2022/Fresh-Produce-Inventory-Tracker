import { Test } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ImagesRepository } from './images.repository';


class image{
  id: number;
  userId:number;
  imageUrl:string;
  createdAt: Date;
  updatedAt: Date;

}
const MockApiImpl : jest.Mocked<image> = new image() as image;
describe('ApiAuthorizationRepositoryTest', () => {
    let data: ImagesRepository; //= new AuthenicationRepository(new PrismaService());
    //const prisma = new PrismaService();
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
          controllers: [],
          providers: [ImagesRepository,PrismaService],
        }).compile();
  
        data = moduleRef.get<ImagesRepository>(ImagesRepository);
      
    });
    it('should store image location', async () => {
      jest
        .spyOn(data, 'createImage')
        .mockImplementation(
          (): Promise<image | null> => Promise.resolve(MockApiImpl)
        );
  
      expect(
        await data.createImage(1,'awfdhowuiefhaw9pufh.png')
      ).toBe(MockApiImpl);
    });
});