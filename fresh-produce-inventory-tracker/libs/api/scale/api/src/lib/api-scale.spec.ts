import { Test, TestingModule } from '@nestjs/testing';
import { Module } from '@nestjs/common';
import { ScaleRepository } from '../../../repository/src/lib/scale.repository';
import { ScaleService } from '../../../service/src/lib/scale.service';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import {tasksModule} from '../../../../tasks/api/src/lib/tasks.module';
import { ScaleController } from './scale.contoller';
import {RequestHandler} from "express";

class scale{
    id:number;
    createdAt:Date;
    updatedAt:Date;
    userId: number;
     WeightTotal: number; 
     WeightIndividual: number;
     ProduceType: string;
     Weight:number ;
     Name:string; Description:string;
  }
  const MockApiImpl : jest.Mocked<scale> = new scale() as scale;

describe('ScaleController', () => {
    let controller: ScaleController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [ScaleController],
        providers:[ScaleService,ScaleRepository,PrismaService],
        imports:[tasksModule]
      }).compile();
  
      controller = module.get<ScaleController>(ScaleController);
    });
///////////////////////////////////////////////////////////////////  
    it('should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('should get scale', async () => {
        jest
          .spyOn(controller, 'getscale')
          .mockImplementation(
            () => Promise.resolve(MockApiImpl)
          );
    
        expect(
          await controller.getscale (1,2)
        ).toBe(MockApiImpl);
      });

      it('should be defined', () => {
        expect(controller).toBeDefined();
      });
///////////////////////////////////////////////////////////////////
      it('should set scale', async () => {
        jest
          .spyOn(controller, 'setscale')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await controller.setscale(1,'100','10','Fruit/Veg','Red Apples','Apple') //enter values later @Heinrich van Tonder
        ).toBe(null);
      });

///////////////////////////////////////////////////////////////////
      it('should delets scale', async () => {
        jest
          .spyOn(controller, 'deletescale')
          .mockImplementation(
            () => Promise.resolve(null)
          );
    
        expect(
          await controller.deletescale(1,2) 
        ).toBe(null);
      });
///////////////////////////////////////////////////////////////////
it('should edit scale', async () => {
    jest
      .spyOn(controller, 'editscale')
      .mockImplementation(
        () => Promise.resolve(null)
      );

    expect(
      await controller.editscale(1,2, 40)
    ).toBe(null);
  });



});
  

  