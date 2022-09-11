import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ImagesRepository } from '../../../repository/src/lib/images.repository';
import { ImagesService } from '../../../service/src/lib/images.service';
import { ImagesController } from './images.controller';


const mockString: jest.Mocked<string> = new String() as string;
describe('ImagesController', () => {
  let controller: ImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesController],
      providers:[ImagesService,ImagesRepository,PrismaService],
    }).compile();

    controller = module.get<ImagesController>(ImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should delete file', () => {
    jest
      .spyOn(controller, 'deletePicture')
      .mockImplementation(
        (): Promise<null> => Promise.resolve(null)
      );
    //const req = MockRequest.;
    expect(controller.deletePicture('//files/banana.png')).toBe(null);
  });

  it('should delete file', () => {
    jest
      .spyOn(controller, 'deletePicture')
      .mockImplementation(
        (): Promise<void> => Promise.resolve(null)
      );
    //const req = MockRequest.;
    expect(controller.deletePicture('//files/doesnotExist.png')).toThrowError();
  });
});

