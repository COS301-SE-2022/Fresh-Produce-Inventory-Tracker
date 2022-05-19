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


});
  

  