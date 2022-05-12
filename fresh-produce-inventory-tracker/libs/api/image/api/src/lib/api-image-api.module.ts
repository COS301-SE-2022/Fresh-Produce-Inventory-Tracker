import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';

@Module({
  controllers: [ImagesController],
  providers: [],
  exports: [],
})
export class ApiImageApiModule {} 
