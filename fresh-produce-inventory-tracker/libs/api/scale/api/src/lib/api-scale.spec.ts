import { Test, TestingModule } from '@nestjs/testing';
import { Module } from '@nestjs/common';
import { ScaleRepository } from 'libs/api/scale/repository/src/lib/scale.repository';
import { ScaleService } from 'libs/api/scale/service/src/lib/scale.service';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
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
  }
  const MockApiImpl : jest.Mocked<scale> = new scale() as scale;

describe('ScaleController', () => {
    let controller: ScaleController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [ScaleController],
        providers:[ScaleController,ScaleRepository,PrismaService],
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
          await controller.setscale(null,10,1,null) //enter values later @Heinrich van Tonder
        ).toBe(MockApiImpl);
      });



});
  

  