import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { NotificationController } from './notifications.controller';
import {NotificaytionService} from '../../../service/src/lib/notification.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
const config = new ConfigService({});

@Module({
  imports:[MailerModule.forRoot({
    transport:{
      host:'smtp.sendgrid.net',
      auth:{
        user:'apikey',
        pass:config.get('EMAIl_PASS') 
      }
    }
  })
],
  controllers: [NotificationController], 
  providers: [NotificaytionService],
  exports: [],
})
export class ApiNotificationsApiModule {}

