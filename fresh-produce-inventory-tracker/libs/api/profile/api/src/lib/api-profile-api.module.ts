import { Module } from '@nestjs/common';
import { profileController } from './profile.controller';
import { profileService } from '../../../service/src/lib/profile.service';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
import {profileRepository} from '../../../repository/src/lib/profile.repository';
@Module({
  controllers: [profileController],
  providers: [profileService,PrismaService,profileRepository],
  exports: [],
})
export class ApiProfileApiModule {}
