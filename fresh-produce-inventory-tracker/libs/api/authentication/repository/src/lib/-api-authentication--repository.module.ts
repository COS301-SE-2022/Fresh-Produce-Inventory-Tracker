import { Module } from '@nestjs/common';
import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';

@Module({
  imports: [PrismaService],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiAuthenticationRepositoryModule { }
