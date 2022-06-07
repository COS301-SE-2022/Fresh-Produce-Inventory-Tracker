import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { NotificationController } from './notifications.controller';
import {NotificationService} from '../../../service/src/lib/notification.service';
import {NotificationRepository} from '../../../repository/src/lib/notifcation.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../../prisma/shared/src/lib/prismaService.service';
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
  providers: [NotificationService,NotificationRepository,PrismaService],
  exports: [],
})
export class ApiNotificationsApiModule {}

