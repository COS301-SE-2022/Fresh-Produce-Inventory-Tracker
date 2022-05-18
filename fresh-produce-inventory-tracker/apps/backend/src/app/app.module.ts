import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiAuthenticationApiModule } from '../../../../libs/api/authentication/api/src/lib/-api-authentication--api.module';
import { ApiImageApiModule } from '../../../../libs/api/image/api/src/lib/api-image-api.module';
import { ApiScaleApiModule } from '../../../../libs/api/scale/api/src/lib/api-scale-api.module'
import { PrismaService } from 'libs/api/prisma/shared/src/lib/prismaService.service';

@Module({
  imports: [ApiAuthenticationApiModule, ApiImageApiModule, ApiScaleApiModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule { }
