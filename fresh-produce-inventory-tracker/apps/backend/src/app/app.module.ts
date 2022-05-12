import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ApiAuthenticationApiModule} from '../../../../libs/api/authentication/api/src/lib/-api-authentication--api.module';
import {ApiImageApiModule} from '../../../../libs/api/image/api/src/lib/api-image-api.module';

@Module({
  imports: [ApiAuthenticationApiModule,ApiImageApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
