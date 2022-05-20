import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';
import {ScaleService} from '../../../service/src/lib/scale.service';
import {ScaleController} from './scale.contoller';
import {Request} from 'express';
class scale{
  id:number;
  createdAt:Date;
  updatedAt:Date;
  userId: number;
   WeightTotal: number; 
   WeightIndividual: number;
   ProduceType: string;
}
const MockApiImpl : jest.Mocked<scale> = new scale() as scale;
describe('ImagesController', () => {
  let controller: ScaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScaleController],
      providers:[ScaleRepository,PrismaService,ScaleService],
    }).compile();

    controller = module.get<ScaleController>(ScaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should get scale', async () => {
    jest
      .spyOn(controller, 'setscale')
      .mockImplementation(
        (): Promise<scale | null> => Promise.resolve(MockApiImpl)
      );
    expect(
      await controller.setscale({hi:1},'1','2','BREAD')
    ).toBe(MockApiImpl);
  });
  
  
});

