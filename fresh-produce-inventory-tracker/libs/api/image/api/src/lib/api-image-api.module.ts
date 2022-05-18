import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import { ImagesService } from '../../../service/src/lib/images.service';
import { ImagesController } from './images.controller';
import {ImagesRepository} from '../../../repository/src/lib/images.repository';

@Module({
  controllers: [ImagesController,],
  providers: [ImagesService,PrismaService,ImagesRepository],
  exports: [],
})
export class ApiImageApiModule {} 
