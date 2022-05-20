import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ImagesRepository } from '../../../repository/src/lib/images.repository';
import { ImagesService } from '../../../service/src/lib/images.service';
import { ImagesController } from './images.controller';



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
});
